import * as api from "../api";

import { ADD_STUDENT } from "./../constants";

export const addStudent = (userData) => async (dispatch) => {
  try {
    const { data } = await api.createUser(userData);
    dispatch({ type: ADD_STUDENT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
