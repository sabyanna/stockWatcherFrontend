import React, { useContext } from 'react';
import AddNewSymbol from './FindSymbol/SearchForSymbol';
import { SymbloDataContext } from '../Contexts/SymbloDataContext';
import SymbolInfo from './FindSymbol/SymbolInfo';

const UserMainPage = () => {
  const context = useContext(SymbloDataContext);

  return (
    <div>
      <AddNewSymbol/>
      { context['Meta Data'] &&
        <SymbolInfo/>
      }
    </div>
  );
};

export default UserMainPage;
