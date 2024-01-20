import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';

const Videos = ({ video }) => {
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    setPlaying(false);
    setTimeout(() => {
      setPlaying(true);
    }, 100);
  }, []);

  return (
    <div className="video__container">
      <ReactPlayer
        className="video__reactplayer"
        url={video.homeVideoUrl}
        playing={playing}
        loop={true}
        width="100%"
        height="100%"
        config={{
          vimeo: {
            width: '100vw',
            height: '100vh',
          },
        }}
      />
    </div>
  );
};

export default Videos;
