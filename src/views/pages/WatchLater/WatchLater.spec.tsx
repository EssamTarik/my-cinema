jest.mock('../../../containers', () => ({ WatchLaterMoviesContainer: () => <div /> }))
import React from 'react';
import WatchLaterPage from './WatchLaterPage';
import { render, cleanup } from '@testing-library/react';

describe('WatchLaterPage', () => {
  afterEach(cleanup);

  it('renders', () => {
    const { asFragment } = render(<WatchLaterPage />);
    expect(asFragment()).toMatchSnapshot()
  })
})