import React from "react";

import ClassRoomCard from "../components/classPageCards/ClassRoom";
import ClassLectureCard from "../components/classPageCards/ClassLecture";

function getRandom() {
  return Math.floor((Math.random() * 50 + 1) / 5);
}

export default function CardPage() {
  var subjectTeacher = "IIITU Developers";
  var backgroundLocation =
    "/images/background" + getRandom().toString() + ".jfif";
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          backgroundImage: `url(${backgroundLocation})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          height: "100%",
          show: "flex",
        }}
      >
        <center>
          <div style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
            <div
              style={{
                backgroundColor: "rgb(225,225,225,0.4)",
                justifyContent: "center",
                borderRadius: "10px",
                width: "70vh",
              }}
            >
              {/* <ClassRoomCard subjectTeacher={subjectTeacher} task="ADD" /> */}
              <ClassLectureCard task="ADD" unitN={1} unit="React" />
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
