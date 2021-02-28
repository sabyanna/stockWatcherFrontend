const axios = require('axios');

export const register = userName => {
  const url = 'http://localhost:5000/user/register';

  axios.post(url, { userName })
    .then(res => {
      const { data: {
        userName
      } } = res;
      localStorage.setItem('userName', userName);
    }).catch(error => console.error(error));
};

export const login = userName => {
  const url = 'http://localhost:5000/user/login';

  axios.post(url, { userName })
    .then(res => {
      console.log('DADASD', userName);
      localStorage.setItem('userName', userName);
    }).catch(err => console.error(err));
};