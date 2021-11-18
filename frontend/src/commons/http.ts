import { getStorageItem } from '@/services/storage';
import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}`,
  headers: {
    'Content-type': 'application/json',
  },
});

instance.interceptors.request.use(async (config) => {
  const token = await getStorageItem('token');
  config.headers['authorization'] = token ? `Bearer ${token}` : '';
  return config;
});

export default instance;
