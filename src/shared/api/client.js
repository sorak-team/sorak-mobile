import axios from 'axios';
import { Platform } from 'react-native';

const defaultBaseUrl =
  Platform.OS === 'android' ? 'http://10.0.2.2:3000/api' : 'http://localhost:3000/api';

const baseURL = process.env.EXPO_PUBLIC_API_URL ?? defaultBaseUrl;

export const apiClient = axios.create({
  baseURL,
  timeout: 30_000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);