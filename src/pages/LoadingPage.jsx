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
      <img src="./logoHenry.PNG" alt="LOGO OFICIAL HENRY " />
    </div>
  );
};

export default LoadingPage;
