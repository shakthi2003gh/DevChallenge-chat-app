import { auth } from ".";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { loginUser } from "./firestore";

const provider = new GoogleAuthProvider();

export function signIn() {
  signInWithPopup(auth, provider).then((result) => {
    const userId = result.user.uid;

    loginUser(userId);
  });
}
