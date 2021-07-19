import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FlareIcon from "@material-ui/icons/Flare";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Button,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { getLecture, setCompleted, setBookmark } from "../api";
import { useLocation } from "react-router-dom";

function getRandom() {
  return Math.floor((Math.random() * 50 + 1) / 5);
}

export default function LecturePage() {
  var backgroundLocation =
    "/images/background" + getRandom().toString() + ".jfif";

  const location = useLocation();
  const [data, editData] = React.useState({
    completed: false,
    bookmark: false,
    color1: "red",
    color2: "green",
    title: "temp",
    topics: [
      { topic: "topic1", imp: 0 },
      { topic: "topic2", imp: 1 },
    ],
    files: [{ name: "file1" }],
    assignmentKey: "TEMP000",
    rollNo: "19400",
  });

  const SetCompleted = async () => {
    var key = window.location.pathname;
    key = key.substring(9, key.length);
    await setCompleted(key, data.rollNo).then((res) => {
      console.log(res);
    });
    editData({ ...data, completed: true });
  };
  const ToggleBookmark = async () => {
    var key = window.location.pathname;
    key = key.substring(9, key.length);
    await setBookmark(key, data.rollNo).then((res) => {
      console.log(res);
    });
    editData({ ...data, bookmark: !data.bookmark });
  };

  React.useEffect(async () => {
    var key = window.location.pathname;
    key = key.substring(9, key.length);
    editData({ ...data, assignmentKey: key });
    await getLecture({ assignmentKey: key }).then((res) => {
      editData({
        ...data,
        topics: res.data[0].topics,
        files: res.data[0].files,
        title: location.state.title,
        bookmark: location.state.bookmark,
        completed: location.state.completed,
        rollNo: location.state.rollNo,
      });
      console.log(data);
    });
  }, []);

  return (
    <diV
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(${backgroundLocation})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(200,200,200,0.8)",
          justifyContent: "center",
          borderRadius: "10px",
          width: "80vh",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            display: "flex",
            fontSize: "30px",
            fontWeight: "600",
            color: `${data.color1}`,
            textAlign: "center",
            textDecoration: "underline red",
          }}
        >
          {data.title}
        </div>
        <div
          style={{
            alignItem: "center",
            justifyContent: "center",
            padding: "10px",
            paddingBottom: "0px",
          }}
        >
          <List style={{ width: "100%" }}>
            {data.topics.map((unit, index) => {
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
                </ListItem>
              );
            })}
          </List>
        </div>
        <div
          style={{
            alignItem: "center",
            justifyContent: "center",
            paddingRight: "10px",
            paddingLeft: "10px",
          }}
        >
          <List style={{ width: "100%" }}>
            {data.files.map((unit, index) => {
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
                  <ListItemText>
                  <a href={unit} target="_blank">
                    {unit.name !== undefined ? unit.name : unit+{index}}
                  </a>
                           
                  </ListItemText>
                  <ListItemSecondaryAction edge="end" aria-label="delete">
                    <IconButton style={{ color: "#007FFF" }} onClick={() => {}}>
                      <GetAppOutlinedIcon href={unit} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </div>
        <div
          style={{
            alignItem: "center",
            justifyContent: "center",
            padding: "10px",
            paddingBottom: "0px",
            paddingTop: "0px",
            width: "100%",
          }}
        >
          <Button
            color="primary"
            variant="contained"
            component="span"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              paddingBottom: "10px",
            }}
            onClick={() => ToggleBookmark()}
          >
            {data.bookmark ? "Remove Bookmark" : "Apply Bookmark"}
          </Button>
        </div>
        <div
          style={{
            alignItem: "center",
            justifyContent: "center",
            padding: "10px",
            width: "100%",
            paddingBottom: "20px",
          }}
        >
          {data.completed ? (
            <div
              style={{
                color: "red",
                backgroundColor: "rgb(125,125,125,0.5)",
                fontWeight: "bold",
                borderRadius: "10px",
                alignItem: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <diV>Completed !!!</diV>
            </div>
          ) : (
            <Button
              color="secondary"
              variant="contained"
              component="span"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
              }}
              onClick={() => SetCompleted()}
            >
              Mark Completed
            </Button>
          )}
        </div>
      </div>
    </diV>
  );
}
