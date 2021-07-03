import React from "react";
import { BsFileEarmarkText } from "react-icons/bs";
const AStatusCard = ({
  backgroundColor,
  foregroundColor,
  total,
  completed,
}) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        borderRadius: "12px",
        marginRight: "10px",
        paddingLeft: "2px",
        paddingRight: "2px",
        paddingTop: "2px",
        paddingBottom: "8px",
        width: "260px",
      }}
    >
      <div
        style={{
          backgroundColor: foregroundColor,
          borderRadius: "8px",
          height: "100%",
          display: "flex",
          paddingLeft: "5px",
          paddingRight: "5px",
          paddingTop: "5px",
          width: "250px",
        }}
        className="skillCard"
      >
        
        <div>
          <BsFileEarmarkText size={80} color={backgroundColor} />
        </div>
        <center>
          <div
            style={{
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
              fontWeight: "bold",
              color: backgroundColor,
              paddingLeft: "5px",
            }}
          >
            <div style={{ height: "50%", alignItem: "baseline" }}>
              Assignments
            </div>
            <div>
              {completed}/{total}
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};
export default AStatusCard;
