import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

const axiosService = axios.create({
  baseURL,
  timeout: 5000
});

export default axiosService;