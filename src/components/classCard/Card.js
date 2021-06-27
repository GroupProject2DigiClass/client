import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Card = ({ data }) => {
  const history = useHistory();
  const moveToClass = () => {
    history.push({
      pathname: "/class",
      state: { data: data },
    });
  };
  return (
    <Button
      onClick={() => {
        moveToClass();
      }}
    >
      {data.subjectCode}
    </Button>
  );
};
export default Card;
