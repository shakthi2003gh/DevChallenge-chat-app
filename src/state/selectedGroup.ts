import state from ".";
import { createSlice } from "@reduxjs/toolkit";
import { Group } from "./groups";

const slice = createSlice({
  name: "group",
  initialState: {},
  reducers: {
    selected: (_group, action) => action.payload.group,
  },
});

const { selected } = slice.actions;

export function selectGroup(groupId: string) {
  state.dispatch({ type: "group/select", payload: { groupId } });
}

export function selectedGroup(group: Group) {
  state.dispatch(selected({ group }));
}

export default slice.reducer;
