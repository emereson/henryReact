import React, { useState, useEffect } from 'react';
import './stylesPages/loadingPage.css';

const LoadingPage = ({ viewloading }) => {
  return (
    <div
      className={`loadingPage__container ${
        viewloading ? 'loadingPage__exit' : ''
      }`}
    >
      <span></span>
      <h1 className="loadingPage__title">HENRY GIL</h1>
      <div className="loadingPage__div"></div>
    </div>
  );
};

export default LoadingPage;
