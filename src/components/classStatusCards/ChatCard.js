import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
const CStatusCard = ({ backgroundColor, foregroundColor, state }) => {
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "10px",
          }}
        >
          <div>
            <BsFillPeopleFill size={75} color={backgroundColor} />
          </div>

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
              Chat Section
            </div>
            <div>{state === "0" ? "Updated" : "New"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CStatusCard;
