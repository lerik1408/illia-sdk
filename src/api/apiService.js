import * as HttpInstance from '../utils/httpInstance.js';
import { SDKError } from '../utils/errors.js';

import {
  chapterSchema,
  quoteSchema,
  characterSchema,
  movieSchema,
  bookSchema,
} from '../utils/entitiesSchemas.js';

export default class ApiService {
  #token;

  #httpInstance;

  #apiURL;

  filteringPatterns;

  filteringAndSearchingKeys;

  constructor(token) {
    this.#token = token;
    this.#apiURL = 'https://the-one-api.dev/v2';
    this.#httpInstance = new HttpInstance.default(
      HttpInstance.buildHttpOptions(this.#apiURL, this.#token),
    );
    this.filteringPatterns = {
      match: '=',
      negativeMatch: '!=',
      include: ',',
      notExists: '!',
      exists: '',
      less: '<',
      more: '>',
      equal: '=',
    };
    this.filteringAndSearchingKeys = {
      book: Object.keys(bookSchema),
      movie: Object.keys(movieSchema),
      character: Object.keys(characterSchema),
      quote: Object.keys(quoteSchema),
      chapter: Object.keys(chapterSchema),
    };
  }

  buildPagination(limit, page) {
    return `limit=${limit || 1000}&page=${page || 0}`;
  }

  buildSortingOption(key, orderBy) {
    return `sort=${key}:${orderBy}`;
  }

  buildFilteringOption(key, pattern, value) {
    return `${key}${pattern}${value}`;
  }

  #buildUrl(mainUrl, pagination, sorting, filteringOption) {
    return `${mainUrl}?${pagination ? `${pagination}&` : ''}${sorting ? `${sorting}&` : ''}${filteringOption || ''}`;
  }

  #idIsValid(id) {
    if (typeof id !== 'string') throw new SDKError('id must be a string');
  }

  // eslint-disable-next-line consistent-return
  #optionsIsValid(options) {
    if (typeof options !== 'object') {
      return true;
    }

    if (!!options.pagination && typeof options.pagination !== 'string') {
      throw new SDKError('Pagination must be a string. Use buildPagination method please');
    }

    if (!!options.sorting && typeof options.sorting !== 'string') {
      throw new SDKError('Sorting must be a string. Use buildSortingOption method please');
    }

    if (!!options.filtering && typeof options.filtering !== 'string') {
      throw new SDKError('Filtering must be a string. Use buildFilteringOption method please');
    }
  }

  /*
    Books
  */
  async listBooks(options) {
    this.#optionsIsValid(options);
    const url = this.#buildUrl('/book', options?.pagination, options?.sorting, options?.filtering);
    const response = await this.#httpInstance.get(url);
    return response;
  }

  async retrieveBooks(id, options) {
    this.#optionsIsValid(options);
    this.#idIsValid(id);
    const url = this.#buildUrl(`/book/${id}`, options?.pagination, options?.sorting, options?.filtering);
    const response = await this.#httpInstance.get(url);
    return response;
  }

  async listBookChapters(id, options) {
    this.#optionsIsValid(options);
    this.#idIsValid(id);
    const url = this.#buildUrl(`/book/${id}/chapter`, options?.pagination, options?.sorting, options?.filtering);
    const response = await this.#httpInstance.get(url);
    return response;
  }

  /*
    Movies
  */
  async listMovies(options) {
    this.#optionsIsValid(options);
    const url = this.#buildUrl('/movie', options?.pagination, options?.sorting, options?.filtering);
    const response = await this.#httpInstance.get(url);
    return response;
  }

  async retrieveMovie(id, options) {
    this.#optionsIsValid(options);
    this.#idIsValid(id);
    const url = this.#buildUrl(`/movie/${id}`, options?.pagination, options?.sorting, options?.filtering);
    const response = await this.#httpInstance.get(url);
    return response;
  }

  async listMovieQuotes(id, options) {
    this.#optionsIsValid(options);
    this.#idIsValid(id);
    const url = this.#buildUrl(`/movie/${id}/quote`, options?.pagination, options?.sorting, options?.filtering);
    const response = await this.#httpInstance.get(url);
    return response;
  }

  /*
    Characters
  */
  async listCharacters(options) {
    this.#optionsIsValid(options);
    const url = this.#buildUrl('/character', options?.pagination, options?.sorting, options?.filtering);
    const response = await this.#httpInstance.get(url);
    return response;
  }

  async retrieveCharacter(id, options) {
    this.#optionsIsValid(options);
    this.#idIsValid(id);
    const url = this.#buildUrl(`/character/${id}`, options?.pagination, options?.sorting, options?.filtering);
    const response = await this.#httpInstance.get(url);
    return response;
  }

  async listCharacterQuotes(id, options) {
    this.#optionsIsValid(options);
    this.#idIsValid(id);
    const url = this.#buildUrl(`/character/${id}/quote`, options?.pagination, options?.sorting, options?.filtering);
    const response = await this.#httpInstance.get(url);
    return response;
  }

  /*
    Quotes
  */
  async listQuotes(options) {
    this.#optionsIsValid(options);
    const url = this.#buildUrl('/quote', options?.pagination, options?.sorting, options?.filtering);
    const response = await this.#httpInstance.get(url);
    return response;
  }

  async retrieveQuote(id, options) {
    this.#optionsIsValid(options);
    this.#idIsValid(id);
    const url = this.#buildUrl(`/quote/${id}`, options?.pagination, options?.sorting, options?.filtering);
    const response = await this.#httpInstance.get(url);
    return response;
  }

  /*
    Chapter
  */
  async listChapters(options) {
    this.#optionsIsValid(options);
    const url = this.#buildUrl('/chapter', options?.pagination, options?.sorting, options?.filtering);
    const response = await this.#httpInstance.get(url);
    return response;
  }

  async retrieveChapter(id, options) {
    this.#optionsIsValid(options);
    this.#idIsValid(id);
    const url = this.#buildUrl(`/chapter/${id}`, options?.pagination, options?.sorting, options?.filtering);
    const response = await this.#httpInstance.get(url);
    return response;
  }
}
