import { createUser } from "../../services/firestore";
import { setUser } from "./../user";

const api = () => (next: any) => (action: any) => {
  next(action);

  if (action.type !== "user/created") return;

  createUser(action.payload.user).then(() => {
    setUser(action.payload.user);
  });
};

export default api;
