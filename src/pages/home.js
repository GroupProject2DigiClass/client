import React from "react";
import { getAllClass } from "../api";
import ClassCard from "../components/classCard/Cards";

function Home() {
  const [Class, editClass] = React.useState();
  React.useEffect(async () => {
    var classes = await getAllClass();
    editClass(classes.data);
  }, []);

  return <div>{Class ? <ClassCard data={Class} /> : "Loading..."}</div>;
}
export default Home;
