import React, { useState } from "react";
import AStatusCard from "./../components/classStatusCards/AssignmentCard";
import LStatusCard from "./../components/classStatusCards/LectureCard";
import PStatusCard from "./../components/classStatusCards/PracticeCard";
import CStatusCard from "./../components/classStatusCards/ChatCard";
//import ClassAssignmentTable from "../components/classFrames/assignment";
import ClassAssignmentTable from "../pages/Assignment_student1";
import ClassLectureTable from "../components/classFrames/lecture";
import ClassPracticeTable from "../components/classFrames/practice";

export default function Class() {
  const LECTURE = "lecture";
  const ASSIGNMENT = "assignment";
  const PRACTICE = "practice";
  const CHAT = "chat";
  const [activeFrame, changeFrame] = React.useState({ frame: LECTURE });
  var headBackgroundColor = "red";
  var headTextColor = "white";
  var bodyBackgroundColor = "#014182";
  var bodyBlockColor = "white";
  var subjectCode = "TEST001";
  var subjectTeacher = "IIITU Developers";
  var subjectName = "Test Corse 1";
  var subjectType = "Temp";
  var assignmentCompleted = 2;
  var assignmentTotal = 5;
  var lectureCompleted = 10;
  var lectureTotal = 12;
  var practiceCompleted = 8;
  var practiceTotal = 10;
  var rank;
  return (
    <div style={{ marginTop: "15px", marginLeft: "20px", marginRight: "20px" }}>
      <center>
        <div>
          {/* ----------------------------------------------------------------------------------------------Heading */}
          <div
            style={{
              width: "100%",
              backgroundColor: headBackgroundColor,
              borderRadius: "15px",
              fontStyle: "Calibri",
            }}
          >
            <div
              style={{
                width: "100%",
                marginTop: "15px",
                paddingLeft: "15px",
                paddingRight: "30px",
                display: "flex",
                alignContent: "space-between",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  color: headTextColor,
                  fontSize: "11px",
                  fontWeight: "bold",
                  alignSelf: "left",
                  marginTop: "10px",
                }}
              >
                {subjectCode}
              </div>
              <div
                style={{
                  color: headTextColor,
                  fontSize: "11px",
                  fontWeight: "bold",
                  alignSelf: "right",
                  marginTop: "10px",
                }}
              >
                {subjectTeacher}
              </div>
            </div>
            <div
              style={{
                color: headTextColor,
                fontSize: "30px",
                fontWeight: "bold",
                marginTop: "15px",
              }}
            >
              {subjectName}
            </div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: "bold",
                color: headTextColor,
                alignContent: "center",
                justifyContent: "center",
                marginTop: "15px",
                paddingBottom: "15px",
              }}
            >
              {subjectType}
            </div>
          </div>
        </div>
        <div
          style={{
            border: "2px solid",
            borderRadius: "15px",
            borderColor: bodyBlockColor,
            borderWidth: "3px",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              show: "flex",
              justifyContent: "space-around",
            }}
            className="row"
          >
            {/* -----------------------------------------------------------------------Present-Status */}
            <div
              onClick={(e) => {
                e.preventDefault();
                changeFrame({ ...activeFrame, frame: ASSIGNMENT });
              }}
            >
              <AStatusCard
                backgroundColor={bodyBackgroundColor}
                foregroundColor={bodyBlockColor}
                completed={assignmentCompleted}
                total={assignmentTotal}
              />
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                changeFrame({ ...activeFrame, frame: LECTURE });
              }}
            >
              <LStatusCard
                backgroundColor={bodyBackgroundColor}
                foregroundColor={bodyBlockColor}
                completed={lectureCompleted}
                total={lectureTotal}
              />
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                changeFrame({ ...activeFrame, frame: PRACTICE });
              }}
            >
              <PStatusCard
                backgroundColor={bodyBackgroundColor}
                foregroundColor={bodyBlockColor}
                completed={practiceCompleted}
                total={practiceTotal}
              />
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                changeFrame({ ...activeFrame, frame: CHAT });
              }}
            >
              <CStatusCard
                backgroundColor={bodyBackgroundColor}
                state="0"
                foregroundColor={bodyBlockColor}
              />
            </div>
          </div>
          <div
            style={{
              paddingTop: "20px",
              justifyContent: "space-around",
              color: bodyBackgroundColor,
              fontWeight: "600",
              display: "flex",
            }}
          ></div>
          <div>
            {activeFrame.frame === ASSIGNMENT ? (
              <ClassAssignmentTable
                backColor={bodyBackgroundColor}
                frontColor={headBackgroundColor}
              />
            ) : activeFrame.frame === LECTURE ? (
              <ClassLectureTable
                backColor={bodyBackgroundColor}
                frontColor={headBackgroundColor}
              />
            ) : activeFrame.frame === PRACTICE ? (
              <ClassPracticeTable
                backColor={bodyBackgroundColor}
                frontColor={headBackgroundColor}
              />
            ) : (
              CHAT
            )}
          </div>
        </div>
      </center>
    </div>
  );
}
