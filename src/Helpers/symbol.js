const axios = require('axios');

export const getNewSymbol = ({ symbol, setNewSymbol, userId }) => {
  const url = `http://localhost:5000/user/${userId}/symbols/${symbol}`;
  axios.get(url, {
    timeout: 5000
  }).then(res => {
    const { data } = res;

    setNewSymbol(data);
  }).catch(err => console.error(err));
};

export const getSymbol = async ({ symbolName, userId, updateUserSymbol }) => {
  const url = `http://localhost:5000/user/${userId}/symbols/${symbolName}`;
  axios.get(url, {
    timeout: 5000
  }).then(res => {
    const { data: { timeSeries } } = res;

    updateUserSymbol(symbolName, timeSeries);
  }).catch(err => console.error(err));
};

export const postSymbol = ({ symbol, addNewUserSymbol, userId }) => {
  const url = `http://localhost:5000/user/${userId}/symbols`;

  axios.post(url, { symbol: symbol.name, userId })
    .then(res => {
      const { data } = res;

      addNewUserSymbol(data);
    }).catch(err => console.error(err));
};

export const getUserSymbols = ({ setUserSymbols, userId }) => {
  const url = `http://localhost:5000/user/${userId}/symbols`;

  axios.get(url, {
    timeout: 10000
  }).then(res => {
    const { data } = res;
    setUserSymbols(data);
  }).catch(err => console.error(err));
};

