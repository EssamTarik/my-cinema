import favoritesReducer, { initialState } from './favoritesReducer';
import { IAddFavoriteAction, IRemoveFavoriteAction } from '../models';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../types';
const mockMovie = jest.requireMock('movie')

describe('favoritesReducer', () => {
  it('adds a favorite', () => {
    const addAction: IAddFavoriteAction = { type: ADD_FAVORITE, payload: mockMovie };
    const expectedState = {
      [mockMovie.id]: mockMovie
    }

    expect(favoritesReducer(initialState, addAction)).toEqual(expectedState)
  })

  it('removes a favorite', () => {
    const removeAction: IRemoveFavoriteAction = { type: REMOVE_FAVORITE, payload: mockMovie };
    const expectedState = {}
    const filledInitialState = {
      [mockMovie.id]: mockMovie
    }

    expect(favoritesReducer(filledInitialState, removeAction)).toEqual(expectedState)
  })

  it('returns default state for irrelevant actions', () => {
    const action = { type: 'test' };
    expect(favoritesReducer(initialState, action as any)).toEqual(initialState)
  })
})