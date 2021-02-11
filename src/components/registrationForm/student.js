import React from "react";
import { Button, TextField } from "@material-ui/core";
import { STUDENT, MALE, FEMALE } from "./../../constants";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import { addStudent } from "./../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  textField: {},
}));

export default function StudentForm() {
  const [userData, setUserData] = React.useState({
    name: "",
    instituteID: "",
    rank: STUDENT,
    rollNo: "",
    email: "",
    class: 1,
    section: "A",
    gender: MALE,
    profileLink: "",
    images: "",
    dob: "01-01-2001",
  });

  const toggleGender = () => {
    if (userData.gender === MALE) setUserData({ ...userData, gender: FEMALE });
    else setUserData({ ...userData, gender: MALE });
  };

  const classes = useStyles();

  const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log("Student Submit");
    console.log(userData);
    e.preventDefault();
    dispatch(addStudent(userData));
  };

  return (
    <div style={{ width: "70%", paddingBottom: "100px" }}>
      <form noValidate onSubmit={handleSubmit}>
        <div style={{ paddingBottom: "60px" }}>
          <TextField
            variant="standard"
            name="name"
            fullWidth
            label="Name"
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
              name="rollNo"
              fullWidth
              label="Roll no."
              value={userData.teacherID}
              onChange={(e) => {
                setUserData({ ...userData, rollNo: e.target.value });
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
              label="Institute ID"
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
          <div style={{ paddingTop: "60px" }}>
            <TextField
              variant="standard"
              name="email"
              fullWidth
              label="Email"
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
              // helperText="Enter proper email address."
              error={regExp.test(userData.email.trim()) ? false : true}
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
                name="class"
                fullWidth
                label="Class/Semester/Year"
                value={userData.class}
                onChange={(e) => {
                  setUserData({ ...userData, class: e.target.value });
                }}
                error={userData.class > 0 ? false : true}
                type="number"
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
                name="section"
                fullWidth
                label="Section/Branch"
                value={userData.section}
                onChange={(e) => {
                  setUserData({ ...userData, section: e.target.value });
                }}
                error={userData.section.trim().length > 0 ? false : true}
                style={{ marginTop: "8px" }}
                className={classes.textField}
              />
            </div>
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
                paddingRight: "10px",
                paddingLeft: "20px",
                marginTop: "10px",
                display: "flex",
                height: "100%",
              }}
            >
              Gender:
            </div>
            <div>
              <Button
                onClick={() => toggleGender()}
                style={{ fontSize: "18px" }}
              >
                <u>{userData.gender}</u>
              </Button>
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
              DOB:
            </div>
            <div>
              <TextField
                variant="standard"
                name="dob"
                fullWidth
                value={userData.dob}
                type="date"
                onChange={(e) => {
                  setUserData({ ...userData, dob: e.target.value });
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
              label="Profile Link(Optional)"
              value={userData.profileLink}
              onChange={(e) => {
                setUserData({ ...userData, profileLink: e.target.value });
              }}
              style={{ marginTop: "8px" }}
            />
          </div>
          <div
            style={{
              paddingTop: "10px",
              justifyContent: "left",
              display: "flex",
              paddingTop: "60px",
            }}
          >
            <div
              style={{
                fontWeight: "600",
                verticalAlign: "middle",
                paddingRight: "10px",
              }}
            >
              Add Profile Picture
            </div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setUserData({ ...userData, images: base64 })
              }
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
