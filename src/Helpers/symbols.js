const axios = require('axios');

const STOCK_API_KEY = process.env.STOCK_API_KEY;

export const getSymbol = ({ symbol, setState }) => {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${STOCK_API_KEY}`;
  axios.get(url, {
    timeout: 5000
  }).then(res => {
    const { data } = res;

    setState(data);
  }).catch(err => console.error(err));
};

export const postSymbol = symbol => {
  const url = 'http://localhost:5000/symbol';

  axios.post(url, symbol)
    .catch(err => console.error(err));
};

