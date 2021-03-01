import React, { useContext, useState, useEffect } from 'react';
import { ErrorContext } from '../Contexts/ErrorContext';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const Error = () => {
  const context = useContext(ErrorContext);
  const [ error, setError ] = useState(context ? context.message : '');
  const [ isOpen, setIsOpen ] = useState(error !== '');

  useEffect(() => {
    setError(context ? context.message : '');
  }, [context, error]);

  useEffect(() => {
    setIsOpen(error !== '');
  }, [context, error]);

  const handleClose = () => {
    context.setError({ message: '' });
    setIsOpen(false);
  };

  return (
    <>
      { error !== '' &&
        <Snackbar
          open={ isOpen }
          autoHideDuration={ 6000 }
          onClose={ handleClose }
        >
          <MuiAlert severity="error" variant="filled">{ error }</MuiAlert>
        </Snackbar>
      }
    </>
  );
};

export default Error;
