import React from "react";
import { Button, TextField } from "@material-ui/core";
import { sendMessage, getMessage } from "../api";
import axios from "axios";

var user = JSON.parse(localStorage.getItem('profile'));
var staremail; 
var starname;
var gtoken;
if(user){
  console.log(user.result);
  
gtoken=user.token;
staremail=user.result.email;
starname=user.name;
}


export default function ChatPage({
  classKey,
  rollNo,
  headBackgroundColor,
  bodyBackgroundColor,
}) {


  const [time, setTime] = React.useState(Date.now());


  React.useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);


  const [data, editData] = React.useState({
    rollNo: "19401",
    classKey: "TEST001THEORY",
  });



  const [chat, editChat] = React.useState("");
  const [send, editSend] = React.useState(0);
  const [messages, editMessages] = React.useState([]);
  const [anonymous,editAnonymous] = React.useState(false);

  React.useEffect(async () => {
    console.log(bodyBackgroundColor);
    editData({ ...chat, rollNo: rollNo, classKey: classKey });
    await getMessage({ classKey: classKey, rollNo: rollNo,token:gtoken }).then((res) => {
      editMessages(res.data);
    });
    console.log(messages);
  }, [send,time]);

  React.useEffect(async () => {
    console.log(bodyBackgroundColor);
    editData({ ...chat, rollNo: rollNo, classKey: classKey });
    await getMessage({ classKey: classKey, rollNo: rollNo,token:gtoken }).then((res) => {
      editMessages(res.data);
    });
    console.log(messages);
  }, [send,time]);

  //funtion to send the data to the server

  async function sendMessage() {

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

    const data1 = {
      classKey: data.classKey,
      sender: "",
      token:gtoken,
      time: time,
      message: chat,
      anonymous: anonymous,
    };
    var result;
    await axios.post("http://localhost:5005/makechat/send", data1).then((res) => {
      result = res;
    });
    editChat("");
    editSend(send + 1);
  }






  return (
    <>

      <div className="chatparent">
        <ol class="chat">
          {
            messages.map((unit) => {
              if (staremail===unit.email && unit.sender==="TEACHER" ) {
                return (<li class="self">
                  <div class="msg">
                    <div class="user">{unit.sender}<span class="range admin">Admin</span></div>
                    <p>{unit.message}</p>
                    <time>{unit.time}</time>
                  </div>
                </li>
                )
              }
              else if(unit.sender==="TEACHER"){
                return(
                  <li class="other">
                  <div class="msg">
                    <div class="user">{unit.sender}<span class="range admin">Admin</span></div>
                    <p>{unit.message}</p>
                    <time>{unit.time}</time>
                  </div>
                </li>
                )
              }

              else if(staremail===unit.email){
                return (
                  <li class="self">
                  <div class="msg">
                <div class="user">{unit.sender}</div>
                <p>{unit.message}</p>
                <time>{unit.time}</time>
                  </div>
                </li>
                )
              }
              
        
        

              
              else {
               console.log(unit.email);
               console.log(unit.sender);
               
               console.log(staremail);
               
               
               
               
                return (
                  <li class="other">
                  <div class="msg">
                <div class="user">{unit.sender}</div>
                <p>{unit.message}</p>
                <time>{unit.time}</time>
                  </div>
                </li>
                )
              }

            })
          }
        </ol>
        <div class="typezone ">
          <form>
            <textarea class="testformessage" type="text" value={chat}
              onChange={(e) => {
                editChat(e.target.value);
              }}
              placeholder="Say something">
            </textarea>




            <input onClick={sendMessage}
              class="send" />

          </form>
          <div class="emojis">
            Anonymous-
           <input style={{display:"inline-block"}} class="checkbox" value="false" onClick={(e)=>{
             console.log(e.target.checked);
             
             editAnonymous(e.target.checked)}}  type="checkbox"/>
          </div>
        </div>
      </div>
    </>

  );
  
  
}



/*




   


    <li class="self">
      <div class="msg">
        <img src="https://i.imgur.com/kUPxcsI.jpg" draggable="false"/>
        <time>20:19</time>
      </div>
    </li>



<div
      style={{
        width: "100%",
        height: "100%",

        justifyContent: "left",
      }}
    >
      <div>
        {messages.map((unit) => (
          <div
            style={{
              border: `2px solid white`,
              backgroundColor: "lightblue",
              margin: "5px",
              borderRadius: "15px",
              justifyContent: "left",
              display: "flex",
              padding: "10px",
              maxWidth:"500px",
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



*/