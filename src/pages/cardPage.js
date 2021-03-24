import React, { useState } from "react";

import ClassRoomCard from "../components/classPageCards/ClassRoom";

function getRandom() {
  return Math.floor((Math.random() * 50 + 1) / 5);
}

export default function CardPage() {
  var subjectTeacher = "IIITU Developers";
  var backgroundLocation =
    "/images/background" + getRandom().toString() + ".jfif";
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundLocation})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          height: "100vh",
          show: "flex",
        }}
      >
        <center>
          <div style={{ paddingTop: "20vh" }}>
            <div
              style={{
                backgroundColor: "rgb(225,225,225,0.7)",
                justifyContent: "center",
                borderRadius: "10px",
                width: "60vh",
              }}
            >
              <ClassRoomCard subjectTeacher={subjectTeacher} task="ADD" />
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
