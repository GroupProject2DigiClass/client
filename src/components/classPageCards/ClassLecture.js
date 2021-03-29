import React from "react";
import {} from "../../actions";
import {
  List,
  TextField,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FlareIcon from "@material-ui/icons/Flare";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const ClassLectureCard = ({ task, classKey, unitN, unit }) => {
  const [dataCard, setData] = React.useState({
    classKey: classKey,
    assignmentKey: "",
    title: "",
    unitN: unitN,
    unit: unit,
    topics: [],
    files: [],
  });

  const [validator, setValidator] = React.useState({
    title: false,
    unitN: false,
    unit: false,
    topic: false,
  });

  let [topics, setTopics] = React.useState(-1);

  let [topic, setTopic] = React.useState("");

  let [tempT, changeT] = React.useState(1);

  let [tempD, changeD] = React.useState(1);

  let [tempA, changeA] = React.useState(1);

  let [file, addFile] = React.useState(null);

  let [tempF, changeF] = React.useState(1);

  let [tempR, changeR] = React.useState(1);

  React.useEffect(() => {
    var index = topics;
    if (topics !== -1) {
      var arr = dataCard.topics;
      arr[index].imp ? (arr[index].imp = 0) : (arr[index].imp = 1);
      setData({ ...dataCard, topics: arr });
    }
  }, [tempT]);

  React.useEffect(() => {
    if (topics !== -1) {
      var mat = dataCard.topics;
      var arr = [];
      for (var i = 0; i < mat.length; i++) if (i != topics) arr.push(mat[i]);
      setData({ ...dataCard, topics: arr });
      setTopics(-1);
    }
  }, [tempD]);

  React.useEffect(() => {
    if (topic !== "") {
      var arr = dataCard.topics;
      arr.push({ topic: topic, imp: 0 });
      setData({ ...dataCard, topics: arr });
      setTopic("");
    }
  }, [tempA]);

  React.useEffect(() => {
    if (file !== null) {
      var arr = dataCard.files;
      arr.push(file);
      console.log(file.name);
      console.log(dataCard);
      addFile(null);
    }
  }, [tempF]);

  React.useEffect(() => {
    if (topics !== -1) {
      var mat = dataCard.files;
      var arr = [];
      for (var i = 0; i < mat.length; i++) if (i != topics) arr.push(mat[i]);
      setData({ ...dataCard, files: arr });
      setTopics(-1);
    }
  }, [tempR]);

  const HandleSubmit = () => {};

  React.useEffect(() => {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var code = classKey;
    var key =
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
    setData({ ...dataCard, assignmentKey: key });
  }, []);

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
        {task === "ADD" ? "POST LECTURE" : "EDIT LECTURE"}
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
                color: "blue",
              }}
            >
              Title
            </div>
          }
          value={dataCard.title}
          onChange={(e) => {
            setValidator({
              ...validator,
              title: e.target.value.length < 2,
            });
            setData({ ...dataCard, title: e.target.value });
          }}
          error={validator.title}
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
                color: "blue",
              }}
            >
              Unit Number
            </div>
          }
          type="number"
          value={dataCard.unitN}
          onChange={(e) => {
            setValidator({
              ...validator,
              unitN: e.target.value < 1,
            });
            setData({ ...dataCard, unitN: e.target.value });
          }}
          error={validator.unitN}
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
                color: "blue",
              }}
            >
              Unit Name
            </div>
          }
          value={dataCard.unit}
          onChange={(e) => {
            setValidator({
              ...validator,
              unit: e.target.value.length < 2,
            });
            setData({ ...dataCard, unit: e.target.value });
          }}
          error={validator.unit}
          style={{
            backgroundColor: "white",
            width: "90%",
            marginBottom: "15px",
          }}
        />
        <List style={{ width: "90%" }}>
          {dataCard.topics.map((unit, index) => {
            return (
              <ListItem
                style={{
                  backgroundColor: "rgb(237,237,237,0.5)",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                <ListItemAvatar>
                  <Avatar>
                    <IconButton
                      style={{
                        backgroundColor: "white",
                        color: "#007FFF",
                        opacity: "1",
                        height: "100%",
                        width: "100%",
                        border: "3px solid #007FFF",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() => {
                        setTopics(index);
                        changeT(tempT + 1);
                      }}
                    >
                      {unit.imp === 1 ? (
                        <FlareIcon className="listIcon" />
                      ) : (
                        <ChevronRightIcon className="listIcon" />
                      )}
                    </IconButton>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={unit.topic} />
                <ListItemSecondaryAction edge="end" aria-label="delete">
                  <IconButton
                    style={{ color: "#007FFF" }}
                    onClick={() => {
                      setTopics(index);
                      changeD(tempD + 1);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
        <div style={{ display: "flex", width: "90%" }}>
          <TextField
            variant="outlined"
            fullWidth
            value={topic}
            label={
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "5px",
                  color: "blue",
                }}
              >
                Add Topic
              </div>
            }
            onChange={(e) => {
              setValidator({
                ...validator,
                topic: e.target.value.length < 2,
              });
              setTopic(e.target.value.trim());
            }}
            error={validator.topic}
            style={{
              backgroundColor: "white",
              marginBottom: "20px",
            }}
          />
          <IconButton
            color="primary"
            onClick={() => {
              changeA(tempA + 1);
              setValidator({
                ...validator,
                topic: false,
              });
            }}
          >
            <AddCircleOutlineIcon
              style={{
                backgroundColor: "white",
                height: "35px",
                width: "35px",
                borderRadius: "18px",
                alignSelf: "center",
                justifySelf: "center",
                marginBottom: "50%",
              }}
            />
          </IconButton>
        </div>
        <List style={{ width: "90%" }}>
          {dataCard.files.map((unit, index) => {
            return (
              <ListItem
                style={{
                  backgroundColor: "rgb(237,237,237,0.3)",
                  opacity: "1",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  color: "blue",
                }}
              >
                <ListItemText primary={unit.name} />
                <ListItemSecondaryAction edge="end" aria-label="delete">
                  <IconButton
                    style={{ color: "#007FFF" }}
                    onClick={() => {
                      setTopics(index);
                      changeR(tempR + 1);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
        <div>
          <label style={{ width: "100%" }}>
            <input
              style={{ display: "none" }}
              type="file"
              onChange={(e) => {
                changeF(tempF + 1);
                addFile(e.target.files[0]);
              }}
            />

            <Button
              color="secondary"
              variant="contained"
              component="span"
              style={{ width: "90%", padding: "10px", borderRadius: "10px" }}
            >
              <b>Add Files</b>
            </Button>
          </label>
        </div>
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

export default ClassLectureCard;
