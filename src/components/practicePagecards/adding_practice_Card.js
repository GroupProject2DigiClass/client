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

var user = JSON.parse(localStorage.getItem('profile'));
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
   


export default function PracticeForm() {
  var sec = today.getSeconds();
  sec = zeroPad(sec, 2);
  

  const [userData, setUserData] = React.useState({
    title: "",//title
    unitN: 1,//semester
    unit: "",//branch
    images: "",
    instructions:"",
    driveLink:"",
    
  });
  let history = useHistory();





  var keyis =window.location.pathname;
  var url =keyis.split("/");
  console.log(url);
  
  var key =
  url[2]+
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

  const handleSubmit = async (e) => {

    console.log("Teacher Submit");
    console.log(userData);
    e.preventDefault();
    console.log(userData);
console.log(url[2]);

    const assignmentdata = {
      classKey:url[2],
      assignmentKey: key,
      title: userData.title,
      instruction: userData.instructions,
      unitN: userData.unitN,
      unit: userData.unit,
      files: userData.images,
     token:gtoken,
     driveLink: userData.driveLink,
    };
    console.log(assignmentdata);

    e.preventDefault();
    var datam;
    try {
     const dataw = await axios.post(
        "http://localhost:5005/makepractice/add",
        assignmentdata
      );

datam=dataw;

      console.log(dataw.data);

      alert(dataw.data);
      //console.log(postdata);
      // history.goBack()
      //e.history.push('/');
      window.history.back();

    } catch (err) {

      
      alert(err.message);

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
            name="title"
            fullWidth
            label="Title"
            value={userData.title}
            onChange={(e) => {
              setUserData({ ...userData, title: e.target.value });
            }}
            // helperText="At least four characters."
            error={userData.title.trim().length > 3 ? false : true}
            style={{ marginTop: "8px" }}
            className={classes.textField}
          />
          <div style={{ paddingTop: "60px" }}>
            <TextField
              variant="standard"
              name="instruction"
              fullWidth
              label="Instructions."
              value={userData.instruction}
              onChange={(e) => {
                setUserData({ ...userData, instructions: e.target.value });
              }}
              // helperText="At least two characters."
              error={userData.instructions.trim().length > 2 ? false : true}
              style={{ marginTop: "8px" }}
              className={classes.textField}
            />
          </div>
          <div style={{ paddingTop: "60px" }}>
            <TextField
              variant="standard"
              name="driveLink"
              fullWidth
              label="driveLink."
              value={userData.driveLink}
              onChange={(e) => {
                setUserData({ ...userData, driveLink: e.target.value });
              }}
              // helperText="At least two characters."
              error={userData.driveLink.trim().length > 0 ? false : true}
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
                name="unitN"
                fullWidth
                label="Unit No."
                value={userData.unitN}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    unitN:Number(e.target.value)
                  });
                }}
                error={userData.unitN > 0 ? false : true}
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
                name="unit"
                fullWidth
                label="Unit "
                value={userData.unit}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    unit: e.target.value
                  });
                }}
                error={userData.unit.length > 0 ? false : true}
                style={{ marginTop: "8px" }}
                className={classes.textField}
              />
            </div>
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


