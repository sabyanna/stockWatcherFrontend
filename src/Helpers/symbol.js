import axiosService from '../config/axios.config';

export const getNewSymbol = ({ symbol, setNewSymbol, userId }) => {
  const url = `/user/${userId}/symbols/${symbol}`;
  axiosService.get(url, {
    timeout: 5000
  }).then(res => {
    const { data } = res;

    setNewSymbol(data);
  }).catch(err => console.error(err));
};

export const getSymbol = ({ symbolName, userId, updateUserSymbol }) => {
  const url = `/user/${userId}/symbols/${symbolName}`;
  axiosService.get(url, {
    timeout: 5000
  }).then(res => {
    const { data: { timeSeries } } = res;

    updateUserSymbol(symbolName, timeSeries);
  }).catch(err => console.error(err));
};

export const postSymbol = ({ symbol, addNewUserSymbol, userId }) => {
  const url = `/user/${userId}/symbols`;

  axiosService.post(url, { symbol: symbol.name, userId })
    .then(res => {
      const { data } = res;

      addNewUserSymbol(data);
    }).catch(err => console.error(err));
};

export const getUserSymbols = ({ setUserSymbols, userId }) => {
  const url = `/user/${userId}/symbols`;

  axiosService.get(url, {
    timeout: 10000
  }).then(res => {
    const { data } = res;
    setUserSymbols(data);
  }).catch(err => console.error(err));
};

