import { createSlice } from "@reduxjs/toolkit";
import state from ".";

const slice = createSlice({
  name: "messages",
  initialState: [],
  reducers: {
    set: (_, action) => action.payload.messages,
  },
});

const { set } = slice.actions;

export function getMessages(id: string) {
  state.dispatch({ type: "messages/get", payload: { id } });
}

export function setMessages(messages: MessageInterface[]) {
  state.dispatch(set({ messages }));
}

export default slice.reducer;

export interface MessageInterface {
  id: string;
  photo: string;
  name: string;
  timestamp: { nanoseconds: number; seconds: number };
  message: string;
}
