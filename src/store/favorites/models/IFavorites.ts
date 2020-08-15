import { IMovie } from '../../movieSearch/models';

export interface IFavorites {
  [id: string]: IMovie | undefined;
}