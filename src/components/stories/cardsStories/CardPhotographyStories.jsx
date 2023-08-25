import React, { useEffect, useState } from 'react';
import PhotographsImgsStories from './PhotographsImgsStories';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CardPhotographyStories = ({ photography, index }) => {
  const [sliderPhotograpy, setsliderPhotograpy] = useState(0);
  const [playSlider, setPlaySlider] = useState(false);
  const [dataSlider, setdataSlider] = useState(0);
  const [photoVisible, setphotoVisible] = useState(false);
  const navigate = useNavigate();
  const translation = useSelector((state) => state.translation);

  if (photography.photographsImgs.length > 0 && playSlider) {
    setTimeout(function () {
      setsliderPhotograpy(sliderPhotograpy + 1);
      if (sliderPhotograpy > 4) {
        setsliderPhotograpy(0);
      }
    }, 2000);
  }

  if (photography.dataPhotographs.length > 0) {
    setTimeout(function () {
      setdataSlider(dataSlider + 1);
      if (dataSlider > photography.dataPhotographs.length - 2) {
        setdataSlider(0);
      }
    }, 4000);
  }

  const playSliderOver = async () => {
    setPlaySlider(true);
  };

  const playSliderOut = async () => {
    setPlaySlider(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const cardEventElement = document.getElementById(`idPhotoStories${index}`);

      if (cardEventElement) {
        if (isInViewport(cardEventElement)) {
          setphotoVisible(true);
        } else {
          setphotoVisible(false);
        }
      }
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const topOffset = -300;

      return rect.top + topOffset < windowHeight;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const clickInformation = () => {
    navigate(`/photograpyInfomation/${photography.id}`);
  };

  return (
    <div
      className="cardPhotographyStories__container"
      id={`idPhotoStories${index}`}
      style={
        photoVisible
          ? {
              opacity: '1',
              transform: 'translateY(0)',
              transition: ` ${index % 2 === 0 ? '2s' : '3s'}`,
              ...(index === 4 || index === 9
                ? { width: '100%', height: '55vw' }
                : { width: '50%' }),
            }
          : {
              opacity: '0',
              transform: 'translateY(100%)',
            }
      }
    >
      <span
        onClick={clickInformation}
        onMouseOver={playSliderOver}
        onMouseOut={playSliderOut}
      ></span>
      <h3 style={!playSlider ? { opacity: '0' } : { opacity: '1' }}>
        {translation === 'spanish' ? photography.title : photography.titleEng}
      </h3>
      <img
        className="cardPhotographyStories__frontPage"
        src={photography.photographsFrontPage}
        alt={photography.photographsFrontPage}
      />
      {photography.photographsImgs.slice(0, 5).map((photographyImg, index) => (
        <PhotographsImgsStories
          key={photographyImg.id}
          photographyImg={photographyImg}
          index={index}
          sliderPhotograpy={sliderPhotograpy}
          playSlider={playSlider}
        />
      ))}
      <div className="cardVideosStories__dataContainer">
        {photography.dataPhotographs.map((dataPhotography, index) => (
          <section
            key={dataPhotography.id}
            style={
              index === dataSlider
                ? { transform: 'translateY(0)', opacity: '1' }
                : { transform: 'translateY(100%)', opacity: '0' }
            }
          >
            {dataPhotography.link ? (
              <a href={dataPhotography.link}>
                {translation === 'spanish'
                  ? dataPhotography.description
                  : dataPhotography.descriptionEng}
              </a>
            ) : (
              <p>
                {translation === 'spanish'
                  ? dataPhotography.description
                  : dataPhotography.descriptionEng}
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default CardPhotographyStories;
