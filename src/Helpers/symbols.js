const axios = require('axios');

export const getSymbol = symbol => {
  axios
    .get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=demo`, {
      timeout: 5000
    })
    .then(res => {
      const { data } = res;
      return data;
    })
    .catch(err => console.error(err));
}

