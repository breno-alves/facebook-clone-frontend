import Axios, { AxiosResponse } from 'axios';
import { getToken } from './auth';

interface ApiHandler {
  get<T>(url: string): Promise<AxiosResponse<T>>;
  post<T, U>(url: string, payload: T): Promise<AxiosResponse<U>>;
  delete<T>(url: string): Promise<AxiosResponse<T>>;
}
interface Headers {
  headers: { [key: string]: string };
}

const client = Axios.create({
  baseURL: process.env.REACT_APP_API,
});

const getHeaders = (): Headers | null => {
  const token = getToken();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return token ? config : null;
};

const api: ApiHandler = {
  get: async url => {
    const headers = getHeaders();
    return headers ? client.get(url, headers) : client.get(url);
  },

  post: async (url, payload) => {
    const headers = getHeaders();
    return headers
      ? client.post(url, payload, headers)
      : client.post(url, payload);
  },

  delete: async url => {
    return client.delete(url);
  },
};

export default api;
