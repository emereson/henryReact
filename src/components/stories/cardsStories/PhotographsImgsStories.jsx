import React from 'react';

const PhotographsImgsStories = ({ photographyImg, sliderPhotograpy, playSlider, index }) => {
  return (
    <img
      className="photographsImgsStories"
      src={photographyImg.photographsImgUrl}
      alt=""
      style={sliderPhotograpy === index && playSlider ? { opacity: '1' } : { opacity: '0' }}
    />
  );
};

export default PhotographsImgsStories;
