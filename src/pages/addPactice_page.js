import React, { useState } from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";
import PracticeForm from "../components/practicePagecards/adding_practice_Card";
export default function Add_Practice() {
  return (<div>
      
      <center>
          <h2>
              Post New Practice
          </h2>
      <PracticeForm/>
      </center>


  </div>);
}
