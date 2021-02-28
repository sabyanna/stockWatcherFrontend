import React, { useState } from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import { register } from '../../Helpers/user';

const RegisterPage = () => {
  const [ userName, setUserName ] = useState('');

  const handleOnChangeUserName = event => {
    setUserName(event.target.value);
  };

  const handleOnSend = () => {
    if (userName !== '') {
      register(userName);
    }
  };

  return (
    <Paper>
      <TextField
        placeholder="username"
        variant="outlined"
        value={ userName }
        onChange={ handleOnChangeUserName }
      />
      <Button disabled={ userName === '' } onClick={ handleOnSend }>Send</Button>
    </Paper>
  );
};

export default RegisterPage;
