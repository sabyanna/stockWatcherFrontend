import React, { useState, useEffect } from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import { register } from '../../Helpers/user';

const RegisterPage = props => {
  const [ userName, setUserName ] = useState('');

  useEffect( () => {
    if (localStorage.getItem('userName')) {
      props.history.push('/home');
    }
  }, [props.history]);

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
      <Button disabled={ userName === '' } onClick={ handleOnSend }>Register</Button>
    </Paper>
  );
};

export default RegisterPage;
