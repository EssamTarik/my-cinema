import { IMovieSearchResetAction } from "../models";
import { MOVIE_SEARCH_RESET } from "../types";

export default (): IMovieSearchResetAction => ({ type: MOVIE_SEARCH_RESET });
