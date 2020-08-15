jest.mock('react-intl', () => ({ FormattedMessage: () => <div /> }));
jest.mock('react-router-dom');
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import NavigationBar from "./NavigationBar";

describe('NavigationBar', () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <NavigationBar />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("opens and closes mobile menu", () => {
    const { container } = render(
      <NavigationBar />
    );
    const menuBtn = container.querySelector('.navigation-bar__menu-btn');
    fireEvent.click(menuBtn!);

    let mobileMenu = container.querySelector('.navigation-bar__menu--mobile-open');
    expect(mobileMenu).not.toEqual(null);

    const menuCloseBtn = container.querySelector('.navigation-bar__menu-close-btn');
    fireEvent.click(menuCloseBtn!);

    mobileMenu = container.querySelector('.navigation-bar__menu--mobile-open');
    expect(mobileMenu).toEqual(null);
  });
})

