import { AxiosError, AxiosRequestConfig } from 'axios';
import api from './api';
import delay from '~Shared/Utils/delay';
import APIError from './apiError';

export default class CreateInstance {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  async createRequest<T>(options?: AxiosRequestConfig) {
    await delay(2000);

    try {
      const response = await api({
        url: this.path,
        ...options,
      });

      const data: T = response.data;

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new APIError(error);
      }
    }
  }

  get<T>(options?: AxiosRequestConfig) {
    return this.createRequest<T>({
      method: 'get',
      ...options,
    });
  }

  post<T>(options?: AxiosRequestConfig<T>) {
    return this.createRequest<T>({
      method: 'post',
      ...options,
    });
  }

  update<T>(options?: AxiosRequestConfig<T>) {
    return this.createRequest<T>({
      method: 'patch',
      ...options,
    });
  }

  delete(options?: AxiosRequestConfig) {
    return this.createRequest({
      method: 'delete',
      ...options,
    });
  }
}
