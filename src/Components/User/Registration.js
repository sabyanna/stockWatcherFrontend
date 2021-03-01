import React, { useState, useEffect, useContext } from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import { register } from '../../Helpers/user';
import { ErrorContext } from '../../Contexts/ErrorContext';

const RegisterPage = props => {
  const context = useContext(ErrorContext);
  const [ userName, setUserName ] = useState('');

  useEffect( () => {
    if (localStorage.getItem('userId')) {
      props.history.push('/home');
    }
  }, [props.history]);

  const handleOnChangeUserName = event => {
    if (setUserName(event.target.value)) {
      props.history.push('/home');
    };
  };

  const handleOnSend = async () => {
    if (userName !== '') {
      try {
        await register(userName);

        props.history.push('/home');
      } catch (error) {
        context.setError({ message: error.message });
      }
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
