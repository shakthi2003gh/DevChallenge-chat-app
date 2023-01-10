import state from ".";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "groups",
  initialState: [],
  reducers: {
    set: (_groups, action) => action.payload.groups,
  },
});

const { set } = slice.actions;

export function setGroups(groups: Group[]) {
  state.dispatch(set({ groups }));
}

export default slice.reducer;

export interface Group {
  id: string;
  name: string;
  membersId: string[];
  messagesId: string;
  depscription: string;
}
