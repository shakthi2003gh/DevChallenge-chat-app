import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import user, { User } from "./user";
import groups, { Group } from "./groups";
import modal, { Modal } from "./modal";
import menu, { Menu } from "./menu";
import api from "./middleware/api";

const entitiesReducer = combineReducers({ modal, menu });
const reducer = combineReducers({ user, groups, entities: entitiesReducer });

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), api],
});

export interface State {
  user: User;
  groups: Group[];
  entities: { modal: Modal; menu: Menu };
}
