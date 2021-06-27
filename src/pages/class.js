import React from "react";
import AStatusCard from "./../components/classStatusCards/AssignmentCard";
import LStatusCard from "./../components/classStatusCards/LectureCard";
import PStatusCard from "./../components/classStatusCards/PracticeCard";
import CStatusCard from "./../components/classStatusCards/ChatCard";
//import ClassAssignmentTable from "../components/classFrames/assignment";
import ClassAssignmentTable from "../pages/Assignment_student1";
import ClassLectureTable from "../components/classFrames/lecture";
import ClassPracticeTable from "../components/classFrames/practice";
import Button from "@material-ui/core/Button";
import { useLocation } from "react-router-dom";
import { getAllLecture, getStatus } from "../api";
import { useHistory } from "react-router-dom";
import ChatPage from "./chat";

export default function Class() {
  const LECTURE = "lecture";
  const ASSIGNMENT = "assignment";
  const PRACTICE = "practice";
  const CHAT = "chat";
  const [activeFrame, changeFrame] = React.useState({ frame: LECTURE });
  const location = useLocation();
  const [classLectures, editClassLectures] = React.useState([]);
  const [classStatus, editClassStatus] = React.useState([]);
  const [classData, editData] = React.useState({
    headBackgroundColor: "green",
    headTextColor: "white",
    bodyBackgroundColor: "#014182",
    bodyBlockColor: "white",
    subjectCode: "TEST001",
    subjectTeacher: "IIITU Developers",
    subjectName: "Test Corse 1",
    subjectType: "Temp",
    classKey: "00000",
  });
  const [classTotal, editClassTotal] = React.useState({
    assignmentTotal: 0,
    lectureTotal: 0,
    practiceTotal: 0,
  });
  const [classCompleted, editClassCompleted] = React.useState({
    assignmentCompleted: 0,
    lectureCompleted: 0,
    practiceCompleted: 0,
  });

  const [flag, editFlag] = React.useState({
    lecture: false,
    status: false,
  });

  const history = useHistory();
  var rollNo = "19106";

  React.useEffect(async () => {
    var data = location.state.data;
    editData({
      ...classData,
      headBackgroundColor: data.headBackgroundColor,
      headTextColor: data.headTextColor,
      bodyBackgroundColor: data.bodyBackgroundColor,
      bodyBlockColor: data.bodyBlockColor,
      subjectCode: data.subjectCode,
      subjectTeacher: data.subjectTeacher,
      subjectName: data.subjectName,
      subjectType: data.subjectType,
      classKey: data.classKey,
    });

    await getAllLecture({ classKey: data.classKey }).then((res) => {
      editClassLectures(res.data);
      editClassTotal({ ...classTotal, lectureTotal: res.data.length });
      console.log(res.data);
      editFlag({ ...flag, lecture: true });
    });
    await getStatus({ classKey: data.subjectCode, rollNo: rollNo }).then(
      (res) => {
        editClassStatus(res.data);
        editClassCompleted({
          ...classCompleted,
          lectureCompleted: res.data.length,
        });
        console.log(res.data);
        editFlag({ ...flag, status: true });
      }
    );
  }, []);

  const addClass = () => {
    history.push({
      pathname: "/page/" + classData.classKey,
      state: {
        task: "ADD",
        unit: classLectures[0].unit,
        unitN: classLectures[0].unitN,
      },
    });
  };

  return (
    <div>
      <div
        style={{ marginTop: "15px", marginLeft: "20px", marginRight: "20px" }}
      >
        <center>
          <div>
            {/* ----------------------------------------------------------------------------------------------Heading */}
            <div
              style={{
                width: "100%",
                backgroundColor: classData.headBackgroundColor,
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
                    color: classData.headTextColor,
                    fontSize: "11px",
                    fontWeight: "bold",
                    alignSelf: "left",
                    marginTop: "10px",
                  }}
                >
                  {classData.subjectCode}
                </div>
                <div
                  style={{
                    color: classData.headTextColor,
                    fontSize: "11px",
                    fontWeight: "bold",
                    alignSelf: "right",
                    marginTop: "10px",
                  }}
                >
                  {classData.subjectTeacher}
                </div>
              </div>
              <div
                style={{
                  color: classData.headTextColor,
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginTop: "15px",
                }}
              >
                {classData.subjectName}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "bold",
                  color: classData.headTextColor,
                  alignContent: "center",
                  justifyContent: "center",
                  marginTop: "15px",
                  paddingBottom: "15px",
                }}
              >
                {classData.subjectType}
              </div>
            </div>
          </div>

          <div
            style={{
              border: "2px solid",
              borderRadius: "15px",
              borderColor: classData.bodyBlockColor,
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
                style={{ margin: "5px" }}
                onClick={(e) => {
                  e.preventDefault();
                  changeFrame({ ...activeFrame, frame: ASSIGNMENT });
                }}
              >
                <AStatusCard
                  backgroundColor={classData.bodyBackgroundColor}
                  foregroundColor={classData.bodyBlockColor}
                  completed={classCompleted.assignmentCompleted}
                  total={classTotal.assignmentTotal}
                />
              </div>
              <div
                style={{ margin: "5px" }}
                onClick={(e) => {
                  e.preventDefault();
                  changeFrame({ ...activeFrame, frame: LECTURE });
                }}
              >
                <LStatusCard
                  backgroundColor={classData.bodyBackgroundColor}
                  foregroundColor={classData.bodyBlockColor}
                  completed={classCompleted.lectureCompleted}
                  total={classTotal.lectureTotal}
                />
              </div>
              <div
                style={{ margin: "5px" }}
                onClick={(e) => {
                  e.preventDefault();
                  changeFrame({ ...activeFrame, frame: PRACTICE });
                }}
              >
                <PStatusCard
                  backgroundColor={classData.bodyBackgroundColor}
                  foregroundColor={classData.bodyBlockColor}
                  completed={classCompleted.practiceCompleted}
                  total={classTotal.practiceTotal}
                />
              </div>
              <div
                style={{ margin: "5px" }}
                onClick={(e) => {
                  e.preventDefault();
                  changeFrame({ ...activeFrame, frame: CHAT });
                }}
              >
                <CStatusCard
                  backgroundColor={classData.bodyBackgroundColor}
                  state="0"
                  foregroundColor={classData.bodyBlockColor}
                />
              </div>
            </div>
            <div
              style={{
                paddingTop: "20px",
                justifyContent: "space-around",
                color: classData.bodyBackgroundColor,
                fontWeight: "600",
                display: "flex",
              }}
            ></div>
            <diV
              style={{
                width: "100%",
                display: "flex",
                marginLeft: "25px",
                paddingBottom: "5px",
                fontWeight: "800",
                textColor: `${classData.headTextColor}`,
              }}
            >
              {activeFrame.frame === "LECTURE" ? (
                rollNo === "TEACHER" ? (
                  <diV>
                    <Button
                      onClick={() => {
                        addClass();
                      }}
                      style={{
                        fontWeight: "700",
                      }}
                      color="secondary"
                    >
                      + Add
                    </Button>
                  </diV>
                ) : (
                  `${rollNo}:`
                )
              ) : (
                ""
              )}
            </diV>
            <div>
              {activeFrame.frame === ASSIGNMENT ? (
                <ClassAssignmentTable
                  backColor={classData.bodyBackgroundColor}
                  frontColor={classData.headBackgroundColor}
                />
              ) : activeFrame.frame === LECTURE ? (
                <ClassLectureTable
                  backColor={classData.bodyBackgroundColor}
                  frontColor={classData.headBackgroundColor}
                  lectures={classLectures}
                  status={classStatus}
                  rollNo={rollNo}
                />
              ) : activeFrame.frame === PRACTICE ? (
                <ClassPracticeTable
                  backColor={classData.bodyBackgroundColor}
                  frontColor={classData.headBackgroundColor}
                />
              ) : (
                <ChatPage
                  classKey={classData.classKey}
                  rollNo={rollNo}
                  headBackgroundColor={classData.headBackgroundColor}
                  bodyBackgroundColor={classData.bodyBackgroundColor}
                />
              )}
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
