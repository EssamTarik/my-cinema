import { tmdbAPIKey, tmdbAPIURL } from '../../config';
import { stringify } from 'querystring';

export const searchMovies = async (query: string, page: number = 1, apiURL: string = tmdbAPIURL, apiKey: string = tmdbAPIKey) => {
  const response = await fetch(`${apiURL}/search/movie?${stringify({ query, api_key: apiKey, page })}`)
  const json = await response.json();
  return json;
}