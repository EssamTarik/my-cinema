import { IMovie } from "../../movieSearch/models";
import { ADD_WATCH_LATER } from "../types";
import { IWatchLaterAddAction } from "../models";

export default (movie: IMovie): IWatchLaterAddAction => ({
  type: ADD_WATCH_LATER,
  payload: movie
})