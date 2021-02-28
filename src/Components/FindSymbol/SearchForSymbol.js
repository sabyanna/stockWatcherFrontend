import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import { getSymbol } from '../../Helpers/symbols';
import { SymbloDataContext } from '../../Contexts/SymbloDataContext';

const SearchForSymbol = () => {
  const [ symbol, setSymbol ] = useState('');
  const context = useContext(SymbloDataContext);

  const handleOnShow = () => {
    getSymbol({ symbol, setState: context.setState });
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
