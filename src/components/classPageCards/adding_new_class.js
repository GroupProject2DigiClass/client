import React from "react";
import { Button, TextField } from "@material-ui/core";
import { TEACHER, MALE, FEMALE } from "./../../constants";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";
import { addTeacher } from "./../../actions";
//imp code template below                    
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//for redirecting to
import { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const user = JSON.parse(localStorage.getItem('profile'));
var gtoken;
if(user){
gtoken=user.token;
}


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  textField: {},
}));

var key =window.location.pathname;
var url =key.split("/");
console.log(url);

const zeroPad = (num, places) => String(num).padStart(places, "0");
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    month = zeroPad(month, 2);
    var day = today.getDate();
    day = zeroPad(day, 2);
    var hour = today.getHours();
    hour = zeroPad(hour, 2);
    var min = today.getMinutes();
    min = zeroPad(min, 2);
    var sec = today.getSeconds();
    sec = zeroPad(sec, 2);
    var code = url[2];
    var uniquekey =
      code +
      ":" +
      year +
      ":" +
      month +
      ":" +
      day +
      ":" +
      hour +
      ":" +
      min +
      ":" +
      sec;

      
      


export default function Addingnewclass() {
  const [userData, setUserData] = React.useState({
    subjectCode: "",//title
    subjectName: "",//semester
    subjectType: "",//branch
    headBackgroundColor: "",
    subjectTeacher:"",//
    studentAllowed:"",
  });
  let history = useHistory();

 
  

  const handleSubmit = async (e) => {

    console.log("Teacher Submit");
    console.log(userData);
    e.preventDefault();
    console.log(userData);

    var key23=userData.subjectTeacher.split(",");
    console.log(key);
   var see=userData.studentAllowed.split(",");
console.log(see);

    const assignmentdata = {
      classKey:uniquekey,
      subjectCode: userData.subjectCode,
      subjectName: userData.subjectName,
      subjectType: userData.subjectType,
      headBackgroundColor: userData.headBackgroundColor,
      subjectTeacher: key23,
      studentAllowed: see,
      headTextColor:"white",
      bodyBackgroundColor:"#014182",
      bodyBlockColor:"white",
      token:gtoken,
    };
    console.log(assignmentdata);

    e.preventDefault();
    try {
      const dataw = await axios.post(
        "http://localhost:5005/makeclass/",
        assignmentdata
      );

      console.log(dataw.data);
      alert(dataw.data);
      //alert("Your classroom is created successfully ");
      //console.log(postdata);
      // history.goBack()
      //e.history.push('/');
      //window.history.back();
      window.location.replace("/");

    } catch (err) {
      alert("error occurred while creating classroom");
      console.log(err);
    }

  };


  const classes = useStyles();

  const dispatch = useDispatch();

  const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);



  return (
    <div style={{ width: "70%", paddingBottom: "100px" }}>
      <form noValidate onSubmit={handleSubmit}>
        <div style={{ paddingBottom: "60px" }}>
          <TextField
            variant="standard"
            name="subjectCode"
            fullWidth
            label="subjectCode"
            value={userData.subjectCode}
            onChange={(e) => {
              setUserData({ ...userData, subjectCode: e.target.value });
            }}
            // helperText="At least four characters."
            error={userData.subjectCode.trim().length > 3 ? false : true}
            style={{ marginTop: "8px" }}
            className={classes.textField}
          />
          <div style={{ paddingTop: "60px" }}>
            <TextField
              variant="standard"
              name="subjectName"
              fullWidth
              label="subjectName."
              value={userData.subjectName}
              onChange={(e) => {
                setUserData({ ...userData, subjectName: e.target.value });
              }}
              // helperText="At least two characters."
              error={userData.subjectName.trim().length > 2 ? false : true}
              style={{ marginTop: "8px" }}
              className={classes.textField}
            />
          </div>
          

          
          
          
          <div
            style={{
              paddingTop: "60px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
          <div
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              <TextField
              
                variant="standard"
                name="subjectType"
                fullWidth
                label="subjectType"
                value={userData.subjectType}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    subjectType:e.target.value
                  });
                }}
                error={userData.subjectType.length > 0 ? false : true}
                style={{ marginTop: "8px" }}
                className={classes.textField}
              />
            </div>
            <div
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              <TextField
                variant="standard"
                name="headBackgroundColor"
                fullWidth
                label="headBackgroundColor "
                value={userData.headBackgroundColor}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    headBackgroundColor: e.target.value
                  });
                }}
                error={userData.headBackgroundColor.length > 0 ? false : true}
                style={{ marginTop: "8px" }}
                className={classes.textField}
              />
            </div>
            </div>
          
            <div
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              <TextField
              
                variant="standard"
                name="subjectTeacher"
                fullWidth
                label="Email of teachers for this class"
                value={userData.subjectTeacher}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    subjectTeacher:e.target.value
                  });
                }}
                error={userData.subjectTeacher.length > 0 ? false : true}
                style={{ marginTop: "8px" }}
                className={classes.textField}
              />
            </div>

            <div
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              <TextField
              
                variant="standard"
                name="studentAllowed"
                fullWidth
                label="Email of students of this class"
                value={userData.studentAllowed}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    studentAllowed:e.target.value
                  });
                }}
                error={userData.studentAllowed.length > 0 ? false : true}
                style={{ marginTop: "8px" }}
                className={classes.textField}
              />
            </div>
          
          <div style={{ paddingTop: "20px" }}>
            <Button
              size="large"
              type="submit"
              className={classes.button}
              style={{ border: "3px solid blueviolet", color: "blueviolet" }}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}


