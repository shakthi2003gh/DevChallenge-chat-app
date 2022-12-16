// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
  apiKey: import.meta.env.CHAT_APP_API_KEY,
  authDomain: import.meta.env.CHAT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.CHAT_APP_PROJECT_ID,
  storageBucket: import.meta.env.CHAT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.CHAT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.CHAT_APP_ID,
});

export const db = getFirestore(app);
