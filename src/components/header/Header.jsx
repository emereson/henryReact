import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.css';
import { useSelector } from 'react-redux';

const Header = () => {
  const [closeNav, setCloseNav] = useState(false);
  const [viewIcon, setViewIcon] = useState(0);
  const translation = useSelector((state) => state.translation);

  const handleLinkClick = () => {
    setCloseNav(false);
    setViewIcon(0);
  };

  const handleMouseOver = (index) => {
    setViewIcon(index);
  };

  const handleMouseOut = () => {
    setViewIcon(0);
  };

  const handleToggle = () => {
    setCloseNav(!closeNav); // Alternar el valor de closeNav
  };
  return (
    <header
      className={`header__container ${
        closeNav ? 'header__container--active' : ''
      }`}
    >
      <Link
        className="header__logo"
        to="/"
        title="Henry Gil - Home"
        onClick={handleLinkClick}
      >
        HENRY GIL
      </Link>
      <nav className="header__nav">
        <button
          className={`menu__icon ${closeNav ? 'menu__close' : ''}`}
          onClick={handleToggle}
        >
          <span
            style={
              closeNav
                ? {
                    transform: 'rotateZ(45deg)',
                    position: 'absolute',
                  }
                : { transform: 'rotateZ(0)', position: 'relative' }
            }
          ></span>
          <span
            style={
              closeNav
                ? {
                    transform: 'rotateZ(-45deg)',
                    position: 'absolute',
                  }
                : { transform: 'rotateZ(0)', position: 'relative' }
            }
          ></span>
          <span
            style={
              closeNav
                ? { opacity: '0' }
                : { transform: 'rotateZ(0)', position: 'relative' }
            }
          ></span>
        </button>

        <ul
          className={`header__menu ${
            closeNav ? 'header__menu--active' : ''
          }`}
        >
          <span
            className={`header-film-effect ${
              closeNav ? 'header-film-effect--active' : ''
            }`}
          ></span>
          <NavItem
            to="/"
            label={translation === 'spanish' ? 'MENU' : 'HOME'}
            viewIcon={viewIcon}
            onMouseOver={() =>
              handleMouseOver(
                translation === 'spanish' ? 'MENU' : 'HOME'
              )
            }
            onMouseOut={handleMouseOut}
            onClick={handleLinkClick}
          />
          <NavItem
            to="/about"
            label={translation === 'spanish' ? 'SOBRE MI' : 'ABOUT'}
            viewIcon={viewIcon}
            onMouseOver={() =>
              handleMouseOver(
                translation === 'spanish' ? 'SOBRE MI' : 'ABOUT'
              )
            }
            onMouseOut={handleMouseOut}
            onClick={handleLinkClick}
          />
          <NavItem
            to="/services"
            label={
              translation === 'spanish' ? 'SERVICIOS' : 'SERVICES'
            }
            viewIcon={viewIcon}
            onMouseOver={() =>
              handleMouseOver(
                translation === 'spanish' ? 'SERVICIOS' : 'SERVICES'
              )
            }
            onMouseOut={handleMouseOut}
            onClick={handleLinkClick}
          />
          <NavItem
            to="/info"
            label={translation === 'spanish' ? 'INFO' : 'INFO'}
            viewIcon={viewIcon}
            onMouseOver={() =>
              handleMouseOver(
                translation === 'spanish' ? 'INFO' : 'INFO'
              )
            }
            onMouseOut={handleMouseOut}
            onClick={handleLinkClick}
          />
          <li className="header__menu-correo">
            henrygilweddings.com
          </li>
        </ul>
      </nav>
      <Link
        onClick={handleLinkClick}
        to="/lets-connect"
        title="Henry Gil - Home"
        className="header__connect"
      >
        {translation === 'spanish' ? 'CONÉCTAME' : "LET'S CONNECT"}
      </Link>
    </header>
  );
};

const NavItem = ({
  to,
  label,
  viewIcon,
  onMouseOver,
  onMouseOut,
  onClick,
}) => (
  <li
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    onClick={onClick}
  >
    <Link to={to} title={`Henry Gil - ${label}`}>
      {label}
      <i
        className={`bx bx-chevron-right ${
          viewIcon === label ? 'bx-chevron-right--visible' : ''
        }`}
      ></i>
    </Link>
  </li>
);

export default Header;
