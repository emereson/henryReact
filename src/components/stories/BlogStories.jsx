import React, { useEffect, useState } from 'react';
import './storiesStyle/blogStories.css';

const BlogStories = () => {
  const [photoVisible, setPhotoVisible] = useState(false);
  const [photoVisible2, setPhotoVisible2] = useState(false);
  const [photoVisible3, setPhotoVisible3] = useState(false);
  const [photoVisible4, setPhotoVisible4] = useState(false);
  const [photoVisible5, setPhotoVisible5] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cardEventElement1 =
        document.getElementById('idPhotoStories1');
      const cardEventElement2 =
        document.getElementById('idPhotoStories2');
      const cardEventElement3 =
        document.getElementById('idPhotoStories3');
      const cardEventElement4 =
        document.getElementById('idPhotoStories4');
      const cardEventElement5 =
        document.getElementById('idPhotoStories5');

      if (cardEventElement1 && isInViewport(cardEventElement1)) {
        setPhotoVisible('idPhotoStories1');
      }

      if (cardEventElement2 && isInViewport(cardEventElement2)) {
        setPhotoVisible2(true);
      }

      if (cardEventElement3 && isInViewport(cardEventElement3)) {
        setPhotoVisible3(true);
      }

      if (cardEventElement4 && isInViewport(cardEventElement4)) {
        setPhotoVisible4(true);
      }
      if (cardEventElement5 && isInViewport(cardEventElement5)) {
        setPhotoVisible5(true);
      }
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const topOffset = -300;

      return rect.top + topOffset < windowHeight;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="blogStories__contianer ">
      <div className="film-effect1"></div>
      <img
        src="./blog-1-imagen-1.jpg"
        alt="blog-1-imagen-1"
        id={`idPhotoStories5`}
        style={
          photoVisible5
            ? {
                opacity: '1',
                transform: 'translateY(0)',
                transition: '1s',
              }
            : {
                opacity: '0',
                transform: 'translateY(100%)',
              }
        }
      />
      <article>
        <section
          className="blogStories__sectionOne"
          id={`idPhotoStories1`}
          style={
            photoVisible
              ? {
                  opacity: '1',
                  transform: 'translateY(0)',
                  transition: '1s',
                }
              : {
                  opacity: '0',
                  transform: 'translateY(100%)',
                }
          }
        >
          <h2>
            BODA EN SAN PEDRO SACATEPEQUEZ, SAN MARCOS, GUATEMALA
          </h2>
          <p>
            Me sentí muy honrado de viajar a San Marcos para filmar
            esta boda. Gerson y Sharon son una pareja de fotógrafos
            talentosos a quienes admiraba desde hacía mucho tiempo.
          </p>
          <p>
            Me sentí muy emocionado pero a la vez nervioso por el reto
            al que me enfrentaba cuando me contactaron. Quería elegir
            las mejores palabras para ser su videógrafo. Creí que me
            sentiría súper nervioso en el día de la boda, pero nada
            más alejado de la realidad. Son una pareja increíble, me
            trataron como uno de los suyos y me hicieron sentir como
            en casa. Acabé disfrutando mucho esta boda como siempre,
            el viaje y todas las cosas que pasaron ese día. Me eriza
            la piel solo de recordarlo. Al finalizar el día había un
            arcoíris escondiéndose entre las montañas, y bajo ese
            cielo, el matrimonio de ellos dos, abrazándose y riendo
            sin parar. Definitivamente, había algo especial entre
            ellos dos. No tengo palabras.
          </p>
          <p>
            A Gerson y Sharon, gracias por confiar en mí para ir a San
            Marcos a filmar el gran día. Gracias por confiarme sus
            recuerdos. Solo puedo esperar que disfruten esto tanto
            como nosotros lo hicimos grabándolo y editándolo.
          </p>
        </section>
        <section
          className="blogStories__sectionTwo"
          id={`idPhotoStories2`}
          style={
            photoVisible2
              ? {
                  opacity: '1',
                  transform: 'translateY(0)',
                  transition: '1s',
                }
              : {
                  opacity: '0',
                  transform: 'translateY(100%)',
                }
          }
        >
          <h3>TESTIMONIAL</h3>
          <img
            src="./iconos-calificacion.png"
            alt="iconos-calificacion"
          />
          <p>
            Gracias por todo Henry. Se lo acabamos de enseñar a la
            abuelita de Gerson y se puso nostálgica, esos son los
            efectos que uno siempre quiere al volver a ver estos
            recuerdos, que tienen un valor incalculable. Gracias por
            eso.
          </p>
          <p>
            Gracias infinitas a Henry, que documentó nuestro gran día
            con tanta profesionalidad, siendo tan amable y atento a
            nosotros ese día y superando nuestras expectativas.
            ¡Gracias Henry!
          </p>
          <span>Gerson & Sharon.</span>
        </section>
      </article>
      <img
        src="./blog-1-imagen-2.jpg"
        alt="blog-1-imagen-2"
        id={`idPhotoStories3`}
        style={
          photoVisible3
            ? {
                opacity: '1',
                transform: 'translateY(0)',
                transition: '1s',
              }
            : {
                opacity: '0',
                transform: 'translateY(100%)',
              }
        }
      />
      <img
        src="./blog-1-imagen-3.jpg"
        alt="blog-1-imagen-3"
        id={`idPhotoStories4`}
        style={
          photoVisible4
            ? {
                opacity: '1',
                transform: 'translateY(0)',
                transition: '1s',
              }
            : {
                opacity: '0',
                transform: 'translateY(100%)',
              }
        }
      />
    </div>
  );
};

export default BlogStories;
