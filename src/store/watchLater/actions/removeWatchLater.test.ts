import removeWatchLater from './removeWatchLater';
import { IWatchLaterAddAction, IWatchLaterRemoveAction } from '../models';
import { REMOVE_WATCH_LATER } from '../types';

const mockMovie = jest.requireMock('movie')

describe('removeWatchLater', () => {
  it('removes from watch later', () => {
    const expected: IWatchLaterRemoveAction = { type: REMOVE_WATCH_LATER, payload: mockMovie };
    expect(removeWatchLater(mockMovie)).toEqual(expected);
  })
})