import React, { useEffect, useState } from 'react';
import Videos from '../components/home/Videos';
import axios from 'axios';
import './stylesPages/homeStyle.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTranslation } from '../store/slices/translation';

const Home = () => {
  const [videos, setvideos] = useState();
  const [animate, setAnimate] = useState(false);
  const translation = useSelector((state) => state.translation);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/home`;
    axios
      .get(url)
      .then((res) => setvideos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home__container">
      <Link
        className="home__titles"
        to="/stories"
        alt="Link to Stories Page"
      >
        <h1 className={`title__main ${animate ? 'enter' : ''}`}>
          <span></span>{' '}
          {translation === 'spanish' ? 'CONGELAMOS' : 'WE FREEZE '}
        </h1>

        <h2 className={`title__sub ${animate ? 'enter' : ''}`}>
          {translation === 'spanish' ? 'MOMENTOS' : ' MOMENTS'}
        </h2>
        <h2 className={`title__sub ${animate ? 'enter' : ''}`}>
          {translation === 'spanish' ? 'PARA SIEMPRE' : ' FOREVER'}
        </h2>
      </Link>

      <section className="home__videos">
        {videos?.home.map((video) => (
          <Videos key={video.id} video={video} />
        ))}
      </section>

      <nav className="home__nav">
        <ul className="home__ul">
          <li>
            <a
              href="https://www.facebook.com/"
              alt="Link to Facebook page"
              name="Facebook"
              rel="noopener noreferrer"
              target="_blank"
            >
              FACEBOOK
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/"
              alt="Link to Instagram page"
              name="Instagram"
              rel="noopener noreferrer"
              target="_blank"
            >
              INSTAGRAM
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/"
              alt="Link to YouTube page"
              name="YouTube"
              rel="noopener noreferrer"
              target="_blank"
            >
              YOUTUBE
            </a>
          </li>
        </ul>
      </nav>
      <div className="translation__container">
        <button
          id="es"
          aria-label="english"
          onClick={() => dispatch(setTranslation('english'))}
          style={
            translation === 'english'
              ? { color: '#e0dcd0', background: '#5c5443' }
              : {}
          }
        >
          EN
        </button>
        <button
          id="es"
          aria-label="spanish"
          onClick={() => dispatch(setTranslation('spanish'))}
          style={
            translation === 'spanish'
              ? { color: '#e0dcd0', background: '#5c5443' }
              : {}
          }
        >
          ES
        </button>
      </div>
    </div>
  );
};

export default Home;
