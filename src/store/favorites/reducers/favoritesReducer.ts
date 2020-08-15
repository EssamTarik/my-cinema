import { IFavorites, FavoriteAction } from "../models"
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../types"

export const initialState: IFavorites = {}

export default (state: IFavorites = initialState, action: FavoriteAction) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      const { id } = action.payload;
      return { ...state, [id]: action.payload };
    }
    case REMOVE_FAVORITE: {
      const { id } = action.payload;
      delete state[id];
      return { ...state };
    }
    default:
      return state;
  }
}