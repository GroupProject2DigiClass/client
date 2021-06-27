import axios from "axios";

const url = "http://localhost5005";

export const createUser = async (newUser) =>
  await axios
    .post(url, newUser)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {});

export const createClass = async (data) => {
  await axios
    .post("http://localhost:5005/makeclass/", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {});
};

export const fetchallAssignmentsApi = async (data) => {
  var data;
  await axios
    .post("http://localhost:5005/makeassignment/getSubjectassignment", data)
    .then((res) => {
      console.log(res);
      data=res;
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {});

    return data;
};




