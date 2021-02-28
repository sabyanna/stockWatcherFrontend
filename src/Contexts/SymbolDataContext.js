import React, { createContext, useState } from 'react';

export const SymbolDataContext = createContext();

const SymbolDataContextProvider = ({ children }) => {
  const [state, setState] = useState({
    newSymbol: {},
    userSymbols: []
  });

  const setNewSymbol = symbol => {
    setState({
      ...state,
      newSymbol: symbol
    });
  };

  const setUserSymbols = symbols => {
    setState({
      ...state,
      userSymbols: symbols
    });
  };

  const addNewUserSymbol = symbol => {
    setState({
      ...state,
      userSymbols: state.userSymbols.concat(symbol)
    });
  };

  return (
    <SymbolDataContext.Provider value={ { ...state, setNewSymbol, setUserSymbols, addNewUserSymbol } }>
      { children }
    </SymbolDataContext.Provider>
  );
};

export default SymbolDataContextProvider;

