import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import user, { User } from "./user";
import groups, { Group } from "./groups";
import messages, { MessageInterface } from "./messages";
import group from "./selectedGroup";
import modal, { Modal } from "./modal";
import menu, { Menu } from "./menu";
import api from "./middleware/api";

const entities = combineReducers({
  modal,
  menu,
  selectedGroup: group,
});
const reducer = combineReducers({ user, groups, messages, entities });

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), api],
});

export interface State {
  user: User;
  groups: Group[];
  messages: MessageInterface[];
  entities: { modal: Modal; menu: Menu; selectedGroup: Group };
}
