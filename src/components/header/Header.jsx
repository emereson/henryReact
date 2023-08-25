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
  return (
    <header
      className={`header__container ${
        closeNav ? 'header__container--active' : ''
      }`}
    >
      <Link className="header__logo" to="/" title="Henry Gil - Home">
        HENRY GIL
      </Link>
      <nav className="header__nav">
        {!closeNav ? (
          <button
            className="menu__icon"
            onClick={() => setCloseNav(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        ) : (
          <button
            className="menu__close"
            onClick={() => setCloseNav(false)}
          >
            X
          </button>
        )}
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
