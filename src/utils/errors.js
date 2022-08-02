/* eslint-disable max-classes-per-file */
class BaseError extends Error {
  id;
}

export class SDKError extends BaseError {
  constructor(...args) {
    super(...args);
    this.id = 'sdk_error';
  }
}

export class APIError extends BaseError {
  constructor(...args) {
    super(...args);
    this.id = 'external_api_error';
  }
}
