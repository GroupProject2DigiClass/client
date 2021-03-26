import * as api from "../api";
import { useDispatch } from "react-redux";
import { ADD_STUDENT, ADD_TEACHER, ADD_CLASS } from "./../constants";

export const addStudent = (userData) => async (dispatch) => {
  try {
    const { data } = await api.createUser(userData);
    dispatch({ type: ADD_STUDENT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addTeacher = (userData) => async (dispatch) => {
  try {
    const data = await api.createUser(userData);
    dispatch({ type: ADD_TEACHER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addClass = async (classData, task) => {
  if (task === "ADD") {
    try {
      const data = await api.createClass(classData);
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  } else {
    try {
      const data = await api.editClass(classData);
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
};
