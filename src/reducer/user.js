import { ADD_STUDENT } from "./../constants";

const user = (state = [], action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default user;
