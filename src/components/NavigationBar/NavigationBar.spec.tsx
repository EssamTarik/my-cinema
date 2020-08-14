jest.mock('react-intl');
jest.mock('react-router-dom');
import React from "react";
import { render, cleanup } from "@testing-library/react";

import NavigationBar from "./NavigationBar";

describe('NavigationBar', () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <NavigationBar />
    );
    expect(asFragment()).toMatchSnapshot();
  });
})

