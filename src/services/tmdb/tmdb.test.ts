import fetch from 'jest-fetch-mock';
import { stringify } from 'querystring';
import { searchMovies } from './tmdb';

describe('tmdb api calls', () => {
  beforeEach(() => {
    fetch.mockReset();
  });

  afterEach(() => {
    fetch.mockReset();
  });

  it('Searches for movies and returns json response', async () => {
    const mockResponse = { test: true };

    fetch.mockResponseOnce(JSON.stringify(mockResponse));
    const response = await searchMovies('movie', 1);

    expect(response).toEqual(mockResponse);
  });

  it('Searches for movies with the right parameters', async () => {
    let apiURL = '/api';
    let query = 'movie';
    let page = 1;
    let apiKey = '123'

    const mockResponse = { test: true };
    fetch.mockResponse(JSON.stringify(mockResponse));

    await searchMovies(query, page, apiURL, apiKey);
    expect(fetch).toHaveBeenCalledWith(`${apiURL}/search/movie?${stringify({ query, api_key: apiKey, page })}`)

    apiURL = '/api2';
    query = 'movie2';
    page = 2;
    apiKey = '1234';
    await searchMovies(query, page, apiURL, apiKey);
    expect(fetch).toHaveBeenCalledWith(`${apiURL}/search/movie?${stringify({ query, api_key: apiKey, page })}`)

  })

})