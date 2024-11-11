import axios from 'axios';

// Define the TMDb API key and base URL
const API_KEY = 'd9f284c50873cebf94b7debdfa2e75ab';  // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
});

// Add the API key to every request
tmdb.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api_key'] = API_KEY;
  return config;
});

export default tmdb;