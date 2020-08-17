import searchTextReducer from './searchTextReducer';
import { ISetSearchTextAction } from '../models';
import { SEARCH_TEXT_SET } from '../types';

describe('searchTextReducer', () => {
  it('returns state with new search text', () => {
    const searchText = 'test';
    const action: ISetSearchTextAction = { type: SEARCH_TEXT_SET, payload: searchText }
    expect(searchTextReducer('', action)).toEqual(searchText);
  })
})