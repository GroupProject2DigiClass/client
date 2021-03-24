import { combineReducers } from "redux";

import user from "./user";
import auth from "./auth";
import classReducer from "./class";
export default combineReducers({
  user,
  auth,
});
