import { SEARCH_TEXT_SET } from '../types';
import { ISetSearchTextAction } from '../models';

const initialState = '';

export default (state: string = initialState, action: ISetSearchTextAction): string => {
  switch (action.type) {
    case SEARCH_TEXT_SET:
      return action.payload;
    default:
      return state;
  }
}