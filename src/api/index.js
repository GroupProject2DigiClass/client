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

export const getAllClass = async () => {
  var result;
  await axios.post("http://localhost:5005/makeclass/getAll").then((res) => {
    result = res;
  });
  return result;
};

export const createLecture = async (data) => {
  await axios
    .post("http://localhost:5005/makelecture/", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {});
};

export const editLecture = async (data) => {
  await axios
    .post("http://localhost:5005/makelecture/edit", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {});
};

export const getAllLecture = async (data) => {
  var result;
  await axios
    .post("http://localhost:5005/makelecture/getAll/", data)
    .then((res) => {
      result = res;
    });
  return result;
};

export const getStatus = async (data) => {
  var result;
  await axios
    .post("http://localhost:5005/makelecture/getStatus", data)
    .then((res) => {
      result = res;
    });
  return result;
};
