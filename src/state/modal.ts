import state from ".";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "modal",
  initialState: {},
  reducers: {
    display: (_modal, action) => action.payload.modal,
    hide: () => ({}),
  },
});

const { display, hide } = slice.actions;

export function displayModal(name: string, props: any) {
  state.dispatch(display({ modal: { name, props: { ...props } } }));
}

export function hideModal() {
  state.dispatch(hide());
}

export default slice.reducer;

export interface Modal {
  name: string;
  props: any;
}
