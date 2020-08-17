import React from "react";
import { render, cleanup } from "@testing-library/react";
import WatchLaterPage from "./WatchLaterPage";

jest.mock("../../../containers", () => ({
  WatchLaterMoviesContainer: () => <div />,
}));

describe("WatchLaterPage", () => {
  afterEach(cleanup);

  it("renders", () => {
    const { asFragment } = render(<WatchLaterPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
