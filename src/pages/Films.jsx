import React from 'react';
import './stylesPages/filmsStyle.css';
import ClickTop from '../components/ClickTop';

const Films = ({ translation }) => {
  return (
    <div className="films__container">
      <section className="films__section">
        <img src="./grupo2.jpg" alt="" />
        <h1>FILMS</h1>
      </section>
      <section className="films__sectionTwo">
        <ul>
          <li>
            <h2>FILM 1</h2>
            <p>
              {translation === 'spanish'
                ? 'Película que congela tu historia en más de 20 minutos llenos de emoción y emotividad, en los que te reirás y llorarás, ideal para bodas largas, de las que no quieres perderte ningún detalle.'
                : "A film that captures your story in over 20 minutes filled with excitement and emotion, where you'll laugh and cry – ideal for long weddings, the kind where you don't want to miss any detail."}
            </p>
            <p>
              {translation === 'spanish'
                ? '2 videógrafos, cobertura de hasta 12 horas, incluye un video resumen de 2-3 minutos.'
                : '2 videographers, coverage of up to 12 hours, includes a 2-3 minute highlight video.'}
            </p>
          </li>
          <li>
            <h2>FILM 2</h2>
            <p>
              {translation === 'spanish'
                ? 'Ideal para parejas a las que les encanta una boda tranquila pero dinámica, resumiendo los mejores momentos de su boda en más de 13 minutos, en los que te llevaré por un viaje del que no quieras que se acabe.'
                : "Ideal for couples who love a calm yet dynamic wedding, summarizing the best moments of their wedding in over 13 minutes, taking you on a journey you won't want to end."}
            </p>
            <p>
              {translation === 'spanish'
                ? '2 videógrafos, cobertura de hasta 10 horas, incluye un video resumen de 1-2 minutos.'
                : '2 videographers, coverage of up to 10 hours, includes a 1-2 minute highlight video.'}
            </p>
          </li>
          <li>
            <h2>FILM 3</h2>
            <p>
              {translation === 'spanish'
                ? 'Momentos fugaces, boda emotiva, lágrimas y risas, miles de cosas pasando, todo esto, resumido en un film de 6 a 8 minutos.'
                : 'Fleeting moments, emotional wedding, tears and laughter, thousands of things happening, all of this, summarized in a 6 to 8-minute film.'}
            </p>
            <p>
              {translation === 'spanish'
                ? '1 videógrafo, cobertura de hasta 8 horas, incluye un video resumen de 1 minuto.'
                : '1 videographer, coverage of up to 8 hours, includes a 1-minute highlight video.'}
            </p>
          </li>
        </ul>
        <h4>
          {translation === 'spanish'
            ? 'Queremos que encuentres en nuestros films pequeñas historias, sonidos y acontecimientos que te traigan recuerdos y te hagan sentir otra vez allí.'
            : 'We want you to find in our films small stories, sounds, and events that bring you memories and make you feel there again.'}
        </h4>
      </section>
      <ClickTop />
    </div>
  );
};

export default Films;
