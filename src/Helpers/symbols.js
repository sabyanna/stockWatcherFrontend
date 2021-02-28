const axios = require('axios');

const STOCK_API_KEY = process.env.STOCK_API_KEY;

export const getSymbol = ({ symbol, setNewSymbol }) => {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${STOCK_API_KEY}`;
  axios.get(url, {
    timeout: 5000
  }).then(res => {
    const { data } = res;

    setNewSymbol(data);
  }).catch(err => console.error(err));
};

export const postSymbol = ({ symbol, addNewUserSymbol }) => {
  const url = 'http://localhost:5000/';

  axios.post(url, { symbol })
    .then(res => {
      const { data } = res;
      addNewUserSymbol(data);
    }).catch(err => console.error(err));
};

export const getUserSymbols = ({ setUserSymbols }) => {
  const url = 'http://localhost:5000/';
  axios.get(url, {
    timeout: 5000
  }).then(res => {
    const { data } = res;
    setUserSymbols(data);
  }).catch(err => console.error(err));
};

