import React, { useContext, useEffect } from 'react';
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
      props.history.push('/login');
    }
  }, [props.history]);

  return (
    <div>
      <AddNewSymbol/>
      { context.newSymbol['Meta Data'] &&
        <SymbolInfo/>
      }
    </div>
  );
};

export default UserMainPage;
