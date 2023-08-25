import React from 'react';
import './photographyInformationStlye/VIewPhotographyCompleteStyle.css';
const VIewPhotographyComplete = ({ photography, index, indexPhotography }) => {
  return (
    <div style={index === indexPhotography ? { opacity: 1, zIndex: 5 } : { opacity: 0, zIndex: 1 }}>
      {' '}
      <img src={photography.photographsImgUrl} alt="" />
    </div>
  );
};

export default VIewPhotographyComplete;
