import React from "react";
import { addClass } from "../../actions";
import { createClass } from "../../api";

const ClassRoomCard = ({ subjectTeacher, task }) => {
  const [dataCard, setData] = React.useState({
    classKey: "TEST002THEORY",
    headBackgroundColor: "red",
    headTextColor: "white",
    bodyBackgroundColor: "#014182",
    bodyBlockColor: "white",
    subjectCode: "TEST001",
    subjectName: "Test Corse 1",
    subjectType: "THEORY",
    studentsAllowed: [],
    subjectTeacher: [subjectTeacher],
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
        {task === "ADD" ? "ADD CLASS" : "EDIT DETAILS"}
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
          onChange={(input) => {
            setData({ ...dataCard, subjectCode: input.target.value });
            var v1 = input.target.value;
            var v2 = dataCard.subjectType;
            setData({ ...dataCard, classKey: v1 + v2 });
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
        <input
          type="text"
          onChange={(input) =>
            setData({
              ...dataCard,
              studentsAllowed: input.target.value.split(","),
            })
          }
          placeholder="Student"
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
            onChange={(input) => {
              setData({ ...dataCard, subjectType: input.target.value });
              var v1 = dataCard.subjectCode;
              var v2 = dataCard.subjectType;
              setData({ ...dataCard, classKey: v1 + v2 });
            }}
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
          onClick={() => addClass(dataCard)}
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
          {task === "ADD" ? "Create" : "Change"}
        </button>
      </div>
    </div>
  );
};

export default ClassRoomCard;
