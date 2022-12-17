import state from ".";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {} as User,
  reducers: {
    login: (_user, action) => action.payload.user,
  },
});

const { login } = slice.actions;

export function setUser(user: User) {
  state.dispatch(login({ user }));
}

export function addUser(user: User) {
  state.dispatch({ type: "user/created", payload: { user } });
}

export default slice.reducer;

export interface User {
  id: string;
  name: string;
  photo: string;
  groupsId: string[];
  admin?: boolean;
}
