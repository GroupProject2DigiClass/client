import React from "react";
import { addClass } from "../../actions";
import { Button, TextField, Menu, MenuItem } from "@material-ui/core";

const ClassRoomCard = ({ subjectTeacher, task }) => {
  const [dataCard, setData] = React.useState({
    classKey: "",
    headBackgroundColor: "",
    headTextColor: "",
    bodyBackgroundColor: "",
    bodyBlockColor: "",
    subjectCode: "",
    subjectName: "",
    subjectType: "THEORY",
    studentsAllowed: [],
    subjectTeacher: [subjectTeacher],
  });

  const [validator, setValidator] = React.useState({
    headBackgroundColor: false,
    headTextColor: false,
    bodyBackgroundColor: false,
    bodyBlockColor: false,
    subjectCode: false,
    subjectName: false,
    subjectType: null,
    studentsAllowed: false,
  });

  let [update, setUpdate] = React.useState(1);

  let [correct, setCorrect] = React.useState(1);

  const HandleSubmit = () => {
    setUpdate(update + 1);
    setCorrect(correct + 1);
    console.log(dataCard.studentsAllowed.filter((e) => e.trim()));
    addClass(dataCard, task);
  };

  React.useEffect(() => {
    var v1 = dataCard.subjectCode;
    var v2 = dataCard.subjectType;
    var val = v1 + v2;
    setData({
      ...dataCard,
      classKey: val,
    });
  }, [update]);

  React.useEffect(() => {
    var v3 = dataCard.studentsAllowed;
    var arr = v3.filter((e) => e.trim());
    setData({
      ...dataCard,
      studentsAllowed: arr,
    });
  }, [correct]);

  return (
    <div>
      <div
        style={{
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "35px",
          color: "white",
        }}
      >
        {task === "ADD" ? "ADD CLASS" : "EDIT DETAILS"}
      </div>
      <div
        style={{
          paddingLeft: "5px",
          paddingRight: "5px",
          paddingTop: "10px",
        }}
      >
        <TextField
          variant="outlined"
          fullWidth
          label={
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              Subject Code
            </div>
          }
          value={dataCard.subjectCode}
          onChange={(e) => {
            setValidator({
              ...validator,
              subjectCode: e.target.value.length < 3,
            });
            setData({ ...dataCard, subjectCode: e.target.value });
            setUpdate(update + 1);
          }}
          error={validator.subjectCode}
          style={{
            backgroundColor: "white",
            width: "90%",
            marginBottom: "15px",
          }}
        />
        <TextField
          variant="outlined"
          fullWidth
          label={
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              Subject Name
            </div>
          }
          value={dataCard.subjectName}
          onChange={(e) => {
            setValidator({
              ...validator,
              subjectName: e.target.value.length < 3,
            });
            setData({ ...dataCard, subjectName: e.target.value });
          }}
          error={validator.subjectName}
          style={{
            backgroundColor: "white",
            width: "90%",
            marginBottom: "15px",
          }}
        />
        <TextField
          variant="outlined"
          fullWidth
          label={
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              Students Allowed
            </div>
          }
          value={dataCard.studentsAllowed.join(",")}
          onChange={(e) => {
            setValidator({
              ...validator,
              studentsAllowed:
                e.target.value.replace(/\s/g, " ").split(",")[0] === "" ||
                e.target.value.replace(/\s/g, " ").split(",")[0] === " ",
            });
            setData({
              ...dataCard,
              studentsAllowed: e.target.value.replace(" ", "").split(","),
            });
          }}
          error={validator.studentsAllowed}
          style={{
            backgroundColor: "white",
            width: "90%",
            marginBottom: "15px",
          }}
        />
        <label
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              paddingRight: "5px",
              paddingTop: "14px",
            }}
          >
            Type of course
          </p>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={(e) =>
              setValidator({ ...validator, subjectType: e.currentTarget })
            }
            style={{ backgroundColor: "rgb(200,200,200,0.6)" }}
          >
            <div
              style={{
                color: "white",
              }}
            >
              {dataCard.subjectType}
            </div>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={validator.subjectType}
            keepMounted
            open={Boolean(validator.subjectType)}
            onClose={() => setValidator({ ...validator, subjectType: null })}
          >
            <MenuItem
              onClick={() => {
                setValidator({ ...validator, subjectType: null });
                setData({ ...dataCard, subjectType: "THEORY" });
                setUpdate(update + 1);
              }}
            >
              THEORY
            </MenuItem>
            <MenuItem
              onClick={() => {
                setValidator({ ...validator, subjectType: null });
                setData({ ...dataCard, subjectType: "LAB" });
                setUpdate(update + 1);
              }}
            >
              LAB
            </MenuItem>
            <MenuItem
              onClick={() => {
                setValidator({ ...validator, subjectType: null });
                setData({ ...dataCard, subjectType: "PRACTICUM" });
                setUpdate(update + 1);
              }}
            >
              PRACTICUM
            </MenuItem>
          </Menu>
        </label>
        <TextField
          variant="outlined"
          fullWidth
          label={
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              Color 1
            </div>
          }
          value={dataCard.headBackgroundColor}
          onChange={(e) => {
            setValidator({
              ...validator,
              headBackgroundColor: e.target.value.length === 0,
            });
            setData({ ...dataCard, headBackgroundColor: e.target.value });
          }}
          error={validator.headBackgroundColor}
          style={{
            backgroundColor: "white",
            width: "90%",
            marginBottom: "15px",
          }}
        />
        <TextField
          variant="outlined"
          fullWidth
          label={
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              Color 2
            </div>
          }
          value={dataCard.headTextColor}
          onChange={(e) => {
            setValidator({
              ...validator,
              headTextColor: e.target.value.length === 0,
            });
            setData({ ...dataCard, headTextColor: e.target.value });
          }}
          error={validator.headTextColor}
          style={{
            backgroundColor: "white",
            width: "90%",
            marginBottom: "15px",
          }}
        />
        <TextField
          variant="outlined"
          fullWidth
          label={
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              Color 3
            </div>
          }
          value={dataCard.bodyBackgroundColor}
          onChange={(e) => {
            setValidator({
              ...validator,
              bodyBackgroundColor: e.target.value.length === 0,
            });
            setData({ ...dataCard, bodyBackgroundColor: e.target.value });
          }}
          error={validator.bodyBackgroundColor}
          style={{
            backgroundColor: "white",
            width: "90%",
            marginBottom: "15px",
          }}
        />
        <TextField
          variant="outlined"
          fullWidth
          label={
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              Color 4
            </div>
          }
          value={dataCard.bodyBorderColor}
          onChange={(e) => {
            setValidator({
              ...validator,
              bodyBlockColor: e.target.value.length === 0,
            });
            setData({ ...dataCard, bodyBlockColor: e.target.value });
          }}
          error={validator.bodyBlockColor}
          style={{
            backgroundColor: "white",
            width: "90%",
            marginBottom: "15px",
          }}
        />
        <button
          onClick={() => HandleSubmit()}
          style={{
            padding: "10px",
            backgroundColor: "blueviolet",
            color: "white",
            fontWeight: "bold",
            width: "90%",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        >
          {task === "ADD" ? "Create" : "Change"}
        </button>
      </div>
    </div>
  );
};

export default ClassRoomCard;
