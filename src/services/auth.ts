import { auth } from ".";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

export async function signIn() {
  const result = await signInWithPopup(auth, provider);
  const { uid, photoURL } = result.user;
  return { uid, photoURL };
}
