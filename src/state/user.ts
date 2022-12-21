import state from ".";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (_user, action) => action.payload.user,
    logout: () => ({}),
  },
});

const { login, logout: remove } = slice.actions;

export function setUser(user: User) {
  state.dispatch(login({ user }));
  localStorage.setItem("dvc-chat-app-user-id", user.id);
}

export function addUser(user: User) {
  state.dispatch({ type: "user/created", payload: { user } });
}

export function logout() {
  state.dispatch(remove());
  localStorage.setItem("dvc-chat-app-user-id", "");
}

export default slice.reducer;

export interface User {
  id: string;
  name: string;
  photo: string;
  groupsId: string[];
  admin?: boolean;
}
