import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from '@material-ui/core';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchallAssignmentsApi } from "../api";
import { useLocation } from "react-router-dom";

var user = JSON.parse(localStorage.getItem('profile'));
var gtoken;
if(user){
gtoken=user.token;
}


var rollno ="TEACHER"
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 1, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 1, 4.3),
  createData('Eclair', 262, 16.0, 0, 6.0),
  createData('Cupcake', 305, 3.7, 1, 4.3),
  createData('Gingerbread', 356, 16.0, 0, 3.9),
];

/*
{postdata.map((post) => (

  
   
  
  ))}
*/

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  let location = useLocation();
  const classes = useStyles();
  //disapcting from here on
  /*
  const postdata=useSelector((state)=>state.assignmentReducer);
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(fetchallAssignments({classKey: "TEST001THEORY"}));
  },[postdata]);
  */
  const [postdata, editdata] = React.useState([]);
//console.log(window.location.state.data.classKey);
console.log(location.state.data);

  useEffect(async () => {
    await fetchallAssignmentsApi({ classKey: location.state.data.classKey,token:gtoken }).then((e) => {
      editdata(e.data); console.log(e);
    });

  }, []);



  //console.log(postdata);


  function coffee(row) {
    // console.log(row);
    const isLoggedIn = row.carbs;
    if (isLoggedIn == 1) { return <StyledTableCell align="right"><img src="https://img.icons8.com/bubbles/50/000000/checked-2.png" /></StyledTableCell> }
    else { return <StyledTableCell align="right"><img src="https://img.icons8.com/nolan/50/bank-card-missing.png" /></StyledTableCell> }

  }

  function watermark(duedate){
    var key=duedate.split("-");
    var day=key[2];
    var month=key[1];
    var year=key[0];

    var today= new Date();
    console.log(today.getDate());
    console.log(today.getMonth());
    console.log(today.getYear());
    
    
    if(today.getDate()==day && today.getMonth()+1==month){ return "Duetoday";}
    else if(today.getDate()+1==day && today.getMonth()+1==month){ return "Duetomorrow";}
    else if(day-today.getDate()>=2 && today.getMonth()+1==month){ return "DueThisweek";}
    else if(day-today.getDate()>7 && today.getMonth()+1==month){ return "DueThismonth";}
    return "older";
  }

  return (
    <div className="assign">
      <h2 className="head">
        All Assignments
          </h2>
      

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">Due Date</StyledTableCell>
              <StyledTableCell align="right">Due Time</StyledTableCell>
              <StyledTableCell align="right">Remark</StyledTableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            
            {postdata.map((post) => (
              <StyledTableRow key={post._id}>
                <StyledTableCell component="th" scope="row"  >
              <Link href={'/assignmentIS' +'/'+rollno+'/' + post._id +'/'+post.classKey}>
              {post.title}
              </Link>
                 


                </StyledTableCell>
                <StyledTableCell align="right">{post.dueDate}</StyledTableCell>
                <StyledTableCell align="right">{post.dueTime}</StyledTableCell>
                <StyledTableCell align="right">{watermark(post.dueDate)}</StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
}

//{coffee(post)}