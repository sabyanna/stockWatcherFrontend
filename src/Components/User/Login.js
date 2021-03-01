import React, { useState, useEffect, useContext } from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import { login } from '../../Helpers/user';
import { Link } from 'react-router-dom';
import { ErrorContext } from '../../Contexts/ErrorContext';

const Login = props => {
  const context = useContext(ErrorContext);
  const [ userName, setUserName ] = useState('');

  useEffect( () => {
    if (localStorage.getItem('userId')) {
      props.history.push('/home');
    }
  }, [props.history]);

  const handleOnChangeUserName = event => {
    setUserName(event.target.value);
  };

  const handleOnSend = async () => {
    if (userName !== '') {
      try {
        await login({ userName });

        props.history.push('/home');
      } catch (error) {
        context.setError({ message: error.message });
      }
    };
  };

  return (
    <Paper>
      <TextField
        placeholder="username"
        variant="outlined"
        value={ userName }
        onChange={ handleOnChangeUserName }
      />
      <Button disabled={ userName === '' } onClick={ handleOnSend }>Login</Button>
      <Button
        component={ Link }
        to="/registration"
      >
        Register
      </Button>
    </Paper>
  );
};

export default Login;
