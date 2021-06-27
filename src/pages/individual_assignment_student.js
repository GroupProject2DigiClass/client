import React, { useState,useEffect } from "react";
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import axios from 'axios';
import {fetchindividualAssignmentsApi} from '../api';


export default function Assignindividual() {

    const [postdata, editdata] = React.useState([]);
   
    

    useEffect(async () => {
        var key = window.location.pathname;
       var finalkey= key.split("/");
    


    await fetchindividualAssignmentsApi({ _id: finalkey[3] }).then((e) => {
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
                Points : {postdata.points}
            </div>
            <div className="assidiv5">
                Due Date : {postdata.dueDate} 
            </div>
            <div className="assidiv5">
                Time : {postdata.dueTime} 
            </div>
            </div>
           
        <hr/>
      <div className="assiindiv container">
    <p> {postdata.instruction}</p>
      </div>
 <div className="assiindiv1 container">
 <button type="button" class="btn btn-primary assiindiv2">View Assignment</button>
 </div>
 <hr/>
 <div className="assiindiv6 container ">
     <h3>Your Work</h3>

 <button type="upload" class="btn btn-primary assiindiv2">UPLOAD</button>
 </div>

    </div>);
}