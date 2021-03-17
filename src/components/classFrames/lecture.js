import React, { useState } from "react";
import Card from "./card/card";

const ClassLectureTable = ({ backColor, frontColor }) => {
  return (
    <div>
      <Card fontColor={frontColor} borderColor={backColor} />
      <Card fontColor={frontColor} borderColor={backColor} />
      <Card fontColor={frontColor} borderColor={backColor} />
    </div>
  );
};
export default ClassLectureTable;
