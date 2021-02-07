import React from "react";
import { Button, TextField, Menu, MenuItem } from "@material-ui/core";
import { STUDENT } from "./../../constants";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";

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
    name: "name",
    instituteName: "abc School",
    rank: STUDENT,
    rollNo: "01",
  });

  const classes = useStyles();

  return (
    <div style={{ width: "70%", paddingBottom: "100px" }}>
      <form noValidate onSubmit={handleSubmit}>
        <div className="row" style={{ paddingBottom: "60px" }}>
          <TextField
            variant="standard"
            name="name"
            fullWidth
            label="Name"
            value={userData.name}
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
            helperText="At least four characters."
            error={userData.name.trim().length > 3 ? false : true}
            style={{ marginTop: "8px" }}
            className={classes.textField}
          />
          <div style={{ paddingTop: "60px" }}>
            <TextField
              variant="standard"
              name="rollno"
              fullWidth
              label="Roll no."
              value={userData.name}
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
              helperText="At least two characters."
              error={userData.name.trim().length > 2 ? false : true}
              style={{ marginTop: "8px" }}
              className={classes.textField}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
