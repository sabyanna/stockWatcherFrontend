import React, { useContext } from 'react';

import { TableContainer, Table, TableBody, TableHead, TableCell, TableRow, Paper } from '@material-ui/core';

import SymbolTableRow from '../Symbols/TableRow';
import { SymbolDataContext } from '../../Contexts/SymbolDataContext';

const MySymbolsTable = () =>  {
  const symbolData = useContext(SymbolDataContext);

  const { userSymbols } = symbolData;

  return (
    <TableContainer component={ Paper }>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Open</TableCell>
            <TableCell align="right">Close</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userSymbols.map(stock => (
            <SymbolTableRow key={ stock.name } stock={ stock } />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MySymbolsTable;
