import { IMovie } from "../../movieSearch/models";

export interface IWatchLater {
  [id: string]: IMovie | undefined;
}