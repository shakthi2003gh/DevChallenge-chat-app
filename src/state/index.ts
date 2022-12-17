import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import user from "./user";
import api from "./middleware/api";

const reducer = combineReducers({ user });

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), api],
});
