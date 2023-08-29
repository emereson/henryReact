import React, { useRef } from 'react';

const Videos = ({ video }) => {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    videoRef.current.play();
  };
  return (
    <div className="video__container">
      <video
        autoPlay
        muted
        loop
        onEnded={handleVideoEnded}
        ref={videoRef}
        className="video__video"
      >
        <source src={video.homeVideoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default Videos;
