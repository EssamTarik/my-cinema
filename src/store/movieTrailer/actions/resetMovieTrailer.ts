import { MOVIE_TRAILER_FETCH_RESET } from "../types";
import { IMovieTrailerResetAction } from "../models";

export default (): IMovieTrailerResetAction => ({
  type: MOVIE_TRAILER_FETCH_RESET
})
