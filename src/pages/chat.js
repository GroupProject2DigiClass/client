import React from "react";
import { Button, TextField } from "@material-ui/core";
import { sendMessage, getMessage } from "../api";

export default function ChatPage({
  classKey,
  rollNo,
  headBackgroundColor,
  bodyBackgroundColor,
}) {
  const [chat, editChat] = React.useState("");
  const [send, editSend] = React.useState(0);
  const [anonymous, editAnonymous] = React.useState(false);
  const [messages, editMessages] = React.useState([]);
  const [updated, updateMessage] = React.useState(0);
  const [data, editData] = React.useState({
    rollNo: "19401",
    classKey: "TEST001THEORY",
  });

  React.useEffect(() => {
    updateMessage(updated + 1);
  }, []);
  React.useEffect(async () => {
    console.log(bodyBackgroundColor);
    editData({ ...chat, rollNo: rollNo, classKey: classKey });
    await getMessage({ classKey: classKey, rollNo: rollNo }).then((res) => {
      editMessages(res.data);
    });
    console.log(messages);
  }, [updated]);

  React.useEffect(async () => {
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
    var time =
      year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
    if (send > 0)
      await sendMessage({
        classKey: data.classKey,
        sender: data.rollNo,
        time: time,
        message: chat,
        anonymous: anonymous,
      }).then((e) => console.log(e));
    editChat("");
    updateMessage(updated + 1);
  }, [send]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <div>
        {messages.map((unit) => (
          <div
            style={{
              border: `2px solid white`,
              backgroundColor: headBackgroundColor,
              margin: "5px",
              borderRadius: "15px",
              justifyContent: "left",
              display: "flex",
              padding: "10px",
            }}
          >
            <div
              style={{
                color: `#FF9800`,
                fontWeight: "bold",
                marginRight: "4px",
              }}
            >
              <span>{`${unit.sender}:`}</span>
            </div>

            <diV style={{ color: "white" }}>{unit.message}</diV>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          width: "90%",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <div>
          <Button
            size="large"
            type="submit"
            // className={classes.button}
            style={{
              border: `3px solid ${bodyBackgroundColor}`,
              backgroundColor: bodyBackgroundColor,
              color: "white",
              marginBottom: "20px",
              marginRight: "10px",
            }}
            onClick={() => {
              editAnonymous(!anonymous);
            }}
          >
            {anonymous ? "Anonymous" : `${data.rollNo}`}
          </Button>
        </div>
        <div style={{ width: "95%", marginBottom: "25px" }}>
          <TextField
            variant="standard"
            name="message"
            fullWidth
            label="Message"
            value={chat}
            onChange={(e) => {
              editChat(e.target.value);
            }}
            error={chat.trim().length > 0 ? false : true}
            style={{ marginTop: "8px" }}
            // className={classes.textField}
          />
        </div>
        <div>
          <Button
            size="large"
            type="submit"
            // className={classes.button}
            style={{
              border: `3px solid ${bodyBackgroundColor}`,
              backgroundColor: bodyBackgroundColor,
              color: "white",
              marginBottom: "20px",
              marginLeft: "10px",
            }}
            onClick={() => {
              editSend(send + 1);
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
