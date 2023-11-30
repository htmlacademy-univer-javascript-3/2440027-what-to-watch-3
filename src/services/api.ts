import axios from 'axios';

const BASE_URL = 'https://13.design.pages.academy/wtw';
const REQUEST_TIMEOUT_MS = 5000;


const getAPIClient = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT_MS,
  });

  return api;
};

export default getAPIClient;
