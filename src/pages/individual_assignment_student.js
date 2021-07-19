import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import { Button, } from '@material-ui/core';
import axios from 'axios';
import { fetchindividualAssignmentsApi } from '../api';
import { styles } from './class.css';
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


import CreateIcon from '@material-ui/icons/Create';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

////////////////////////////////////////////////////////////////////


var user = JSON.parse(localStorage.getItem('profile'));
var gtoken;
var classkey = "";
if (user) {
  gtoken = user.token;
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
  function deleteAssignment() {
    var useragree = "";
    useragree = prompt("Are you sure you want to delete this assignment? Type YES below");
    var useragree1 = useragree.toUpperCase();
    if (useragree1 == "YES") {

      const handleSubmit = async (e) => {

        const assignmentdata = {
          token: gtoken,
          _id: postdata._id
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


  function viewAllAssignment() {



    const handleSubmit = async (e) => {


      var key = window.location.pathname;
      var finalone = key.split('/');
      const assignmentdata = {
        token: gtoken,
        _id: postdata._id,
        classKey: finalone[4],
      };
      console.log(assignmentdata);

      try {
        const dataw = await axios.post(
          "http://localhost:5005/makeassignment/getAllAssignmentdrivelink",
          assignmentdata
        );

        console.log(dataw);
        console.log(dataw.data[0].files);

        editlinks(dataw.data[0].files);

        //console.log(postdata);
        // history.goBack()
        //e.history.push('/');
        //window.history.back();



      } catch (err) {
        alert("error occurred try login again");
        console.log(err);
      }

    };

    handleSubmit();
    
  }



  const [postdata, editdata] = React.useState([]);
  const [userData, setUserData] = React.useState({ profileLink: "", token: gtoken, email: "", _id: "", classKey: "",duetime:"",duedate:"" });
  async function postdrivelink() {
    var agree = "no";
    agree = prompt("Are you sure you want to post this link  [  " + userData.profileLink + "  ]  if this is ok then type YES below  ");
    if (agree != undefined) {
      var capagree = agree.toUpperCase();
    }

    if (capagree == "YES") {
      var responce = await axios.post("http://localhost:5005/makeassignment/save_individual_drive_link", userData);
      console.log(responce);
      alert(responce.data);
    }
    else { alert("error in confirmation "); }

  }


  const [studentDriveLinks, editlinks] = React.useState([]);

  useEffect(async () => {
    var key = window.location.pathname;
    var finalkey = key.split("/");



    await fetchindividualAssignmentsApi({ _id: finalkey[3], token: gtoken, classKey: finalkey[4] }).then((e) => {
      editdata(e.data[0]); console.log(e.data);
    });

  }, []);
  var linkofderive = parseInt(postdata.driveLink);
  console.log(postdata._id);
  return (
    <>
      <div>
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
            <img src="https://img.icons8.com/office/30/000000/trash.png" alt="Delete" />
          </div>
          <div className="assidiv5" >
            <a onClick={viewAllAssignment}>ViewAll </a>
          </div>
        </div>

        <hr />
        <div className="assiindiv container">
          <p> {postdata.instruction}</p>
        </div>
        <div className="assiindiv1 container">

          <div className="linkdiv" style={{ paddingTop: "10px", paddingBottom: "10px", textDecoration: "underline" }}>  <a href={postdata.driveLink} target="_blank"> Assignment Drive Link</a> </div>


        </div>
        <hr />
        <div className="assiindiv6 container ">
          <h3> Upload Your Work</h3>
          <div style={{ paddingTop: "20px", paddingBottom: "20px", textAlign: "center" }}>
            <TextField
              variant="standard"
              name="profileLink"
              fullWidth
              label="Paste your work's drive link here"
              value={userData.profileLink}
              onChange={(e) => {
                var key = window.location.pathname;
                var finalkey = key.split("/");
                setUserData({ ...userData, profileLink: e.target.value, _id: postdata._id, classKey: finalkey[4],duetime:postdata.dueTime,duedate:postdata.dueDate });
              }}
              style={{ marginTop: "8px" }}
            />
          </div>

          <button type="upload" className="btn btn-primary assiindiv2"
            onClick={postdrivelink} style={{marginBottom: "60px" }}
          >submit</button>
        

        {
        studentDriveLinks.length > 0 ?
        <div className="assign" style={{maxWidth:"720px"}} id="table">



        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Student Email</StyledTableCell>
                <StyledTableCell align="right">Drive Link</StyledTableCell>
                <StyledTableCell align="right">Late/onTime</StyledTableCell>
                


              </TableRow>
            </TableHead>
            <TableBody>
              {studentDriveLinks.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.email}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.driveLink}</StyledTableCell>
                  <StyledTableCell align="right">{row.flagt}</StyledTableCell>



                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
          : <div></div>
      }
        
        
        </div>





        
      </div>

      

    </>
  );
}