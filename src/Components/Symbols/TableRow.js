import React, { useState } from 'react';

import { TableCell, TableRow, IconButton, Collapse } from '@material-ui/core';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TableRowCollapse from '../Symbols/TableRowCollapse';

const SymbolTableRow = ({ stock }) =>  {
  const [ open, setOpen ] = useState(false);
  const { stockInfo, name } = stock;

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={ () => setOpen(!open) }>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          { name }
        </TableCell>
        <TableCell align="right">{ stockInfo.date }</TableCell>
        <TableCell align="right">{ stockInfo.open }</TableCell>
        <TableCell align="right">{ stockInfo.close }</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={ { paddingBottom: 0, paddingTop: 0 } } colSpan={ 6 }>
          <Collapse in={ open } timeout="auto" unmountOnExit>
            <TableRowCollapse stockName={ name }/>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default SymbolTableRow;
