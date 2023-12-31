import React, { useEffect, useState } from 'react';
import ClickTop from '../components/ClickTop';
import './stylesPages/filmsStyle.css';
import { Link } from 'react-router-dom';

const Photo = ({ translation }) => {
  const [viewSection, setviewSection] = useState(false);
  const [viewSection2, setviewSection2] = useState(false);
  const [viewSection3, setviewSection3] = useState(false);
  const [viewSection4, setviewSection4] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.films__li1');
      const section2 = document.querySelector('.films__li2');
      const section3 = document.querySelector('.films__li3');
      const section4 = document.querySelector('.films__li4');

      if (section) {
        if (isInViewport(section)) {
          setviewSection(true);
        } else {
          setviewSection(false);
        }
      }

      if (section2) {
        if (isInViewport(section2)) {
          setviewSection2(true);
        } else {
          setviewSection2(false);
        }
      }

      if (section3) {
        if (isInViewport(section3)) {
          setviewSection3(true);
        } else {
          setviewSection3(false);
        }
      }
      if (section4) {
        if (isInViewport(section4)) {
          setviewSection4(true);
        } else {
          setviewSection4(false);
        }
      }
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const topOffset = 50;

      return rect.top + topOffset < windowHeight;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  setTimeout(() => {
    setloading(true);
  }, 2000);

  return (
    <>
      {!loading ? (
        <div className="loading">
          <img className="loading__img " src="./10.jpg" alt="Photo" />
        </div>
      ) : (
        <div className="films__container">
          <section className="films__section">
            <img src="./10.jpg" alt="Photo" />
            <h1>PHOTO</h1>
            <Link
              className="films__link"
              to="/films"
              title="Films Henry"
            >
              <i className="bx bx-chevron-left"></i>
            </Link>
          </section>
          <section className="films__sectionTwo">
            <ul>
              <li
                className={` films__li1 ${
                  viewSection ? 'viewAnimation' : ''
                }`}
              >
                <h2>PHOTO 1</h2>
                <p>
                  {translation === 'spanish'
                    ? 'Para parejas amantes de las fotos, este paquete está compuesto por un lote de imágenes editadas una a una, apreciando la belleza en cada detalle del gran día.'
                    : 'For couples who love photos, this package is made up of a batch of images edited one by one, appreciating the beauty in every detail of the big day.'}
                </p>
                <p>
                  {translation === 'spanish'
                    ? '2 fotógrafos, cobertura de hasta 12 horas. 900 a 1000+ fotos.'
                    : '2 photographers, coverage of up to 12 hours. 900 to 1000+ photos.'}
                </p>
              </li>
              <li
                className={` films__li2 ${
                  viewSection2 ? 'viewAnimation' : ''
                }`}
              >
                <h2>PHOTO 2</h2>
                <p>
                  {translation === 'spanish'
                    ? 'Pensado para aquellos que les fascina las fotos pero que su boda no es tan larga. Resumiré los mejores momentos de su boda en fotos inolvidables.'
                    : 'Designed for those who are fascinated by photos but whose wedding is not that long. I will summarize the best moments of your wedding in unforgettable photos.'}
                </p>
                <p>
                  {translation === 'spanish'
                    ? '2 fotógrafos, cobertura de hasta 10 horas. 700 a 800 fotos.'
                    : '2 photographers, coverage of up to 10 hours. 700 to 800 photos.'}
                </p>
              </li>
              <li
                className={` films__li3 ${
                  viewSection3 ? 'viewAnimation' : ''
                }`}
              >
                <h2>PHOTO 3</h2>
                <p>
                  {translation === 'spanish'
                    ? 'Este paquete de fotos está diseñado para una boda pequeña, al lado de tus seres queridos y personas super importantes en tu vida.'
                    : 'This photo package is designed for a small wedding, with your loved ones and those important people in your life.'}
                </p>
                <p>
                  {translation === 'spanish'
                    ? '1 fotógrafo, cobertura de hasta 8 horas. 300 a 500 fotos.'
                    : '1 photographer, coverage of up to 8 hours. 300 to 500 photos.'}
                </p>
              </li>
            </ul>
            <h4
              className={` films__li4 ${
                viewSection4 ? 'viewAnimation' : ''
              }`}
            >
              {translation === 'spanish'
                ? 'Una vez que termine su boda y mire sus fotos, verás lo hermoso que fue el día, cuanto amor compartiste y lo alegre que fue.'
                : 'Once your wedding day is over and you look at your photos, you will see how beautiful the day was, how much love you shared, and how joyful it all was.'}
            </h4>
          </section>
          <ClickTop />
        </div>
      )}
    </>
  );
};

export default Photo;
