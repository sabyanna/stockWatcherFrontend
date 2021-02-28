const axios = require('axios');

export const register = async userName => {
  const url = 'http://localhost:5000/user/register';

  try {
    await axios.post(url, { userName });
    localStorage.setItem('userName', userName);
  } catch (error) {
    throw error;
  }
};

export const login = async userName => {
  const url = 'http://localhost:5000/user/login';

  try {
    await axios.post(url, { userName });
    localStorage.setItem('userName', userName);
  } catch (error) {
    throw error;
  }
};