import React, { useState } from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Teachercard from "../components/assignmentForm/teacherCard";
export default function home() {
  return (<div>
      
      <center>
          <h2>
              Post New Assignment
          </h2>
      <Teachercard/>
      </center>


  </div>);
}
