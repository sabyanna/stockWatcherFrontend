const axios = require('axios');

const STOCK_API_KEY = process.env.STOCK_API_KEY  

export const getSymbol = ({symbol, setState}) => {
  axios
    .get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${STOCK_API_KEY}`, {
      timeout: 5000
    }).then(res => {
      const { data } = res;

      setState(data);
    })
    .catch(err => console.error(err));
}

