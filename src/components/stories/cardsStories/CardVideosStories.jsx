import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CardVideosStories = ({ videoStorie, index }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [sliderDataVideo, setsliderDataVideo] = useState(0);
  const [videoVisible, setvideoVisible] = useState(false);
  const navigate = useNavigate();
  const translation = useSelector((state) => state.translation);

  const toggleVideoPlay = () => {
    setPlayVideo(true);
  };

  const toggleVideoPause = () => {
    setPlayVideo(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setsliderDataVideo(
        (prevSlider) =>
          (prevSlider + 1) % videoStorie.dataVideos.length
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [videoStorie.dataVideos.length]);

  useEffect(() => {
    const handleScroll = () => {
      const cardEventElement = document.getElementById(
        `idVideoStories${index}`
      );

      if (cardEventElement) {
        setvideoVisible(isInViewport(cardEventElement));
      }
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const topOffset = -400;

      return rect.top + topOffset < windowHeight;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [index]);

  const clickInformation = () => {
    navigate(`/videoInformation/${videoStorie.id}`);
  };

  return (
    <div
      className="cardVideosStories__container"
      id={`idVideoStories${index}`}
      style={
        videoVisible
          ? {
              opacity: '1',
              transform: 'translateY(0)',
              transition: `${index % 2 === 0 ? '2s' : '3s'}`,
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
        onMouseEnter={toggleVideoPlay}
        onMouseLeave={toggleVideoPause}
      ></span>
      <h3
        className="cardVideosStories__h3"
        style={playVideo ? { opacity: '1' } : { opacity: '0' }}
      >
        {translation === 'spanish'
          ? videoStorie.title
          : videoStorie.titleEng}
      </h3>

      <ReactPlayer
        className="cardVideosStories__video"
        playing={playVideo}
        volume={0}
        url={videoStorie?.videoUrl}
        width="100%"
        height="85%"
      />
      <img
        className="cardVideosStories__img"
        style={playVideo ? { opacity: '0' } : { opacity: '1' }}
        src={videoStorie.videosimgUrl}
        alt={videoStorie.title}
        loading="lazy"
      />
      <div className="cardVideosStories__dataContainer">
        {videoStorie.dataVideos.map((dataVideo, idx) => (
          <section
            key={dataVideo.id}
            style={
              idx === sliderDataVideo
                ? { transform: 'translateY(0)', opacity: '1' }
                : { transform: 'translateY(100%)', opacity: '0' }
            }
          >
            {dataVideo.link ? (
              <a href={dataVideo.link}>
                {translation === 'spanish'
                  ? dataVideo.description
                  : dataVideo.descriptionEng}
              </a>
            ) : (
              <p>
                {translation === 'spanish'
                  ? dataVideo.description
                  : dataVideo.descriptionEng}
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default CardVideosStories;
