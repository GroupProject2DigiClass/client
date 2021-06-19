import React from "react";
import "./card/style.css";
import TurnedInIcon from "@material-ui/icons/TurnedIn";

const ClassLectureTable = ({ backColor, frontColor, lectures, status }) => {
  React.useEffect(async () => {
    console.log(lectures);
    console.log(status);
    lectures.sort((a, b) => a.assignmentKey > b.assignmentKey);
    status.sort((a, b) => a.assignmentKey > b.assignmentKey);
  }, []);

  return (
    <diV>
      {lectures.length && status.length ? (
        <ul style={{ listStyle: "none" }}>
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
                  className="unit"
                >
                  <div
                    style={{ width: "20%" }}
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
