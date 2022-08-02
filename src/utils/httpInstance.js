import axios from 'axios';
import { APIError } from './errors.js';

export default class HttpInstance {
  #httpInstance;

  constructor(options) {
    this.#httpInstance = axios.create({ ...options });
  }

  // eslint-disable-next-line class-methods-use-this
  #throwError(message) {
    throw new APIError(message);
  }

  // eslint-disable-next-line class-methods-use-this
  #beautifyResponse(response) {
    return response.data;
  }

  async get(url) {
    const response = await this.#httpInstance.get(url)
      .then((axiosResponse) => {
        const r = this.#beautifyResponse(axiosResponse);

        if (r.success === false) {
          this.#throwError(r.message);
        }

        return r;
      })
      .catch((e) => this.#throwError(e.message));

    return response;
  }
}

export function buildHttpOptions(baseURL, authToken) {
  return {
    baseURL,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
}
