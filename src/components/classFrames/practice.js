import React from "react";
import { getAllPractice } from "../../api";

import { useHistory } from "react-router-dom";


const ClassPracticeTable = ({ backColor, frontColor, classKey }) => {

  const history = useHistory();
  
  const [data, editData] = React.useState([]);
  React.useEffect(async () => {
    await getAllPractice({ classKey: classKey }).then((res) => {
      editData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      {data.length ? (
        <ul style={{ listStyle: "none" }}>
          {data.map((unit, index) => (
            <li key={unit.assignmentKey}>
              <div>
                <div
                  style={{
                    width: "100%",
                    marginTop: "5px",
                    border: "2px solid",
                    borderRadius: "5px",
                    color: frontColor,
                    borderColor: backColor,
                    fontWeight: "600",
                    fontStyle: "italic",
                    display: "flex",
                  }}
                  onClick={() => {
                    // Go to practice page
                    history.push({ 
                      pathname: "/Indipractice/" +unit.assignmentKey,

                    });
                    
                  }}
                  className="unit"
                >
                  <div
                    style={{ width: "20%" }}
                  >{`${unit.unitN} ${unit.unit}`}</div>
                  <div style={{ width: "50%" }}>{unit.title}</div>
                  <div style={{ width: "30%" }}></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default ClassPracticeTable;
