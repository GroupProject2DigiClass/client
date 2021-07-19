import React from "react";
import "./card/style.css";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import { useHistory } from "react-router-dom";

const ClassLectureTable = ({
  backColor,
  frontColor,
  lectures,
  status,
  rollNo,
}) => {
  React.useEffect(async () => {
    // console.log(lectures);
    // console.log(status);
    lectures.sort((a, b) => a.assignmentKey > b.assignmentKey);
    status.sort((a, b) => a.assignmentKey > b.assignmentKey);
  }, []);
  const history = useHistory();
  const moveToLecture = (key, title, bookmark, completed) => {
    history.push({
      pathname: "/lecture/" + key,
      state: {
        title: title,
        bookmark: bookmark,
        completed: completed,
        rollNo: rollNo,
      },
    });
  };

  return (
    <diV>
      {lectures.length && status.length ? (
        <ul style={{ listStyle: "none" }}>

<div>
                <div
                  style={{
                    width: "100%",
                    marginTop: "5px",
                    color: "blue",
                    borderColor: backColor,
                    fontWeight: "1000",
                    fontStyle: "italic",
                    display: "flex",
                  }}
                
                  className="unit"
                >
                  <div
                    style={{ width: "20%", 
                  textAlign: "left",
                  paddingLeft: "10px",
                  }}
                  >Unit </div>

                  <div style={{ width: "5%" }}>
                    Bookmark
                  </div>
                  <div style={{ width: "50%" }}>Title</div>
                  <div
                    style={{ width: "25%" }}
                  >Mark Completed</div>
                </div>
              </div>



          {lectures.map((unit, index) => (
            <li key={unit.assignmentKey}>
              <div>
                <div
                  style={{
                    width: "100%",
                    marginTop: "5px",
                    border: `${
                      status[index].completed
                        ? "2px solid"
                        : `2px solid ${frontColor}`
                    }`,
                    borderRadius: "5px",
                    color: frontColor,
                    borderColor: backColor,
                    fontWeight: "600",
                    fontStyle: "italic",
                    display: "flex",
                  }}
                  onClick={() => {
                    moveToLecture(
                      unit.assignmentKey,
                      unit.title,
                      status[index].bookmark,
                      status[index].completed
                    );
                  }}
                  className="unit"
                >
                  <div
                    style={{ width: "20%", 
                  textAlign: "left",
                  paddingLeft: "10px",
                  }}
                  >{`${unit.unitN} ${unit.unit}`}</div>

                  <div style={{ width: "5%" }}>
                    {status[index].bookmark ? <TurnedInIcon /> : null}
                  </div>
                  <div style={{ width: "50%" }}>{unit.title}</div>
                  <div
                    style={{ width: "25%" }}
                  >{`Mark Completed: ${unit.completed}`}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        "Loading..."
      )}
    </diV>
  );
};
export default ClassLectureTable;
