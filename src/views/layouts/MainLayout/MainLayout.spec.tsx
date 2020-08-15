import React from 'react';
import MainLayout from './MainLayout';
import { render, cleanup } from '@testing-library/react';
jest.mock('../../../components', () => ({ NavigationBar: () => <div /> }))

describe('MainLayout', () => {
  afterEach(cleanup);

  it('renders', () => {
    const { asFragment } = render(<MainLayout />);
    expect(asFragment()).toMatchSnapshot()
  })
})