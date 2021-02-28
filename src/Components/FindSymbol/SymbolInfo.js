import React, { useContext } from 'react';
import { SymbolDataContext } from '../../Contexts/SymbolDataContext';
import { postSymbol } from '../../Helpers/symbol';
import Chart from '../Chart';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

const SymbolInfo = () => {
  const context = useContext(SymbolDataContext);
  const userId = localStorage.getItem('userId');

  const symbol = context.newSymbol['Meta Data']['2. Symbol'];

  const handleOnSend = () => {
    postSymbol({ symbol, addNewUserSymbol: context.addNewUserSymbol, userId });
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h4">
            Symbol: { symbol }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={ handleOnSend }>
            Add
          </Button>
        </CardActions>
      </Card>
      <Chart/>
    </>
  );
};

export default SymbolInfo;
