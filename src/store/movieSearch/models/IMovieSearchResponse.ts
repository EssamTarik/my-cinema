import { IMovie } from './IMovie';

export interface IMovieSearchResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: IMovie[];
}