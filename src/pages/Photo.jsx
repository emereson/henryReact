import React from 'react';
import ClickTop from '../components/ClickTop';

const Photo = ({ translation }) => {
  return (
    <div className="films__container">
      <section className="films__section">
        <img src="./grupo3.jpg" alt="" />
        <h1>PHOTO</h1>
      </section>
      <section className="films__sectionTwo">
        <ul>
          <li>
            <h2>PHOTO 1</h2>
            <p>
              {translation === 'spanish'
                ? 'Para parejas que les encantan las fotos, llenas de emoción y emotividad, en las que te reirás y llorarás, ideal para bodas largas, de las que no quieres perderte ningún detalle.'
                : "For couples who love photos, full of excitement and emotion, where you'll laugh and cry, ideal for long weddings, ones you don't want to miss any detail of."}
            </p>
            <p>
              {translation === 'spanish'
                ? '2 fotógrafos, cobertura de hasta 12 horas. 900 a 1000+ fotos.'
                : '2 photographers, coverage of up to 12 hours. 900 to 1000+ photos.'}
            </p>
          </li>
          <li>
            <h2>PHOTO 2</h2>
            <p>
              {translation === 'spanish'
                ? 'Ideal para parejas que les encanta una boda tranquila pero dinámica, resumiendo los mejores momentos de su boda en más de 13 minutos, en los que te llevaré por un viaje del que no querrás que se acabe.'
                : "Ideal for couples who love a calm yet dynamic wedding, summarizing the best moments of their wedding in over 13 minutes, taking you on a journey you won't want to end."}
            </p>
            <p>
              {translation === 'spanish'
                ? '2 fotógrafos, cobertura de hasta 10 horas. 700 a 800 fotos.'
                : '2 photographers, coverage of up to 10 hours. 700 to 800 photos.'}
            </p>
          </li>
          <li>
            <h2>PHOTO 3</h2>
            <p>
              {translation === 'spanish'
                ? 'Momentos fugaces, boda emotiva, lágrimas y risas, miles de cosas pasando, todo esto, resumido en un film de 6 a 8 minutos.'
                : 'Fleeting moments, emotional wedding, tears and laughter, thousands of things happening, all of this, summarized in a film of 6 to 8 minutes.'}
            </p>
            <p>
              {translation === 'spanish'
                ? '2 fotógrafos, cobertura de hasta 8 horas. 300 a 500 fotos.'
                : '2 photographers, coverage of up to 8 hours. 300 to 500 photos.'}
            </p>
          </li>
        </ul>
        <h4>
          {translation === 'spanish'
            ? 'Una vez que termine su boda y mires sus fotos, verás lo hermoso que fue el día, cuánto amor compartiste y lo alegre que fue.'
            : 'Once your wedding is over and you look at your photos, you will see how beautiful the day was, how much love you shared, and how joyful it was.'}
        </h4>
      </section>
      <ClickTop />
    </div>
  );
};

export default Photo;
