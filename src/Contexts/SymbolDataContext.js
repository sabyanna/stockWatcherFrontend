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

  const resetState = () => {
    setState({
      newSymbol: {},
      userSymbols: []
    });
  };

  const updateUserSymbol = (symbolName, timeSeries) => {
    const symbolToUpdateIndex = state.userSymbols.findIndex(symbol => symbol.name === symbolName);
    const symbolToUpdate = state.userSymbols[symbolToUpdateIndex];
    setState({
      ...state,
      userSymbols: [
        ...state.userSymbols.slice(0, symbolToUpdateIndex),
        {
          ...symbolToUpdate,
          timeSeries
        },
        ...state.userSymbols.slice(symbolToUpdateIndex + 1, state.userSymbols.length)
      ]
    });
  };

  return (
    <SymbolDataContext.Provider
      value={ {
        ...state,
        setNewSymbol,
        setUserSymbols,
        addNewUserSymbol,
        resetState,
        updateUserSymbol
      } }
    >
      { children }
    </SymbolDataContext.Provider>
  );
};

export default SymbolDataContextProvider;

