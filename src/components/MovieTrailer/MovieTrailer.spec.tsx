import React from "react";
import { render, cleanup } from "@testing-library/react";

import MovieTrailer from "./MovieTrailer";

jest.mock("react-youtube", () => () => <div />);
jest.mock("react-intl", () => ({ FormattedMessage: () => <div /> }));

const trailerMock = jest.requireMock("trailer");

describe("MovieTrailer", () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(<MovieTrailer trailer={trailerMock} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
