import React, { createContext, useState } from 'react';

export const SymbloDataContext = createContext();

const SymbloDataContextProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <SymbloDataContext.Provider value={{ ...state, setState }}>
      { children }
    </SymbloDataContext.Provider>
  )
}

export default SymbloDataContextProvider;

