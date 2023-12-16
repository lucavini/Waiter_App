import axios from 'axios';
import { baseURL } from '~Shared/configs/server.json';

const api = axios.create({
  baseURL,
});

export default api;
