import React from "react";
import { ColorPicker } from "react-input-color";

const ClassRoomCard = ({ subjectTeacher, task }) => {
  const [dataCard, setData] = React.useState({
    headBackgroundColor: "red",
    headTextColor: "white",
    bodyBackgroundColor: "#014182",
    bodyBlockColor: "white",
    subjectCode: "TEST001",
    subjectName: "Test Corse 1",
    subjectType: "Temp",
    studentsAllowed: [],
    subjectTeacher: subjectTeacher,
  });

  return (
    <div>
      <div
        style={{
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "35px",
          color: "white",
        }}
      >
        {task == "ADD" ? "ADD CLASS" : "EDIT DETAILS"}
      </div>
      <div
        style={{
          paddingLeft: "5px",
          paddingRight: "5px",
          paddingTop: "10px",
        }}
      >
        <input
          type="text"
          onChange={(input) => setData({ ...dataCard, subjectCode: input })}
          ref={(input) => {
            input && input.focus();
          }}
          placeholder="Subject Code"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            borderColor: "rgb(0,204,204)",
            width: "90%",
            marginBottom: "10px",
          }}
          className="classCard"
        />
        <input
          type="text"
          onChange={(input) =>
            setData({ ...dataCard, subjectName: input.target.value })
          }
          placeholder="Subject Name"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            borderColor: "rgb(0,204,204)",
            width: "90%",
            marginBottom: "10px",
          }}
        />
        <label
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              color: "white",
              paddingRight: "5px",
              paddingTop: "14px",
            }}
          >
            Type of course
          </p>
          <select
            value={dataCard.subjectType}
            onChange={(input) =>
              setData({ ...dataCard, subjectType: input.target.value })
            }
          >
            <option value="THEORY">Theory</option>
            <option value="LAB">Lab</option>
            <option value="PRACTICUM">Practicum</option>
            <option value="OTHER">Other</option>
          </select>
        </label>
        <input
          type="text"
          onChange={(input) =>
            setData({ ...dataCard, headBackgroundColor: input.target.value })
          }
          placeholder="Color1"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            borderColor: "rgb(0,204,204)",
            width: "90%",
            marginBottom: "10px",
          }}
        />
        <input
          type="text"
          onClick={(input) =>
            setData({ ...dataCard, headTextColor: input.target.value })
          }
          placeholder="Color2"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            borderColor: "rgb(0,204,204)",
            width: "90%",
            marginBottom: "10px",
          }}
        />
        <input
          type="text"
          onChange={(input) =>
            setData({ ...dataCard, bodyBackgroundColor: input.target.value })
          }
          placeholder="Color3"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            borderColor: "rgb(0,204,204)",
            width: "90%",
            marginBottom: "10px",
          }}
        />
        <input
          type="text"
          onChange={(input) =>
            setData({ ...dataCard, bodyBlockColor: input.target.value })
          }
          placeholder="Color4"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            borderColor: "rgb(0,204,204)",
            width: "90%",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={{}}
          style={{
            padding: "5px",
            backgroundColor: "rgb(255,140,0)",
            color: "white",
            fontWeight: "bold",
            width: "90%",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        >
          {task == "ADD" ? "Create" : "Change"}
        </button>
      </div>
    </div>
  );
};

export default ClassRoomCard;
