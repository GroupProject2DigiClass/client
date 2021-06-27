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

export const getLecture = async (key) => {
  var result;
  await axios
    .post("http://localhost:5005/makelecture/getLecture", key)
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

export const setCompleted = async (assignmentKey, rollNo) => {
  var result;
  await axios
    .post("http://localhost:5005/makelecture/setCompleted", {
      assignmentKey: assignmentKey,
      rollNo: rollNo,
    })
    .then((res) => {
      result = res;
    });
  return result;
};

export const setBookmark = async (assignmentKey, rollNo) => {
  var result;
  await axios
    .post("http://localhost:5005/makelecture/setBookmarked", {
      assignmentKey: assignmentKey,
      rollNo: rollNo,
    })
    .then((res) => {
      result = res;
    });
  return result;
};

export const sendMessage = async (data) => {
  // console.log(data);
  var result;
  await axios.post("http://localhost:5005/makechat/send", data).then((res) => {
    result = res;
  });
  return result;
};

export const getMessage = async (data) => {
  var result;
  await axios.post("http://localhost:5005/makechat/", data).then((res) => {
    result = res;
  });
  return result;
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

export const fetchindividualAssignmentsApi = async (data) => {
  var data;
  await axios
    .post("http://localhost:5005/makeassignment/getIndividualSubjectassignment", data)
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