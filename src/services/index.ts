import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const app = initializeApp({
  apiKey: import.meta.env.VITE_CHAT_APP_API_KEY,
  authDomain: import.meta.env.VITE_CHAT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_CHAT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_CHAT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_CHAT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_CHAT_APP_ID,
});

export const auth = getAuth(app);
