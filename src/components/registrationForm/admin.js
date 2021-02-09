import React from "react";
import { Button, TextField, Menu, MenuItem } from "@material-ui/core";
import {
  COLLEGE,
  PRIMARY_SCHOOL,
  SECONDARY_SCHOOL,
  UNIVERSITY,
  YEAR,
  SEMESTER,
  CLASS,
  BRANCH,
  SECTION,
  DIRECTOR,
  PRINCIPLE,
} from "./../../constants";
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

export default function AdminForm() {
  const [userData, setUserData] = React.useState({
    name: "name",
    instituteName: "abc School",
    description: "",
    instituteType: SECONDARY_SCHOOL,
    choiceYear: CLASS,
    yearQuantity: 3,
    image: "",
    choiceBranch: SECTION,
    branchQuantity: 1,
    designation: PRINCIPLE,
    profileLink: "",
  });

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElYear, setAnchorElYear] = React.useState(null);
  const [anchorElBranch, setAnchorElBranch] = React.useState(null);

  const handleMenuItemClick = (event, type) => {
    setUserData({ ...userData, instituteType: type });
    setAnchorEl(null);
  };

  const handleMenuItemYearClick = (event, type) => {
    setUserData({ ...userData, choiceYear: type });
    setAnchorElYear(null);
  };

  const handleMenuItemBranchClick = (event, type) => {
    setUserData({ ...userData, choiceBranch: type });
    setAnchorElBranch(null);
  };

  const toggleDesignation = () => {
    if (userData.designation === PRINCIPLE)
      setUserData({ ...userData, designation: DIRECTOR });
    else setUserData({ ...userData, designation: PRINCIPLE });
  };

  function handleSubmit() {}
  return (
    <div style={{ width: "70%", paddingBottom: "100px" }}>
      <form noValidate onSubmit={handleSubmit}>
        <div className="row" style={{ paddingBottom: "60px" }}>
          <div
            style={{
              width: "15%",
              alignContent: "center",
              justifyContent: "left",
              display: "flex",
              paddingTop: "14px",
            }}
          >
            <Button
              onClick={() => toggleDesignation()}
              style={{ fontSize: "18px" }}
            >
              <u>{userData.designation}</u>
            </Button>
          </div>
          <div style={{ width: "83%" }}>
            <TextField
              variant="standard"
              name="name"
              fullWidth
              label="Full Name"
              value={userData.name}
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
              helperText="At least four characters."
              error={userData.name.trim().length > 3 ? false : true}
              style={{ marginTop: "8px" }}
              className={classes.textField}
            />
          </div>
        </div>
        <div style={{ paddingBottom: "60px" }}>
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
        <div style={{ paddingBottom: "60px" }}>
          <TextField
            variant="standard"
            name="description"
            fullWidth
            label="Description(Optional)"
            value={userData.description}
            onChange={(e) => {
              setUserData({ ...userData, description: e.target.value });
            }}
            style={{ marginTop: "8px" }}
            multiline
            rows={4}
          />
        </div>
        <TextField
          variant="standard"
          name="instituteName"
          fullWidth
          label="Institute Name"
          value={userData.instituteName}
          onChange={(e) => {
            setUserData({ ...userData, instituteName: e.target.value });
          }}
          helperText="At least five characters."
          error={userData.instituteName.trim().length > 5 ? false : true}
          style={{ marginTop: "8px" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            marginTop: "60px",
          }}
          className="row"
        >
          <div
            style={{
              fontWeight: "600",
              verticalAlign: "middle",
              paddingLeft: "10px",
            }}
          >
            Institute Type:
          </div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            <u>{userData.instituteType.replace("_", " ")}</u>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={(event) => setAnchorEl(null)}
          >
            <MenuItem
              onClick={(event) => handleMenuItemClick(event, PRIMARY_SCHOOL)}
            >
              Primary School
            </MenuItem>
            <MenuItem
              onClick={(event) => handleMenuItemClick(event, SECONDARY_SCHOOL)}
            >
              Secondary School
            </MenuItem>
            <MenuItem onClick={(event) => handleMenuItemClick(event, COLLEGE)}>
              College
            </MenuItem>
            <MenuItem
              onClick={(event) => handleMenuItemClick(event, UNIVERSITY)}
            >
              University
            </MenuItem>
          </Menu>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "8px",
          }}
          className="row"
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "60px",
            }}
          >
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={(event) => setAnchorElYear(event.currentTarget)}
              >
                <u>{userData.choiceYear}</u>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorElYear}
                keepMounted
                open={Boolean(anchorElYear)}
                onClose={(event) => setAnchorElYear(null)}
              >
                <MenuItem
                  onClick={(event) => handleMenuItemYearClick(event, YEAR)}
                >
                  Year
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleMenuItemYearClick(event, SEMESTER)}
                >
                  Semester
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleMenuItemYearClick(event, CLASS)}
                >
                  Class
                </MenuItem>
              </Menu>
            </div>
            <div style={{ width: "60px" }}>
              <TextField
                variant="outlined"
                name="yearValue"
                fullWidth
                error={userData.yearQuantity > 1 ? false : true}
                value={userData.yearQuantity}
                onChange={(e) => {
                  setUserData({ ...userData, yearQuantity: e.target.value });
                }}
                style={{ fontSize: "10px" }}
                type="number"
                inputProps={{
                  style: {
                    padding: 3,
                  },
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "60px",
            }}
          >
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={(event) => setAnchorElBranch(event.currentTarget)}
              >
                <u>{userData.choiceBranch}</u>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorElBranch}
                keepMounted
                open={Boolean(anchorElBranch)}
                onClose={(event) => setAnchorElBranch(null)}
              >
                <MenuItem
                  onClick={(event) => handleMenuItemBranchClick(event, BRANCH)}
                >
                  Branch
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleMenuItemBranchClick(event, SECTION)}
                >
                  Section
                </MenuItem>
              </Menu>
            </div>
            <div style={{ width: "60px" }}>
              <TextField
                variant="outlined"
                name="yearValue"
                fullWidth
                error={userData.yearQuantity > 0 ? false : true}
                value={userData.yearQuantity}
                onChange={(e) => {
                  setUserData({ ...userData, yearQuantity: e.target.value });
                }}
                style={{ fontSize: "10px" }}
                type="number"
                inputProps={{
                  style: {
                    padding: 3,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
