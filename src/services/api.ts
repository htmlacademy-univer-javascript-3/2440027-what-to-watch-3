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
        // what to do if 401
      }
      return Promise.reject(error);
    }
  );

  return api;
};

export default getAPIClient;
