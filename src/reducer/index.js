import { combineReducers } from "redux";

import user from "./user";
import auth from "./auth";
import classReducer from "./class";
import assignmentReducer from "./allAssignments.js";
export default combineReducers({
  user,
  auth,
  assignmentReducer,
});
