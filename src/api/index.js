import axios from "axios";
var user = JSON.parse(localStorage.getItem('profile'));
var gtoken;
if(user){
gtoken=user.token;
}
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

export const getAllClass = async (data) => {
  var result;
  await axios.post("http://localhost:5005/makeclass/getAll",data).then((res) => {
    result = res;
  });
  return result;
};

export const createLecture = async (data) => {
  data.token=gtoken;
  console.log(data);
  
var data1;
  await axios
    .post("http://localhost:5005/makelecture/", data)
    .then((res) => {
      console.log(res);
      data1=res.data;
      console.log(data1);
      
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      
    });

return data1;
    
};

export const editLecture = async (data) => {
  data.token=gtoken;
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

  data.token=gtoken;

  var result;
  await axios
    .post("http://localhost:5005/makelecture/getAll/", data)
    .then((res) => {
      result = res;
    });
  return result;
};

export const getLecture = async (key) => {
  key.token=gtoken;
console.log(key);
  var result;
  await axios
    .post("http://localhost:5005/makelecture/getLecture", key)
    .then((res) => {
      result = res;
    });
  return result;
};

export const addLecture = async (lectureData) => {
  var data1;
  lectureData.token=gtoken;
  console.log(lectureData);
    try {
      let data = await axios.post("http://localhost:5005/makelecture/", lectureData)
      
        console.log(data);
        data1=data;
      
    } catch (error) {
      console.log(error);
    }
  
console.log(data1);

  return data1;
};


export const getStatus = async (data) => {
  data.token=gtoken;
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
      token:gtoken,
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
      token:gtoken,
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
      data = res;
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
    .post(
      "http://localhost:5005/makeassignment/getIndividualSubjectassignment",
      data
    )
    .then((res) => {
      console.log(res);
      data = res;
    })

    .catch((err) => {
      console.log(err);
    })
    .then(() => {});

  return data;
};

export const getAllPractice = async (data) => {
  var data;
  await axios.post("http://localhost:5005/makepractice/", data).then((res) => {
    data = res;
  });
  return data;
};

export const postPractice = async (data) => {
  var data;
  await axios
    .post("http://localhost:5005/makepractice/add", data)
    .then((res) => {
      data = res;
    });
  return data;
};

export const getGivenPractice = async (data) => {
  var data;
  await axios.post("http://localhost:5005/makepractice/given", data).then((res) => {
    data = res;
  });
  return data;
};
