import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './styles.css';
import { FormattedMessage } from 'react-intl';

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen, setMobileMenuOpen])

  return (
    <div className='navigation-bar' >
      <Link className='navigation-bar__title' to='/'><FormattedMessage id='navBar.title' /></Link>
      <div onClick={toggleMobileMenu} className={cn('navigation-bar__menu', { 'navigation-bar__menu--mobile-open': mobileMenuOpen })}>
        <Link className='navigation-bar__menu__item' to=''><FormattedMessage id='navBar.search' /></Link>
        <Link className='navigation-bar__menu__item' to='favorites'><FormattedMessage id='navBar.favorites' /></Link>
        <Link className='navigation-bar__menu__item' to='watch-later'><FormattedMessage id='navBar.watchLater' /></Link>
        <button className='navigation-bar__menu-close-btn'><AiOutlineClose color='white' /></button>
      </div>
      <button onClick={toggleMobileMenu} className='navigation-bar__menu-btn'><GiHamburgerMenu size={20} color='white' /></button>
    </div >
  );
}

export default NavigationBar;