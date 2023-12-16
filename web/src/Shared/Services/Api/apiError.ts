import { AxiosError } from 'axios';

class APIError extends AxiosError {
  constructor(responseError: AxiosError) {
    super();

    this.name = 'APIError';
    this.status = responseError.response?.status;
    this.message = responseError.message;
    delete this.stack;
  }
}

export default APIError;
