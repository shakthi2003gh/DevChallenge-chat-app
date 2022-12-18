import { createUser } from "../../services/firestore";
import { hideModal } from "../modal";
import { setUser } from "./../user";

const api = () => (next: any) => (action: any) => {
  next(action);

  if (action.type !== "user/created") return;

  createUser(action.payload.user).then(() => {
    hideModal();
    setUser(action.payload.user);
  });
};

export default api;
