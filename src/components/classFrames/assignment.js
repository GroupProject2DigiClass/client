import React, { useState } from "react";
import Card from "./card/card";
import CreateIcon from '@material-ui/icons/Create';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', '30 March', 6.0, 1, 4.0),
  createData('Ice cream sandwich', '30 April', 9.0, 1, 4.3),
  createData('Eclair', '20 April', 16.0, 0, 6.0),
  createData('Cupcake', '30 May', 3.7, 1, 4.3),
  createData('Gingerbread', '01 Jan', 16.0, 0, 3.9),
];


  


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ClassAssignmentTable({ backColor, frontColor }) {
  const classes = useStyles();
  
  function coffee(row){
 // console.log(row);
    const isLoggedIn = row.carbs;
    if (isLoggedIn==1) { return <StyledTableCell align="right"><CheckCircleIcon className="materialcheck"/></StyledTableCell>}
    else {return <StyledTableCell align="right"><CreateIcon className="materialdoing"/></StyledTableCell> }
             
  }

  
  
  return (
      <div className="assign">
          
          
      
      
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Due Date</StyledTableCell>
            <StyledTableCell align="right">Points</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
             {coffee(row)}

              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
  );
}