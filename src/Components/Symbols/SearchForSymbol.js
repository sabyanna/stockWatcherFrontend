import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import { getNewSymbol } from '../../Helpers/symbol';
import { SymbolDataContext } from '../../Contexts/SymbolDataContext';

const SearchForSymbol = () => {
  const [ symbol, setSymbol ] = useState('');
  const context = useContext(SymbolDataContext);
  const userId = localStorage.getItem('userId');

  const handleOnShow = () => {
    getNewSymbol({
      symbol: symbol.toUpperCase(),
      setNewSymbol: context.setNewSymbol,
      userId
    });
  };

  const handleOnChangeSymbol = event => {
    setSymbol(event.target.value);
  };

  return (
    <>
      <TextField
        placeholder="Add stock symbol"
        variant="outlined"
        value={ symbol }
        onChange={ handleOnChangeSymbol }
      />
      <Button onClick={ handleOnShow }>Find</Button>
    </>
  );
};

export default SearchForSymbol;
