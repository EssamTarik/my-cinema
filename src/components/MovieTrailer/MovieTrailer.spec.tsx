jest.mock('react-youtube', () => () => <div />)
jest.mock('react-intl', () => ({ FormattedMessage: () => <div /> }));
import React from "react";
import { render, cleanup } from "@testing-library/react";

const trailerMock = jest.requireMock('trailer');

import MovieTrailer from "./MovieTrailer";

describe('MovieTrailer', () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <MovieTrailer trailer={trailerMock} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
})

