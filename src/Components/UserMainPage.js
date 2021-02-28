import React, { useContext, useEffect } from 'react';

import AddNewSymbol from './FindSymbol/SearchForSymbol';
import { SymbolDataContext } from '../Contexts/SymbolDataContext';
import SymbolInfo from './FindSymbol/SymbolInfo';
import Logout from './User/Logout';

import { getUserSymbols } from '../Helpers/symbol';

const UserMainPage = props => {
  const context = useContext(SymbolDataContext);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    getUserSymbols({ setUserSymbols: context.setUserSymbols, userId });
  }, []);

  useEffect( () => {
    if (!localStorage.getItem('userId')) {
      props.history.push('/');
    }
  }, [props.history]);

  return (
    <div>
      <Logout/>
      <AddNewSymbol/>
      { context.newSymbol['Meta Data'] &&
        <SymbolInfo/>
      }
    </div>
  );
};

export default UserMainPage;
