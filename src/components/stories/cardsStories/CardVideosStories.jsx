import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CardVideosStories = ({ videoStorie, index }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [videoVisible, setvideoVisible] = useState(false);
  const navigate = useNavigate();
  const translation = useSelector((state) => state.translation);
  const playerRef = useRef(null);

  useEffect(() => {
    setPlayVideo(true);
    setTimeout(() => {
      setPlayVideo(false);
    }, 100);
  }, []);

  const handlePlayVideo = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(40, 'seconds'); // Busca el segundo 40
    }
  };

  const toggleVideoPlay = () => {
    setPlayVideo(true);
    handlePlayVideo();
  };

  const toggleVideoPause = () => {
    setPlayVideo(false);
  };

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

  const filterCategory = () => {
    const filteredVideos = videoStorie.dataVideos.filter(
      (dataVideo) =>
        dataVideo.title === 'CATEGORÍA' ||
        dataVideo.title === 'CATEGORY'
    );
    return filteredVideos;
  };

  const filteredVideos = filterCategory();

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
        url={videoStorie?.previewvideourl}
        width="100%"
        height="85%"
        controls={false}
        ref={playerRef}
        loop={true}
      />

      <img
        className="cardVideosStories__img"
        style={playVideo ? { opacity: '0' } : { opacity: '1' }}
        src={videoStorie.videosimgUrl}
        alt={videoStorie.title}
        loading="lazy"
      />
      <div className="cardVideosStories__dataContainer">
        {filteredVideos.map((dataVideo) => (
          <section key={dataVideo.id}>
            <p>
              {translation === 'spanish'
                ? dataVideo.description
                : dataVideo.descriptionEng}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CardVideosStories;
