const axios = require('axios');

export const register = async userName => {
  const url = 'http://localhost:5000/user/register';

  try {
    const {
      data: {
        userId
      }
    } = await axios.post(url, { userName }) || {};
    localStorage.setItem('userId', userId);
  } catch (error) {
    throw new Error('Username not available');
  }
};

export const login = async userName => {
  const url = 'http://localhost:5000/user/login';

  try {
    const {
      data: {
        userId
      }
    } = await axios.post(url, userName);

    localStorage.setItem('userId', userId);
  } catch {
    throw new Error('Incorrect username');
  }
};

export const logout = ({ resetState }) => {
  try {
    localStorage.removeItem('userId');
    resetState();
  } catch (error) {
    throw error;
  }
};