import addFavorite from './addFavorite';
import { IAddFavoriteAction } from '../models';
import { ADD_FAVORITE } from '../types';

const mockMovie = jest.requireMock('movie')

describe('addFavorite', () => {
  it('adds favorite', () => {
    const expected: IAddFavoriteAction = { type: ADD_FAVORITE, payload: mockMovie };
    expect(addFavorite(mockMovie)).toEqual(expected);
  })
})