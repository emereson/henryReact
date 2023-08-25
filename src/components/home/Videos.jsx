import React from 'react';

const Videos = ({ video }) => {
  return (
    <div className="video__container">
      <video autoPlay muted loop className="video__video">
        <source src={video.homeVideoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default Videos;
