import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StoriesSlice from '../components/stories/StoriesSlice';
import './stylesPages/storiesStyle.css';
import NavStories from '../components/stories/NavStories';
import VideosStories from '../components/stories/VideosStories';
import PhotographsStories from '../components/stories/PhotographsStories';
import { useSelector } from 'react-redux';
import ClickTop from '../components/ClickTop';

const Stories = () => {
  const [storiesSlices, setStoriesSlices] = useState();
  const [storiesTextSlices, setStoriesTextSlices] = useState(0);
  const [sliceVisible, setSliceVisible] = useState(false);
  const [selectNav, setSelectNav] = useState('all');
  const translation = useSelector((state) => state.translation);

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
    }, 2500);
    return () => clearInterval(interval);
  }, [storiesSlices]);

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
              FOTÓGRAFO <br />
              Y VIDEOGRABADOR <br />
              PARA BODAS
            </>
          ) : (
            <>
              PHOTOGRAPHER <br />
              E VIDEOGRAPHER <br />
              FOR WEDDINGS
            </>
          )}
        </h2>
        <div className="storieSlice__container">
          {storiesSlices?.storiesSlice.map((storieSlice, index) => (
            <StoriesSlice
              key={storieSlice.id}
              index={index}
              storieSlice={storieSlice}
              storiesTextSlices={storiesTextSlices}
              translation={translation}
            />
          ))}
          <div className="storieSlice__counter" id="Slice__counter">
            {storiesSlices?.storiesSlice.map(
              (couterSlider, index) => (
                <span
                  style={
                    storiesTextSlices === index
                      ? { background: 'var(--body-white)' }
                      : { background: '' }
                  }
                  key={couterSlider.id}
                ></span>
              )
            )}
          </div>
        </div>
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
      <section className="letsMeetStories__container">
        <h4>
          {translation === 'spanish' ? 'CONOZCAMONOS' : `LET'S MEET`}
        </h4>
        <p>
          {translation === 'spanish'
            ? `Cada pareja y su entorno, preferencias personales y compromiso hacen que cada boda sea un proyecto inconparable`
            : `Each couple and their environment, personal preferences and commitment make each wedding an unparalleled project`}
        </p>
        <img src="/letsMeet.png" alt="Let's Meet" />
        <h4>
          {translation === 'spanish' ? 'CONTACTAME' : `CONTACT ME`}
        </h4>
      </section>
      <section className="LogoStories__contianer">
        <h2>HENRY GIL</h2>
      </section>
      <ClickTop />
    </div>
  );
};

export default Stories;
