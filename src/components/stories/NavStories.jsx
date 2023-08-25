import React from 'react';

const NavStories = ({ setSelectNav, selectNav, translation }) => {
  return (
    <nav className="navStories__contianer">
      <ul>
        <li
          onClick={() => setSelectNav('all')}
          className={selectNav === 'all' ? 'navStories__active' : ''}
        >
          {translation === 'spanish' ? 'TODO' : 'ALL'}
        </li>
        <li
          className={selectNav === 'videos' ? 'navStories__active' : ''}
          onClick={() => setSelectNav('videos')}
        >
          {translation === 'spanish' ? 'VIDEOS' : 'VIDEOS'}
        </li>
        <li
          className={selectNav === 'photographs' ? 'navStories__active' : ''}
          onClick={() => setSelectNav('photographs')}
        >
          {translation === 'spanish' ? 'FOTOGRAFIA' : 'PHOTOGRAPHY'}
        </li>
        <li
          className={selectNav === 'collaborations' ? 'navStories__active' : ''}
          onClick={() => setSelectNav('collaborations')}
        >
          {translation === 'spanish' ? 'COLABORACIONES' : 'COLLABORATIONS'}
        </li>
      </ul>
    </nav>
  );
};

export default NavStories;
