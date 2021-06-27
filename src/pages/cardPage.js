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
          height: "100vh",
          show: "flex",
          backgroundAttachment: "fixed",
        }}
      >
        <center>
          <div
            style={{
              paddingTop: "10vh",
              paddingBottom: "10vh",
              scrollBehavior: "smooth",
            }}
          >
            <div
              style={{
                backgroundColor: "rgb(200,200,200,0.8)",
                justifyContent: "center",
                borderRadius: "10px",
                width: "70vh",
              }}
            >
              {/* <ClassRoomCard subjectTeacher={subjectTeacher} task="ADD" /> */}
              <ClassLectureCard
                task="ADD"
                unitN={1}
                unit="React"
                classKey="TEST001"
              />
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
