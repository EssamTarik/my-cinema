import { IMovie } from "../../movieSearch/models";
import { ADD_FAVORITE } from "../types";
import { IAddFavoriteAction } from "../models";

export default (movie: IMovie): IAddFavoriteAction => ({
  type: ADD_FAVORITE,
  payload: movie
})