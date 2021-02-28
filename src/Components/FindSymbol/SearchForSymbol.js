import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import { getSymbol } from '../../Helpers/symbols';
import { SymbolDataContext } from '../../Contexts/SymbolDataContext';

const SearchForSymbol = () => {
  const [ symbol, setSymbol ] = useState('');
  const context = useContext(SymbolDataContext);

  const handleOnShow = () => {
    getSymbol({ symbol, setNewSymbol: context.setNewSymbol });
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
      <Button onClick={ handleOnShow }>Show</Button>
    </>
  );
};

export default SearchForSymbol;
