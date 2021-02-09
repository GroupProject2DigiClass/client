import { ADD_STUDENT } from "./../constants";

export default (user = [], action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return [...user, action.payload];
    default:
      return user;
  }
};
