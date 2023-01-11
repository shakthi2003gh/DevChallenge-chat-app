import { db } from "./index";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { User } from "./../state/user";
import { MessageInterface } from "../state/messages";
import { Group } from "../state/groups";

export const userRef = doc(db, "users", "k1In6xx8Fpk7pDG4GG1C");
const groupsRef = doc(db, "groups", "uM8ylGqyF7639R39wDHx");
export const messageRef = doc(db, "messagesRoom", "oxtEMWPFRsqTT9LjY0TQ");

export async function getUsers() {
  const res = await getDoc(userRef);
  return res.data();
}

export async function createUser(user: User) {
  const users = await getUsers();

  setDoc(userRef, {
    ...users,
    [user.id]: user,
  });
}

export async function getGroups() {
  const res = await getDoc(groupsRef);
  return res.data();
}

export async function createGroup(group: Group) {
  const groups = await getGroups();
  const id = group.id;

  setDoc(groupsRef, { ...groups, [id]: group });
  addUserInGroup(group.membersId[0], id);
  newMessageSection(id);
}

export async function getGroup(groupId: string) {
  const groups = await getGroups();
  return groups?.[groupId];
}

export async function addUserInGroup(userId: string, groupId: string) {
  const users = await getUsers();
  users?.[userId].groupsId.push(groupId);
  setDoc(userRef, users);
}

export async function newMessageSection(id: string) {
  const res = await getDoc(messageRef);

  setDoc(messageRef, { ...res.data(), [id]: { id, messages: [] } });
}

export async function getMessages(id: string) {
  const res = await getDoc(messageRef);

  return res.data()?.[id];
}

export async function setMessage(id: string, message: MessageInterface) {
  const messagesCols = (await getDoc(messageRef)).data();
  const { messages } = await getMessages(id);

  Object.setPrototypeOf(message.timestamp, Timestamp.prototype);

  messages.push(message);

  await setDoc(messageRef, { ...messagesCols, [id]: { id, messages } });
}
