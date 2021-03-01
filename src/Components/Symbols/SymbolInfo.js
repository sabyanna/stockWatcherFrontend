import React, { useContext } from 'react';

import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SymbolDataContext } from '../../Contexts/SymbolDataContext';
import { postSymbol } from '../../Helpers/symbol';
import Chart from './Chart';

const SymbolInfo = () => {
  const context = useContext(SymbolDataContext);
  const userId = localStorage.getItem('userId');

  const symbol = context.newSymbol['Meta Data']['2. Symbol'].toUpperCase();
  const isAddable = !context.userSymbols.find(userSymbol => userSymbol.name === symbol);

  const handleOnSend = () => {
    postSymbol({ symbol, addNewUserSymbol: context.addNewUserSymbol, userId });
  };

  const useStyles = makeStyles({
    addBtn: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  });

  const classes = useStyles();

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h4">
            Symbol: { symbol }
          </Typography>
        </CardContent>
        { isAddable &&
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={ handleOnSend }
              className={ classes.addBtn }
            >
              Add
            </Button>
          </CardActions>
        }
      </Card>
      <Chart/>
    </>
  );
};

export default SymbolInfo;
