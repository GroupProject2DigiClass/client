import React, { useState } from "react";
import Card from "./card/card";

const ClassAssignmentTable = ({ backColor, frontColor }) => {
  return (
    <div>
      <Card fontColor={frontColor} borderColor={backColor} />
      <Card fontColor={frontColor} borderColor={backColor} />
      <Card fontColor={frontColor} borderColor={backColor} />
    </div>
  );
};
export default ClassAssignmentTable;
