import React, { useContext, useEffect } from 'react';

import { Button } from '@material-ui/core';

import AddNewSymbol from './FindSymbol/SearchForSymbol';
import { SymbolDataContext } from '../Contexts/SymbolDataContext';
import SymbolInfo from './FindSymbol/SymbolInfo';

import { getUserSymbols } from '../Helpers/symbol';

const UserMainPage = props => {
  const context = useContext(SymbolDataContext);

  useEffect(() => {
    getUserSymbols({ setUserSymbols: context.setUserSymbols });
  }, []);

  useEffect( () => {
    if (!localStorage.getItem('userName')) {
      props.history.push('/');
    }
  }, [props.history]);

  const handleLogout = () => {
    localStorage.removeItem('userName');
    props.history.push('/');
  };

  return (
    <div>
      <Button onClick={ handleLogout }>
        Logout
      </Button>
      <AddNewSymbol/>
      { context.newSymbol['Meta Data'] &&
        <SymbolInfo/>
      }
    </div>
  );
};

export default UserMainPage;
