import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import user from "./user";
import modal from "./modal";
import api from "./middleware/api";

const entitiesReducer = combineReducers({ modal });
const reducer = combineReducers({ user, entities: entitiesReducer });

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), api],
});
