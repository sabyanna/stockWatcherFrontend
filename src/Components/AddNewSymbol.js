import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { getSymbol } from '../Helpers/symbols'

function AddNewSymbol() {
  const [ symbol, setSymbol ] = useState('');

  const handleOnSend = () => {
    getSymbol(symbol);
  }

  const handleOnChangeSymbol = event => {
    setSymbol(event.target.value);
  }

  return (
    <>
      <TextField
        placeholder="Add stock symbol"
        variant="outlined"
        value={ symbol }
        onChange={ handleOnChangeSymbol }
      />
      <Button onClick={ handleOnSend }>Send</Button>
    </>
  )
}

export default AddNewSymbol
