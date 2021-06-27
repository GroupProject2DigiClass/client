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
var rollno ="19111"
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

  useEffect(async () => {
    await fetchallAssignmentsApi({ classKey: "TEST001THEORY" }).then((e) => {
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



  return (
    <div className="assign">
      <h2 className="head">
        Assignments
          </h2>


      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">Instructions</StyledTableCell>
              <StyledTableCell align="right">Points</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {postdata.map((post) => (
              <StyledTableRow key={post._id}>
                <StyledTableCell component="th" scope="row"  >
              <Link href={'/assignmentIS' +'/'+rollno+'/' + post._id }>
              {post.title}
              </Link>
                 


                </StyledTableCell>
                <StyledTableCell align="right">{post.instruction}</StyledTableCell>
                <StyledTableCell align="right">{post.points}</StyledTableCell>


              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
}

//{coffee(post)}