import * as actionType from "../constants/index";
import { ADD_CLASS } from "../constants";
import { addClass } from "../actions/index";
const classReducer = (state = [], action) => {
  // console.log(action.payload);
  switch (action.type) {
    case ADD_CLASS:
      // return [...state, action.payload.data];
      addClass(
        action.payload.data,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      );
      return [{ state: "online" }];
    default:
      console.log("Invalid Action Type On classReducer");
      return state;
  }
};

export default classReducer;
