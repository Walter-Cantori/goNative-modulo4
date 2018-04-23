import axios from 'axios';

const api = axios.create({
  baseURL: 'http://9.86.226.169:3000',
});

export default api;
