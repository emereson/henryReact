import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CardBlogStories = ({ blog, index }) => {
  const [playSlider, setPlaySlider] = useState(false);
  const [photoVisible, setphotoVisible] = useState(false);
  const navigate = useNavigate();
  const translation = useSelector((state) => state.translation);

  const playSliderOver = async () => {
    setPlaySlider(true);
  };

  const playSliderOut = async () => {
    setPlaySlider(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const cardEventElement = document.getElementById(
        `idBlogStories${index}`
      );

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
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const topOffset = -300;

      return rect.top + topOffset < windowHeight;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const clickInformation = () => {
    navigate(`/blogInformation/${blog.id}`);
  };

  return (
    <div
      className="cardPhotographyStories__container"
      id={`idBlogStories${index}`}
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
        {translation === 'spanish'
          ? blog.couplesName
          : blog.couplesName}
      </h3>
      <img
        className="cardPhotographyStories__frontPage"
        src={blog.blogImg1}
        alt={blog.blogImg1}
      />
      <div className="cardVideosStories__dataContainer">
        <p>Blog</p>
      </div>
    </div>
  );
};

export default CardBlogStories;
