import React from 'react';

const ClickTop = () => {
  const clickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <section className="clicktop__container">
      <nav className="clicktop__nav ">
        <a
          href="https://www.facebook.com/henry.gil.10236/"
          alt="Link to Facebook page"
          name="Facebook"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Read more about Seminole tax hike"
        >
          FACEBOOK
        </a>
        <a
          href="https://www.instagram.com/henry_gil/"
          alt="Link to Instagram page"
          name="Instagram"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Read more about Seminole tax hike"
        >
          INSTAGRAM
        </a>
        <a
          href="https://www.youtube.com/channel/UCDuGXnHEiwZoemJh4YgbVDQ"
          alt="Link to YouTube page"
          name="YouTube"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Read more about Seminole tax hike"
        >
          YOUTUBE
        </a>
      </nav>
      <i
        className="bx bx-up-arrow-alt arrow__top"
        onClick={clickTop}
      ></i>
    </section>
  );
};

export default ClickTop;
