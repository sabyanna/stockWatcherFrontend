import React, { useContext, useEffect } from 'react';

import { makeStyles } from '@material-ui/styles';

import AddNewSymbol from './Symbols/SearchForSymbol';
import { SymbolDataContext } from '../Contexts/SymbolDataContext';
import SymbolInfo from './Symbols/SymbolInfo';
import MySymbolsTable from './Symbols/MySymbolsTable';
import Navbar from './Navbar/Navbar';

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

  const useStyles = makeStyles({
    body: {
      padding: '20px'
    }
  });

  const classes = useStyles();

  return (
    <>
      <Navbar/>
      <div className={ classes.body }>
        <AddNewSymbol/>
        { context.newSymbol.name &&
          <SymbolInfo/>
        }
        <MySymbolsTable/>
      </div>
    </>
  );
};

export default UserMainPage;
