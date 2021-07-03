import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { getGivenPractice } from '../api';


export default function Practiceindividual() {

  const [postdata, editdata] = React.useState([]);
  var key = window.location.pathname;
  var finalkey = key.split("/");
  console.log(finalkey);

  useEffect(async () => {


    await getGivenPractice({

      assignmentKey: finalkey[2]

    }).then((e) => {
      editdata(e.data[0]); console.log(e.data);
    });

  }, []);
  return (<div>
    <div className="assidiv2 container">
      <center>
        <h2 className="a">

          {postdata.title}
        </h2>
      </center>
      <div className="assidiv4">
        Unit No. : {postdata.unitN}
      </div>
      <div className="assidiv5">
        Unit Name : {postdata.unit}
      </div>

    </div>

    <hr />
    <div className="assiindiv container">
      <p> {postdata.instruction}</p>
    </div>
    <div className="assiindiv1 container">
      <div style={{ marginBottom: "20px" }}>
        <a href={postdata.driveLink} > Drive Link </a>
      </div>
      <button type="button" class="btn btn-primary assiindiv2">View Assignment</button>
    </div>
      <hr />


    </div>);
}