// src/api/axiosConfig.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // URL del backend
  timeout: 10000,
});

export default instance;
