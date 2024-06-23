import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { typeHandler } from "../utils/TypeHandler";



export default function PokeTable({pokemonData}) {
    const {height, weight, types} = pokemonData;

  return (
    <TableContainer component={Paper} sx={{maxWidth: '400px', margin: '30px', marginTop: '140px',  maxHeight: '300px', display:'flex', justifyContent:'center'}}>
      <Table aria-label="table">
        <TableHead>
        </TableHead>
        <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>Height</TableCell>
              <TableCell align='center'>{height}</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>Weight</TableCell>
              <TableCell align='center'>{weight}</TableCell>
              </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>Types</TableCell>
              <TableCell align='center'>{typeHandler(types)}</TableCell>

            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
