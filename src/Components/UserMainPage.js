import React, { useContext, useEffect } from 'react';
import AddNewSymbol from './FindSymbol/SearchForSymbol';
import { SymbolDataContext } from '../Contexts/SymbolDataContext';
import SymbolInfo from './FindSymbol/SymbolInfo';

import { getUserSymbols } from '../Helpers/symbols';

const UserMainPage = () => {
  const context = useContext(SymbolDataContext);

  useEffect(() => {
    getUserSymbols({ setUserSymbols: context.setUserSymbols });
  }, []);

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
