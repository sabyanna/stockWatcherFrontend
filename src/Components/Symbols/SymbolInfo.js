import React, { useContext, useState } from 'react';

import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SymbolDataContext } from '../../Contexts/SymbolDataContext';
import { postSymbol } from '../../Helpers/symbol';
import Chart from './Chart';

const SymbolInfo = () => {
  const symbolData = useContext(SymbolDataContext);
  const userId = localStorage.getItem('userId');
  const [ showChart, setShowChart ] = useState(true);

  const { newSymbol, userSymbols } = symbolData;

  const isAddable = !userSymbols.find(userSymbol => userSymbol.name === newSymbol.name);

  const handleOnSend = () => {
    postSymbol({
      symbol: newSymbol,
      addNewUserSymbol: symbolData.addNewUserSymbol,
      userId
    });
  };

  const handleOnShow = () => {
    setShowChart(!showChart);
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
            Symbol: { newSymbol.name }
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
      <Button onClick={ handleOnShow }>{ showChart ? 'Hide' : 'Show ' }</Button>
      { showChart &&
        <Chart timeSeries={ newSymbol.timeSeries }/>
      }
    </>
  );
};

export default SymbolInfo;
