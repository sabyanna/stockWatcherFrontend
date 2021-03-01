import React, { createContext, useState } from 'react';

export const ErrorContext = createContext();

const ErrorContextProvider = ({ children }) => {
  const [ error, setError ] = useState({
    message: ''
  });

  const resetError = () => {
    setState({ message: '' });
  };

  return (
    <ErrorContext.Provider
      value={ { ...error, setError, resetError } }
    >
      { children }
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;

