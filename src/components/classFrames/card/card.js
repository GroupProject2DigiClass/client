import React from "react";
import "./style.css";
import TurnedInIcon from "@material-ui/icons/TurnedIn";

const Card = ({ borderColor, fontColor, data, completed, bookmark }) => {
  console.log(completed);
  return (
    <div
      style={{
        width: "100%",
        marginTop: "5px",
        border: `${completed ? "2px solid" : `2px solid ${fontColor}`}`,
        borderRadius: "5px",
        color: fontColor,
        borderColor: borderColor,
        fontWeight: "600",
        fontStyle: "italic",
        display: "flex",
      }}
      className="unit"
    >
      <div style={{ width: "20%" }}>{`${data.unitN} ${data.unit}`}</div>
      <div style={{ width: "75%" }}>{data.title}</div>
      <div style={{ width: "5%" }}>{bookmark ? <TurnedInIcon /> : null}</div>
    </div>
  );
};
export default Card;
