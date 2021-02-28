const axios = require('axios');

export const register = userName => {
  const url = 'http://localhost:5000/user';

  axios.post(url, { userName })
    .then(res => {
      const { data: {
        userName
      } } = res;
      localStorage.setItem('userName', userName);
    }).catch(err => console.error(err));
};