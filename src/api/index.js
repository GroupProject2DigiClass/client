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

export const editClass = async (data) => {
  await axios
    .post("http://localhost:5005/makeclass/edit", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {});
};
