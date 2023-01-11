import { createSlice } from "@reduxjs/toolkit";
import state from ".";

const slice = createSlice({
  name: "menu",
  initialState: { open: true, popupOpen: false, mainMenu: true },
  reducers: {
    open: (menu) => {
      menu.open = true;
    },
    close: (menu) => {
      menu.open = false;
    },
    popupOpen: (menu) => {
      menu.popupOpen = true;
    },
    popupClose: (menu) => {
      menu.popupOpen = false;
    },
    mainMenu: (menu) => {
      menu.mainMenu = true;
    },
    channelMenu: (menu) => {
      menu.mainMenu = false;
    },
  },
});

const { open, close, popupOpen, popupClose, mainMenu, channelMenu } =
  slice.actions;

export function menuOpen() {
  state.dispatch(open());
}

export function menuClose() {
  state.dispatch(close());
}

export function popupMenuToggle() {
  state.getState().entities.menu.popupOpen
    ? state.dispatch(popupClose())
    : state.dispatch(popupOpen());
}

export function showMainMenu() {
  state.dispatch(mainMenu());
}

export function showChannelMenu() {
  state.dispatch(channelMenu());
}

export default slice.reducer;

export interface Menu {
  open: boolean;
  popupOpen: boolean;
  mainMenu: boolean;
}
