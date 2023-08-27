import React, { useEffect, useState } from 'react';
import './stylesPages/InfoStyle.css';
import { Link } from 'react-router-dom';

const Info = ({ translation }) => {
  const [scaleImg, setscaleImg] = useState(0);
  const [loading, setloading] = useState(false);

  setTimeout(() => {
    setloading(true);
  }, 2000);

  return (
    <>
      {!loading ? (
        <div className="loading">
          <img
            className="loading__img "
            src="./grupo2.jpg"
            alt="MY info"
          />
        </div>
      ) : (
        <div className="info__container">
          <Link to="/films" title="Films Henry">
            <span
              onMouseOver={() => setscaleImg(2)}
              onMouseOut={() => setscaleImg(0)}
            ></span>
            <img
              style={scaleImg === 2 ? { scale: '1.2' } : {}}
              src="./grupo2.jpg"
              alt="MY info"
            />
            <h2>FILMS</h2>
            <p>
              {translation === 'spanish'
                ? 'Ofrezco 3 opciones de paquetes con diferencias en la cantidad de horas de cobertura, la cantidad de horas de videógrafos y la duración de los films.'
                : "I offer 3 package options with differences in the amount of coverage hours, the quantity of videographers' hours, and the duration of the films."}
            </p>
          </Link>
          <Link to="/photo" title="Photo Henry">
            <span
              onMouseOver={() => setscaleImg(1)}
              onMouseOut={() => setscaleImg(0)}
            ></span>
            <img
              style={scaleImg === 1 ? { scale: '1.2' } : {}}
              src="./grupo3.jpg"
              alt=""
            />
            <h2>PHOTO</h2>
            <p>
              {translation === 'spanish'
                ? 'Ofrezco 3 opciones de paquetes con diferencias en la cantidad de horas de cobertura y cantidad de fotos.'
                : 'I offer 3 package options with differences in the amount of coverage hours and quantity of photos.'}
            </p>
          </Link>
          <nav className="clicktop__nav info__nav">
            <a
              href="https://www.facebook.com/"
              alt="Link to Facebook page"
              name="Facebook"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              alt="Link to Instagram page"
              name="Instagram"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a
              href="https://www.pinterest.com/"
              alt="Link to pinterest page"
              name="pinterest"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bx bxl-pinterest"></i>
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Info;
