import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    // const token = 'TOKEN_....';

    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      // refresh or login
    }

    return Promise.reject(error.response?.data || error);
  },
);

export default axiosClient;
