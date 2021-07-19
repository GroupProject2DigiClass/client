import React, { useState } from "react";
import Login from "../components/Login";
//import {styles} from "./class.css";

import { styles } from './class.css';
var backgroundLocation = "../../images/college_logo.gif"
export default function HomeLoginPage() {

  return (<div className="homepage" >
    <div className="homepage1">
      <h2> Welcome to DigiClass IIIT Una </h2>
      <h5>(an online classroom )</h5>
      <div className="homepageImage">
        <img src={`${backgroundLocation}`} />

      </div>


      <div className="homepagelogin ">

        <Login />
      </div>
    </div>


  </div>);
}



