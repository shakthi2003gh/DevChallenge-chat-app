import { db } from "./index";
import state from "../state/index";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { addUser, setUser, User } from "./../state/user";

const userRef = doc(db, "users", "k1In6xx8Fpk7pDG4GG1C");

export async function loginUser(userId: string) {
  const user = state.getState().user;
  const users = await getUsers();

  if (users?.[userId]) setUser(users[userId]);
  else
    addUser({
      id: userId,
      name: "kumar",
      groupsId: ["1"],
      photo: "https://source.unsplash.com/random/2",
    });
}

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
