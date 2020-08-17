import { IRemoveFavoriteAction } from '../models';
import { REMOVE_FAVORITE } from '../types';
import removeFavorite from './removeFavorite';

const mockMovie = jest.requireMock('movie')

describe('removeFavorite', () => {
  it('removes favorite', () => {
    const expected: IRemoveFavoriteAction = { type: REMOVE_FAVORITE, payload: mockMovie };
    expect(removeFavorite(mockMovie)).toEqual(expected);
  })
})