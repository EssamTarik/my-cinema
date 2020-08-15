import { IMovie } from "../../movieSearch/models";
import { REMOVE_WATCH_LATER } from "../types";
import { IWatchLaterRemoveAction } from "../models";

export default (movie: IMovie): IWatchLaterRemoveAction => ({
  type: REMOVE_WATCH_LATER,
  payload: movie
})