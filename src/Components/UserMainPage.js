import React, { useContext } from 'react';
import AddNewSymbol from './AddNewSymbol';
import Chart from './Chart';
import { SymbloDataContext } from '../Contexts/SymbloDataContext';

const UserMainPage = () => {
  const context = useContext(SymbloDataContext);

  return (
    <div>
      <AddNewSymbol/>
      { context['Meta Data'] &&
        <Chart></Chart>
      }
    </div>
  );
};

export default UserMainPage;
