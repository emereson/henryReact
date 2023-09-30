import React, { useEffect, useState } from 'react';
import './stylesPages/filmsStyle.css';
import ClickTop from '../components/ClickTop';
import { Link } from 'react-router-dom';

const Films = ({ translation }) => {
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
          <img
            className="loading__img "
            src="./009.jpg"
            alt="Mis Films"
          />
        </div>
      ) : (
        <div className="films__container">
          <section className="films__section">
            <img src="./009.jpg" alt="Mis Films" />
            <h1>FILMS</h1>
            <Link
              className="films__link films__lin-right"
              to="/photo"
              title="Photo Henry"
            >
              <i className="bx bx-chevron-right"></i>
            </Link>
          </section>
          <section className="films__sectionTwo">
            <ul>
              <li
                className={`films__li1   ${
                  viewSection ? 'viewAnimation' : ''
                }`}
              >
                <h2>FILM 1</h2>
                <p>
                  {translation === 'spanish'
                    ? 'Película que congela tu historia en más de 20 minutos llenos de emoción y emotividad, en los que te reirás y llorarás, ideal para bodas largas, de las que no quieres perderte ningún detalle.'
                    : 'A Film that freezes your story in more than 20 minutes full of emotion and feelings, in which you will laugh and cry, ideal for long weddings, of which you do not want to miss any details.'}
                </p>
                <p>
                  {translation === 'spanish'
                    ? '2 videógrafos, cobertura de hasta 12 horas, incluye un video resumen de 3-4 minutos.'
                    : '2 videographers, coverage up to 12 hours, includes a 3-4 minute video summary.'}
                </p>
              </li>
              <li
                className={` films__li2 ${
                  viewSection2 ? 'viewAnimation' : ''
                }`}
              >
                <h2>FILM 2</h2>
                <p>
                  {translation === 'spanish'
                    ? 'Ideal para parejas a las que les encanta una boda tranquila pero dinámica, resumiré los mejores momentos de su boda en más de 13 minutos, en los que te llevaré por un viaje del que no quieras que se acabe.'
                    : "Ideal for couples who love a calm but dynamic wedding, I will summarize the best moments of your wedding in more than 13 minutes, in which I will take you on a journey that you don't want to end."}
                </p>
                <p>
                  {translation === 'spanish'
                    ? '2 videógrafos, cobertura de hasta 10 horas, incluye un video resumen de 1-2 minutos.'
                    : '2 videographers, coverage up to 10 hours, includes a 1-2 minute video summary.'}
                </p>
              </li>
              <li
                className={` films__li3 ${
                  viewSection3 ? 'viewAnimation' : ''
                }`}
              >
                <h2>FILM 3</h2>
                <p>
                  {translation === 'spanish'
                    ? 'Momentos fugaces, boda emotiva, lágrimas y risas, miles de cosas pasando, todo esto, resumido en un film de 6 a 8 minutos.'
                    : 'Fast fleeting moments, an emotional wedding, tears and laughter, and thousands of things happening. All of this summarized in a 6 to 8 minute film.'}
                </p>
                <p>
                  {translation === 'spanish'
                    ? '1 videógrafo, cobertura de hasta 8 horas, incluye un video resumen de 1 minuto.'
                    : '1 videographer, coverage up to 8 hours, includes a 1-minute summary video.'}
                </p>
              </li>
            </ul>
            <h4
              className={` films__li4 ${
                viewSection4 ? 'viewAnimation' : ''
              }`}
            >
              {translation === 'spanish'
                ? 'Queremos que encuentres en nuestros films pequeñas historias, sonidos y acontecimientos que te traigan recuerdos y te hagan sentir otra vez allí.'
                : 'We want you to find in our films small stories, and sounds and events that bring back memories and make you feel like you are there again.'}
            </h4>
          </section>
          <ClickTop />
        </div>
      )}
    </>
  );
};

export default Films;
