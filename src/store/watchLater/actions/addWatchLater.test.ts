import addWatchLater from './addWatchLater';
import { IWatchLaterAddAction } from '../models';
import { ADD_WATCH_LATER } from '../types';

const mockMovie = jest.requireMock('movie')

describe('addWatchLater', () => {
  it('adds to watch later', () => {
    const expected: IWatchLaterAddAction = { type: ADD_WATCH_LATER, payload: mockMovie };
    expect(addWatchLater(mockMovie)).toEqual(expected);
  })
})