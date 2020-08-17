import React from "react";
import { render, cleanup } from "@testing-library/react";
import MainLayout from "./MainLayout";

jest.mock("../../../components", () => ({ NavigationBar: () => <div /> }));

describe("MainLayout", () => {
  afterEach(cleanup);

  it("renders", () => {
    const { asFragment } = render(<MainLayout />);
    expect(asFragment()).toMatchSnapshot();
  });
});
