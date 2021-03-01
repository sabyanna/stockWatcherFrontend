import React, { useContext } from 'react';

import { Button } from '@material-ui/core';

import { logout } from '../../Helpers/user';
import { SymbolDataContext } from '../../Contexts/SymbolDataContext';
import { ErrorContext } from '../../Contexts/ErrorContext';
import { Link } from 'react-router-dom';

const Logout = props => {
  const symbolContext = useContext(SymbolDataContext);
  const errorContext = useContext(ErrorContext);

  const handleLogout = async () => {
    try {
      await logout({ resetState: symbolContext.resetState });
    } catch (error) {
      errorContext.setError({ message: error.message });
    }
  };

  return (
    <Button
      component={ Link }
      to="/"
      onClick={ handleLogout }
    >
      Logout
    </Button>
  );
};

export default Logout;
