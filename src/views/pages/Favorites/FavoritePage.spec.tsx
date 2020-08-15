jest.mock('../../../containers', () => ({ FavoriteMoviesContainer: () => <div /> }))
import React from 'react';
import FavoritesPage from './FavoritesPage';
import { render, cleanup } from '@testing-library/react';

describe('FavoritesPage', () => {
  afterEach(cleanup);

  it('renders', () => {
    const { asFragment } = render(<FavoritesPage />);
    expect(asFragment()).toMatchSnapshot()
  })
})