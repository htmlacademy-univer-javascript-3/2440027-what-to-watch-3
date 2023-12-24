import axios from 'axios';

const BASE_URL = 'https://13.design.pages.academy/wtw';
const REQUEST_TIMEOUT_MS = 5000;


const getAPIClient = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT_MS,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (error.response?.status === 401) {
        /*maybe add a nice error page*/
      }
      return Promise.reject(error);
    }
  );

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }
    return config;
  });

  return api;
};

export default getAPIClient;
