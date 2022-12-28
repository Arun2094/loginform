import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

function createData(fname, lname,  mail, fanmae) {
     return (fname, lname,  mail, fanmae);
  }
  
   const rows = [
    createData( 159, 6.0, 2, 4.0)
  ];
  
  export default function Customerdetails() {
    // console.log("tabledat55555",data1);

    // const rows= data1;
    // console.log("tabledat",rows);
    

    return (
      
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {/* <StyledTableCell>Dessert (100g serving)</StyledTableCell> */}
              <StyledTableCell align="right">FirstName</StyledTableCell>
              <StyledTableCell align="right">LastName</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">FatherName</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <StyledTableRow id={index}>
                <StyledTableCell align="right">{row.fname}</StyledTableCell>
                <StyledTableCell align="right">{row.lname}</StyledTableCell>
                <StyledTableCell align="right">{row.mail}</StyledTableCell>
                <StyledTableCell align="right">{row.fanmae}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
   
    );
  }