import { tmdbAPIKey, tmdbAPIURL } from '../../config';
import { stringify } from 'querystring';
import { IMovieSearchResponse } from '../../store/movieSearch/models';
import { IMovieTrailerResponse } from '../../store/movieTrailer/models';

const getJSON = async <T>(endpoint: string, apiURL: string) => {
  const response = await fetch(`${apiURL}/${endpoint}`)
  const json: T = await response.json();
  return json;
}

export const searchMovies = async (query: string, page: number = 1, apiURL: string = tmdbAPIURL, apiKey: string = tmdbAPIKey): Promise<IMovieSearchResponse> => {
  const endpoint = `search/movie?${stringify({ query, api_key: apiKey, page })}`;
  const json: IMovieSearchResponse = await getJSON<IMovieSearchResponse>(endpoint, apiURL);
  return json;
}

export const getMovieTrailers = async (movieId: number, apiURL: string = tmdbAPIURL, apiKey: string = tmdbAPIKey): Promise<IMovieTrailerResponse> => {
  const endpoint = `movie/${movieId}/trailers?${stringify({ api_key: apiKey })}`;
  const json: IMovieTrailerResponse = await getJSON<IMovieTrailerResponse>(endpoint, apiURL);
  return json;
}