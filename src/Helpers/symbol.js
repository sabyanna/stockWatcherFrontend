const axios = require('axios');

export const getSymbol = ({ symbol, setNewSymbol, userId }) => {
  const url = `http://localhost:5000/user/${userId}/symbols/${ symbol }`;
  axios.get(url, {
    timeout: 5000
  }).then(res => {
    const { data } = res;

    setNewSymbol(data[0]);
  }).catch(err => console.error(err));
};

export const postSymbol = ({ symbol, addNewUserSymbol, userId }) => {
  const url = `http://localhost:5000/user/${userId}/symbols`;

  axios.post(url, { symbol, userId })
    .then(res => {
      const { data } = res;
      addNewUserSymbol(data);
    }).catch(err => console.error(err));
};

export const getUserSymbols = ({ setUserSymbols, userId }) => {
  const url = `http://localhost:5000/user/${userId}/symbols`;

  axios.get(url, {
    timeout: 5000
  }).then(res => {
    const { data } = res;
    setUserSymbols(data);
  }).catch(err => console.error(err));
};

