import React from 'react';
import SearchBarContainer from './SearchBarContainer';
import { render, cleanup } from '@testing-library/react';
jest.mock('../../components', () => ({ SearchBar: () => <div /> }))

describe('SearchBarContainer', () => {
  afterEach(cleanup);
  const mockSearchMovies = jest.fn()

  it('renders', () => {
    const { asFragment } = render(<SearchBarContainer searchMovies={mockSearchMovies} />);
    expect(asFragment()).toMatchSnapshot()
  });
})