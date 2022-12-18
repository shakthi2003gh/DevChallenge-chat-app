import { auth } from ".";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

export async function signIn() {
  const result = await signInWithPopup(auth, provider);
  const userId = result.user.uid;
  return userId;
}
