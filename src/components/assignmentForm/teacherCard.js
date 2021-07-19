import React from "react";
import { Button, TextField } from "@material-ui/core";
import { TEACHER, MALE, FEMALE } from "./../../constants";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";
import { addTeacher } from "./../../actions";
//imp code template below                    
import axios from "axios";
import  { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//for redirecting to
import  { Redirect } from 'react-router-dom'
import { useHistory,useLocation } from "react-router-dom";

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



export default function TeacherForm() {
  let location=useLocation();
  
var key =window.location.pathname;
var url =key.split("/");
console.log(url);
  
  const [userData, setUserData] = React.useState({
    name: "",//title
    instituteID: "",//POINTS IN ASSIGNMENT
    rank: TEACHER,
    teacherID: "",//instructions
    email: "",
    classes: "",//semester
    sections: "",//branch
    profileLink: "",//DRIVE LINK FOR ASSIGNMENT
    images: "",
    driveLink: "",
    DOB: "01-01-2001",//due date
    DOB1:""//due time
  });
  let history = useHistory();

  const handleSubmit = async (e) => {
    
    console.log("Teacher Submit");
    console.log(userData);
    e.preventDefault();
    console.log(userData);
  
    const assignmentdata = {
      token:gtoken,  
      classKey:url[2],
      title: userData.name,
      points: userData.instituteID,
      instruction: userData.teacherID,
      driveLink: userData.profileLink,
      dueDate: userData.DOB,
      dueTime: userData.DOB1,
      semester: userData.classes,
      branch: userData.sections
    };
    console.log(assignmentdata);
    
    e.preventDefault();
    try {
      const dataw = await axios.post(
        "http://localhost:5005/makeassignment/postnewassignment",
        assignmentdata
      );
      
      console.log(dataw);
      alert(dataw.data);
      
      
      //console.log(postdata);
     // history.goBack()
     //e.history.push('/');
     window.history.back();

    } catch (err) {
      alert("error occurred while posting assignment");
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
            name="name"
            fullWidth
            label="Title"
            value={userData.name}
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
            // helperText="At least four characters."
            error={userData.name.trim().length > 3 ? false : true}
            style={{ marginTop: "8px" }}
            className={classes.textField}
          />
          <div style={{ paddingTop: "60px" }}>
            <TextField
              variant="standard"
              name="teacherID"
              fullWidth
              label="Instructions."
              value={userData.teacherID}
              onChange={(e) => {
                setUserData({ ...userData, teacherID: e.target.value });
              }}
              // helperText="At least two characters."
              error={userData.name.trim().length > 2 ? false : true}
              style={{ marginTop: "8px" }}
              className={classes.textField}
            />
          </div>
          <div style={{ paddingTop: "60px" }}>
            <TextField
              variant="standard"
              name="instituteID"
              fullWidth
              label="Points"
              value={userData.instituteID}
              onChange={(e) => {
                setUserData({ ...userData, instituteID: e.target.value });
              }}
              // helperText="At least two characters."
              error={userData.instituteID.trim().length > 2 ? false : true}
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
            
          </div>
          <div
            style={{
              paddingTop: "60px",
              display: "flex",
              justifyContent: "center",
            }}
            className="row"
          >
           
            <div
              style={{
                fontWeight: "600",
                paddingRight: "20px",
                paddingLeft: "100px",
                marginTop: "15px",
                display: "flex",
                height: "100%",
              }}
            >
              Due Date:
            </div>
            <div>
              <TextField
                variant="standard"
                name="DOB"
                fullWidth
                value={userData.DOB}
                type="date"
                onChange={(e) => {
                  setUserData({ ...userData, DOB: e.target.value });
                }}
                style={{ marginTop: "8px" }}
              />
            </div>
            
            <div
              style={{
                fontWeight: "600",
                paddingRight: "20px",
                paddingLeft: "100px",
                marginTop: "15px",
                display: "flex",
                height: "100%",
              }}
            >
              Time:
            </div>
            <div>
              <TextField
                variant="standard"
                name="DOB1"
                fullWidth
                value={userData.DOB1}
                type="time"
                onChange={(e) => {
                  setUserData({ ...userData, DOB1: e.target.value });
                }}
                style={{ marginTop: "8px" }}
              />
            </div>
          </div>
          <div style={{ paddingTop: "60px" }}>
            <TextField
              variant="standard"
              name="profileLink"
              fullWidth
              label="Drive Link(Optional)"
              value={userData.profileLink}
              onChange={(e) => {
                setUserData({ ...userData, profileLink: e.target.value });
              }}
              style={{ marginTop: "8px" }}
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





