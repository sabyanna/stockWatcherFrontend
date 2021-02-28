import React, { useContext } from 'react';

import { Button } from '@material-ui/core';

import { logout } from '../../Helpers/user';
import { SymbolDataContext } from '../../Contexts/SymbolDataContext';
import { Link } from 'react-router-dom';

const Logout = props => {
  const context = useContext(SymbolDataContext);

  const handleLogout = async () => {
    try {
      await logout({ resetState: context.resetState });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button
        component={ Link }
        to="/"
        onClick={ handleLogout }
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
