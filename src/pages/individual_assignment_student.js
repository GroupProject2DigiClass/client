import React, { useState } from "react";
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';

var key = window.location.pathname;
console.log(key);

export default function assignindividual() {
    
    return (<div>
<div className="assidiv2 container">
        <center>
            <h2 className="a">
            Assignment 1 (Case Studies of Computing Environments)
            
            </h2>   
        </center> 
            <div className="assidiv4">
                points : 100
            </div>
            <div className="assidiv5">
                Due Date : tue 
            </div>
            </div>
           
        <hr/>
      <div className="assiindiv container">
     <p> Special Instructions: Students are required to submit the case
studies conducted by themselves. For each case study, they need to follow a
research paper. Also, they need to mention the URL of that research paper at
the end of each case study. In case, a submission is found to be copied, not
more than 70% of total marks will be given, irrespective of whether someone has
copied or get copied. In case of delayed submission, for each delayed week
(ranges from the first day of the week to the last day of that week), 1 mark
will be deducted from the total earned marks.


NOTE: The only channel to submit the assignment is Google Classroom’s respective
assignment task. No submission will be considered, if assignment is received through
email</p>
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