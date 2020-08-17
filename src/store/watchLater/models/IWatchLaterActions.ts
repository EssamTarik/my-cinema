import { ADD_WATCH_LATER, REMOVE_WATCH_LATER } from "../types";
import { IMovie } from "../../movieSearch/models";

export interface IWatchLaterAddAction {
  type: typeof ADD_WATCH_LATER;
  payload: IMovie;
}

export interface IWatchLaterRemoveAction {
  type: typeof REMOVE_WATCH_LATER;
  payload: IMovie;
}

export type WatchLaterActions = IWatchLaterAddAction | IWatchLaterRemoveAction;