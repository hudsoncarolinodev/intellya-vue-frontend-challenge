import axios from 'axios';

const apiKey  = "70335667-2408-4011-a994-ea3e7042d96f"
const baseUrl = "http://localhost:3000"

const axiosInstance = axios.create({
  baseURL: `${baseUrl}`,
});

axiosInstance.interceptors.request.use(config => {
  config.headers['x-api-key'] = `${apiKey}`;
  return config;
});

export default axiosInstance;