import React, { useState,useEffect } from "react";
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import axios from 'axios';
import {fetchindividualAssignmentsApi} from '../api';
import {styles} from './class.css';
var user = JSON.parse(localStorage.getItem('profile'));
var gtoken;
if(user){
gtoken=user.token;
}

export default function Assignindividual() {
/*const [file,editFile] = React.useState("");
    const DownloadFile = async (index) => {
        // console.log(data.files[index]._id);
        await axios
          .post("http://localhost:5005/files/get", {
            _id: data.files[index]._id,
          })
          .then((res) => {
            editFile(res.data[0].file);
            if (res) {
              let newFile = "";
              newFile = res.data[0].file;
              newFile.mv(
                `${__dirname}/client/public/uploads/${file.name}`,
                (err) => {
                  if (err) {
                    console.error(err);
                  }
                }
              );
            }
          });
        console.log(file);
      };

*/
function deleteAssignment(){
var useragree=  prompt("Are you sure you want to delete this assignment? Type YES below");
var useragree1 =useragree.toUpperCase();
if(useragree1=="YES"){
 
  const handleSubmit = async (e) => {
   
    const assignmentdata = {
      token:gtoken,  
      _id:postdata._id
    };
    console.log(assignmentdata);
    
    try {
      const dataw = await axios.post(
        "http://localhost:5005/makeassignment/deleteAssignment",
        assignmentdata
      );
      
      console.log(dataw);
      alert(dataw.data);
      
      
      //console.log(postdata);
     // history.goBack()
     //e.history.push('/');
     window.history.back();

    } catch (err) {
      alert("error occurred while posting assignment");
      console.log(err);
    }
    
  };

handleSubmit();
}

}

    const [postdata, editdata] = React.useState([]);
    

    useEffect(async () => {
        var key = window.location.pathname;
       var finalkey= key.split("/");
    
    

    await fetchindividualAssignmentsApi({ _id: finalkey[3] }).then((e) => {
      editdata(e.data[0]); console.log(e.data);
    });

  }, []);
  var linkofderive=parseInt(postdata.driveLink);
   
    return (<div>
<div className="container" >
        <center>
            <h2 className="a">
           {postdata.title}
                        </h2>  
             
        </center> 
            <div className="assidiv4" >
                Points : {postdata.points}
            </div>
            <div className="assidiv5" >
                Due Date : {postdata.dueDate} 
            </div>
            <div className="assidiv5" >
                Time : {postdata.dueTime} 
            </div>
            <div className="assidiv5" onClick={deleteAssignment} >
            <img src="https://img.icons8.com/office/30/000000/trash.png"/>
            </div>
            </div>
           
        <hr/>
      <div className="assiindiv container">
    <p> {postdata.instruction}</p>
      </div>
 <div className="assiindiv1 container">
   
   <div className="linkdiv" style={{paddingTop:"10px",paddingBottom:"10px"}}>  <a href={postdata.driveLink} target="_blank">  DriveLink</a> </div>

 <button type="button"  className="btn btn-primary assiindiv2">View Assignment</button>
 </div>
 <hr/>
 <div className="assiindiv6 container ">
     <h3>Your Work</h3>

 <button type="upload" className="btn btn-primary assiindiv2">UPLOAD</button>
 </div>

    </div>);
}