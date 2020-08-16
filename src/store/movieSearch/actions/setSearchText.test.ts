import setSearchText from './setSearchText';
import { ISetSearchTextAction } from '../models';
import { SEARCH_TEXT_SET } from '../types';

describe('setSearchText', () => {
  it('returns a set search text action', () => {
    const searchText = 'test';
    const expected: ISetSearchTextAction = { type: SEARCH_TEXT_SET, payload: searchText }
    expect(setSearchText(searchText)).toEqual(expected);
  })
})