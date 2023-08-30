import React, { useEffect, useState } from 'react';
import './stylesPages/aboutmeStyle.css';
import ClickTop from '../components/ClickTop';

const AboutMe = ({ translation }) => {
  const [viewSection, setviewSection] = useState(false);
  const [viewSection2, setviewSection2] = useState(false);
  const [viewSection3, setviewSection3] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.aboutme__sectionTwo');
      const section2 = document.querySelector(
        '.aboutme__sectionThree'
      );
      const section3 = document.querySelector(
        '.aboutme__sectionFour'
      );

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
  }, 3000);

  return (
    <>
      {!loading ? (
        <div className="loading">
          <img
            className="loading__img "
            src="./Yomero.jpg"
            alt="Henry's Profile"
          />
        </div>
      ) : (
        <div className="aboutme__container">
          <section className="aboutme__section">
            <img src="./Yomero.jpg" alt="Henry's Profile" />
            <div className="aboutme__content">
              <h1 className="aboutme__title">
                {translation === 'spanish' ? 'SOBRE MI' : 'ABOUT ME'}
              </h1>
              <div className="aboutme__biography">
                <img src="./MAT07468.jpg" alt="Coffee" />
                <div className="aboutme__paragraph">
                  <p>
                    {translation === 'spanish' ? (
                      <>
                        Mi nombre es Henry, tengo 23 años. Soy
                        guatemalteco y me fascina el café. Me dedico a
                        fotografiar y documentar videos de boda. Busco
                        realizar un relato documental auténtico y
                        cinematográfico de la pareja, de las personas
                        y situaciones que los rodean. Valoro la
                        autenticidad y creo que los mejores videos
                        provienen simplemente de ser uno mismo.
                      </>
                    ) : (
                      <>
                        My name is Henry, and I'm 23 years old. I'm
                        Guatemalan, and I'm passionate about coffee. I
                        specialize in photographing and documenting
                        wedding videos. I aim to create an authentic
                        and cinematic documentary narrative of the
                        couple, the people, and the situations
                        surrounding them. I value authenticity and
                        believe that the best videos come from simply
                        being oneself.
                      </>
                    )}
                  </p>
                  <p>
                    {translation === 'spanish' ? (
                      <>
                        Soy muy inquieto y esa inquietud fue lo que me
                        llevó a comprar una cámara a los 19 años. No
                        tardé en darme cuenta de que quería dedicarle
                        todo mi tiempo. Cada vez que grabo a alguien,
                        lo tomo como una oportunidad para escuchar,
                        preguntar y aprender. En eso se basa mi
                        búsqueda audiovisual: capturar la esencia y el
                        mensaje que las personas me regalan.
                      </>
                    ) : (
                      <>
                        I'm very curious by nature, and it was this
                        curiosity that led me to buy a camera at the
                        age of 19. It didn't take long for me to
                        realize that I wanted to dedicate all my time
                        to it. Every time I record someone, I see it
                        as an opportunity to listen, ask questions,
                        and learn. That's the foundation of my
                        audiovisual journey: capturing the essence and
                        message that people share with me.
                      </>
                    )}
                  </p>
                  <p>
                    {translation === 'spanish' ? (
                      <>
                        Estoy muy contento de trabajar en lo que me
                        apasiona. Tengo la suerte de poder hacerlo.
                      </>
                    ) : (
                      <>
                        I'm thrilled to work in what I'm passionate
                        about. I'm fortunate to be able to do so.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className={`aboutme__sectionTwo ${
              viewSection ? 'viewAnimation' : ''
            }`}
          >
            <img src="./36Angel_Lesly2022.jpg" alt="" />
            <h3>
              {translation === 'spanish'
                ? 'Dedicarme a esto fue una de las mejores decisiones que he tomado.'
                : 'The decision to dedicate myself to this was one of the best decisions I have made.'}
            </h3>
          </section>
          <section
            className={`aboutme__sectionThree ${
              viewSection2 ? 'viewAnimation' : ''
            }`}
          >
            <h2>
              {translation === 'spanish'
                ? 'ESTOY EN INSTAGRAM'
                : `I'M ON INSTAGRAM`}
            </h2>
            <p>@henry_gil</p>
          </section>
          <section
            className={`aboutme__sectionFour ${
              viewSection3 ? 'viewAnimation' : ''
            }`}
          >
            <img src="./295.png" alt="fotos de bodas" />
            <img src="./capa6.png" alt="fotos de bodas" />
            <img src="./278.png" alt="fotos de bodas" />
            <img src="./0801_2.jpg" alt="fotos de bodas" />
          </section>
          <ClickTop />
        </div>
      )}
    </>
  );
};

export default AboutMe;
