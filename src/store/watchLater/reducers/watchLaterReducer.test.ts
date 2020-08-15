import watchLaterReducer, { initialState } from './watchLaterReducer';
import { IWatchLaterAddAction, IWatchLaterRemoveAction } from '../models';
import { ADD_WATCH_LATER, REMOVE_WATCH_LATER } from '../types';
const mockMovie = jest.requireMock('movie')

describe('watchLaterReducer', () => {
  it('adds to watch later', () => {
    const addAction: IWatchLaterAddAction = { type: ADD_WATCH_LATER, payload: mockMovie };
    const expectedState = {
      [mockMovie.id]: mockMovie
    }

    expect(watchLaterReducer(initialState, addAction)).toEqual(expectedState)
  })

  it('removes from watch later', () => {
    const removeAction: IWatchLaterRemoveAction = { type: REMOVE_WATCH_LATER, payload: mockMovie };
    const expectedState = {}
    const filledInitialState = {
      [mockMovie.id]: mockMovie
    }

    expect(watchLaterReducer(filledInitialState, removeAction)).toEqual(expectedState)
  })

  it('returns default state for irrelevant actions', () => {
    const action = { type: 'test' };
    expect(watchLaterReducer(initialState, action as any)).toEqual(initialState)
  })
})