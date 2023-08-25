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
      <nav className="clicktop__nav">
        <a
          href="https://www.facebook.com/"
          alt="Link to Facebook page"
          name="Facebook"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="bx bxl-facebook-circle"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          alt="Link to Instagram page"
          name="Instagram"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="bx bxl-instagram-alt"></i>
        </a>
        <a
          href="https://www.pinterest.com/"
          alt="Link to pinterest page"
          name="pinterest"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="bx bxl-pinterest"></i>
        </a>
      </nav>
      <nav className="clicktop__nav clicktop__navTwo">
        <a
          href="https://www.facebook.com/"
          alt="Link to Facebook page"
          name="Facebook"
          rel="noopener noreferrer"
          target="_blank"
        >
          FACEBOOK
        </a>
        <a
          href="https://www.instagram.com/"
          alt="Link to Instagram page"
          name="Instagram"
          rel="noopener noreferrer"
          target="_blank"
        >
          INSTAGRAM
        </a>
        <a
          href="https://www.youtube.com/"
          alt="Link to YouTube page"
          name="YouTube"
          rel="noopener noreferrer"
          target="_blank"
        >
          YOUTUBE
        </a>
      </nav>
      <i class="bx bx-up-arrow-alt arrow__top" onClick={clickTop}></i>
    </section>
  );
};

export default ClickTop;
