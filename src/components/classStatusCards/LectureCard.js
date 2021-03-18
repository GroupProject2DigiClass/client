import React from "react";
import { BsClipboardData } from "react-icons/bs";
const LStatusCard = ({
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
        <div style={{ paddingLeft: "10px", alignItems: "center" }}>
          <BsClipboardData size={80} color={backgroundColor} />
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
              alignSelf: "center",
              width: "125px",
            }}
          >
            <div
              style={{
                height: "50%",
                alignItem: "baseline",
              }}
            >
              Lectures
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
export default LStatusCard;
