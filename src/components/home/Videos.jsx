import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const Videos = ({ video }) => {
  const [playing, setPlaying] = useState(true);

  const handleVideoEnded = () => {
    setPlaying(false); // Pausa el video
    setTimeout(() => {
      setPlaying(true); // Reinicia el video después de un pequeño retraso
    }, 100);
  };

  return (
    <div className="video__container">
      <ReactPlayer
        url={video.homeVideoUrl}
        width="100%"
        height="100%"
        playing={playing}
        loop={true}
        onEnded={handleVideoEnded}
      />
    </div>
  );
};

export default Videos;
