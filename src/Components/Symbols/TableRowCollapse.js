import React, { useContext, useEffect } from 'react';

import { SymbolDataContext } from '../../Contexts/SymbolDataContext';
import { getSymbol } from '../../Helpers/symbol';
import Chart from './Chart';

const TableRowCollapse = ({ stockName }) => {
  const symbolData = useContext(SymbolDataContext);
  const userId = localStorage.getItem('userId');

  const { userSymbols } = symbolData;

  const currentStock = userSymbols.find((symbol => symbol.name === stockName));

  useEffect(() => {
    if (!currentStock.timeSeries) {
      getSymbol({ symbolName: stockName, userId, updateUserSymbol: symbolData.updateUserSymbol });
    }
  }, [currentStock.timeSeries, stockName, symbolData.updateUserSymbol, userId]);

  return (
    <>
      { currentStock.timeSeries ?
        <Chart timeSeries={ currentStock.timeSeries }/> :
        <p>loading...</p>
      }
    </>
  );
};

export default TableRowCollapse;
