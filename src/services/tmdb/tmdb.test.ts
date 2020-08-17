import fetch from 'jest-fetch-mock';
import { stringify } from 'querystring';
import { searchMovies, getMovieTrailers } from './tmdb';

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

  it('gets movie trailers and returns json response', async () => {
    const mockResponse = { test: true };

    fetch.mockResponseOnce(JSON.stringify(mockResponse));
    const response = await getMovieTrailers(1);

    expect(response).toEqual(mockResponse);
  });

  it('Searches for movies with the correct parameters', async () => {
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

  it('gets movie trailers with the correct parameters', async () => {
    let apiURL = '/api';
    let movieId = 123;
    let apiKey = '123'

    const mockResponse = { test: true };
    fetch.mockResponse(JSON.stringify(mockResponse));

    await getMovieTrailers(movieId, apiURL, apiKey);
    expect(fetch).toHaveBeenCalledWith(`${apiURL}/movie/${movieId}/trailers?${stringify({ api_key: apiKey })}`)

    apiURL = '/api2';
    movieId = 1234;
    apiKey = '1234';

    await getMovieTrailers(movieId, apiURL, apiKey);
    expect(fetch).toHaveBeenCalledWith(`${apiURL}/movie/${movieId}/trailers?${stringify({ api_key: apiKey })}`)
  })

})