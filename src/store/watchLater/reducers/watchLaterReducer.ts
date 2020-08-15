import { IWatchLater, WatchLaterActions } from "../models"
import { ADD_WATCH_LATER, REMOVE_WATCH_LATER } from "../types";

export const initialState: IWatchLater = {};

export default (state: IWatchLater = initialState, action: WatchLaterActions) => {
  switch (action.type) {
    case ADD_WATCH_LATER: {
      const { id } = action.payload;
      return { ...state, [id]: action.payload };
    }
    case REMOVE_WATCH_LATER: {
      const { id } = action.payload;
      delete state[id];
      return { ...state };
    }
    default:
      return state;
  }
}