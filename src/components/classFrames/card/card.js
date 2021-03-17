import React, { useState } from "react";
import "./style.css";

const Card = ({ borderColor, fontColor }) => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "5px",
        border: "2px solid",
        borderRadius: "5px",
        color: fontColor,
        borderColor: borderColor,
        fontWeight: "600",
        fontStyle: "italic",
      }}
      className="unit"
    >
      HALLOW WORLD
    </div>
  );
};
export default Card;
