import { tmdbAPIKey, tmdbAPIURL } from '../../config';
import { stringify } from 'querystring';
import { IMovieSearchResponse } from '../../store/movieSearch/models';

export const searchMovies = async (query: string, page: number = 1, apiURL: string = tmdbAPIURL, apiKey: string = tmdbAPIKey): Promise<IMovieSearchResponse> => {
  const response = await fetch(`${apiURL}/search/movie?${stringify({ query, api_key: apiKey, page })}`)
  const json: IMovieSearchResponse = await response.json();
  return json;
}