import axios from 'axios';

const initInstance = (config) => {
  const instance = axios.create({
    timeout: 2000,
    ...config,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Cross-Control-Allow-Origin': '*',
      ...config.headers,
    },
  });

  return instance;
};

export const BASE_URI = 'https://gongsikdang-be-production.up.railway.app';

export const fetchInstance = initInstance({
  baseURL: BASE_URI,
});

fetchInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return error;
  }
);
