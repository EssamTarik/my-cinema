import React, { useState, useCallback } from "react";
import cn from "classnames";
import { FormattedMessage } from "react-intl";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen, setMobileMenuOpen]);

  return (
    <div className="navigation-bar">
      <Link className="navigation-bar__title" to="/">
        <FormattedMessage id="navBar.title" />
      </Link>
      <div
        onClick={toggleMobileMenu}
        className={cn("navigation-bar__menu", {
          "navigation-bar__menu--mobile-open": mobileMenuOpen,
        })}
      >
        <NavLink
          exact
          activeClassName="navigation-bar__menu__item--active"
          className="navigation-bar__menu__item"
          to="/"
        >
          <FormattedMessage id="navBar.search" />
        </NavLink>
        <NavLink
          exact
          activeClassName="navigation-bar__menu__item--active"
          className="navigation-bar__menu__item"
          to="favorites"
        >
          <FormattedMessage id="navBar.favorites" />
        </NavLink>
        <NavLink
          exact
          activeClassName="navigation-bar__menu__item--active"
          className="navigation-bar__menu__item"
          to="watch-later"
        >
          <FormattedMessage id="navBar.watchLater" />
        </NavLink>
        <button type="button" className="navigation-bar__menu-close-btn">
          <AiOutlineClose color="white" />
        </button>
      </div>
      <button
        type="button"
        onClick={toggleMobileMenu}
        className="navigation-bar__menu-btn"
      >
        <GiHamburgerMenu size={20} color="white" />
      </button>
    </div>
  );
};

export default NavigationBar;
