import React from "react";
import Card from "./Card";
const ClassCard = ({ data }) => {
  React.useEffect(() => {}, []);
  return (
    <div>
      {data.map((unit) => {
        return <Card data={unit} />;
      })}
    </div>
  );
};
export default ClassCard;
