import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StoriesSlice from '../components/stories/StoriesSlice';
import './stylesPages/storiesStyle.css';
import NavStories from '../components/stories/NavStories';
import VideosStories from '../components/stories/VideosStories';
import PhotographsStories from '../components/stories/PhotographsStories';
import { useSelector } from 'react-redux';
import ClickTop from '../components/ClickTop';
import { Link } from 'react-router-dom';
import BlogStories from '../components/stories/BlogStories';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

const Stories = () => {
  const [storiesSlices, setStoriesSlices] = useState();
  const [storiesTextSlices, setStoriesTextSlices] = useState(0);
  const [sliceVisible, setSliceVisible] = useState(false);
  const [selectNav, setSelectNav] = useState('all');
  const translation = useSelector((state) => state.translation);
  const [viewSection, setviewSection] = useState(false);
  const [viewSection2, setviewSection2] = useState(false);
  const [viewSection3, setviewSection3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(
        '.storieSlice__container'
      );
      const section2 = document.querySelector(
        '.letsMeetStories__container'
      );
      const section3 = document.querySelector(
        '.LogoStories__contianer'
      );

      if (section) {
        if (isInViewport(section)) {
          setviewSection(true);
        } else {
          setviewSection(false);
        }
      }

      if (section2) {
        if (isInViewport(section2)) {
          setviewSection2(true);
        } else {
          setviewSection2(false);
        }
      }

      if (section3) {
        if (isInViewport(section3)) {
          setviewSection3(true);
        } else {
          setviewSection3(false);
        }
      }
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const topOffset = 50;

      return rect.top + topOffset < windowHeight;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const cardEventElement = document.querySelector(
        '.storieSlice__container'
      );

      if (cardEventElement) {
        const rect = cardEventElement.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const topOffset = 150;

        const isInViewport = rect.top + topOffset < windowHeight;
        setSliceVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/storiesSlice`;
    axios
      .get(url)
      .then((res) => setStoriesSlices(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStoriesTextSlices((prevValue) =>
        prevValue >= storiesSlices?.results - 1 ? 0 : prevValue + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [storiesSlices]);

  // var splide = new Splide('.splide');
  // // splide.mount();
  return (
    <div className="stories__container">
      <section className="stories__start">
        <img
          src="/stories.jpg"
          alt="Wedding Stories"
          style={
            sliceVisible
              ? { transform: 'scale(1.1)' }
              : { transform: 'scale(1)' }
          }
        />
        <h2 className="storiesStart__h2">
          {translation === 'spanish' ? (
            <>
              FOTOGRAFO <br />
              & VIDEOGRAFO <br />
              DE BODAS
            </>
          ) : (
            <>
              PHOTOGRAPHER <br />
              & VIDEOGRAPHER <br />
              FOR WEDDINGS
            </>
          )}
        </h2>
        <Splide className={` splide storieSlice__container `}>
          {storiesSlices?.storiesSlice.map((storieSlice, index) => (
            <StoriesSlice
              key={storieSlice.id}
              index={index}
              storieSlice={storieSlice}
              storiesTextSlices={storiesTextSlices}
              translation={translation}
            />
          ))}
        </Splide>
      </section>
      <NavStories
        setSelectNav={setSelectNav}
        selectNav={selectNav}
        translation={translation}
      />
      {(selectNav === 'videos' || selectNav === 'all') && (
        <VideosStories selectNav={selectNav} />
      )}
      {(selectNav === 'photographs' || selectNav === 'all') && (
        <PhotographsStories selectNav={selectNav} />
      )}
      {(selectNav === 'blog' || selectNav === 'all') && (
        <BlogStories selectNav={selectNav} />
      )}
      <section
        className={`letsMeetStories__container ${
          viewSection2 ? 'viewAnimation' : ''
        }`}
      >
        <div className="film-effect"></div>
        <h4>
          {translation === 'spanish'
            ? 'CONOZCAMONOS'
            : `LET'S GET TO KNOW EACH OTHER`}
        </h4>
        <p>
          {translation === 'spanish'
            ? `Cada pareja y su entorno, preferencias personales y compromisos hacen que cada boda sea incomparable`
            : `Each couple has different environments, personal preferences and commitments and that makes every wedding incomparable`}
        </p>
        <img src="/letsMeet.png" alt="Let's Meet" />

        <Link to="/lets-connect">
          {translation === 'spanish' ? 'CONTACTAME' : `CONTACT ME`}
        </Link>
      </section>
      <section
        className={`LogoStories__contianer ${
          viewSection3 ? 'viewAnimation' : ''
        }`}
      >
        <Link to="/about">
          <img src="./logoHenry.PNG" alt="LOGO OFICIAL HENRY " />
        </Link>
      </section>
      <ClickTop />
    </div>
  );
};

export default Stories;
