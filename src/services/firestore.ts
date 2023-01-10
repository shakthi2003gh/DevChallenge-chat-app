import { db } from "./index";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { User } from "./../state/user";

const userRef = doc(db, "users", "k1In6xx8Fpk7pDG4GG1C");
const groupsRef = doc(db, "groups", "uM8ylGqyF7639R39wDHx");
const messageRef = doc(db, "messagesRoom", "oxtEMWPFRsqTT9LjY0TQ");

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

export async function getGroup(groupId: string) {
  const groups = await getGroups();
  return groups?.[groupId];
}

export async function getMessages(id: string) {
  const res = await getDoc(messageRef);

  return res.data()?.[id];
}
