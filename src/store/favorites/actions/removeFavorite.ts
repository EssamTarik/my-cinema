import { IMovie } from "../../movieSearch/models";
import { REMOVE_FAVORITE } from "../types";
import { IRemoveFavoriteAction } from "../models";

export default (movie: IMovie): IRemoveFavoriteAction => ({
  type: REMOVE_FAVORITE,
  payload: movie
})