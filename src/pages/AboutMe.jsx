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
                <img src="./002.jpg" alt="Coffee" />
                <div className="aboutme__paragraph">
                  <p>
                    {translation === 'spanish' ? (
                      <>
                        Hola, soy Henry, un guatemalteco de 23 años
                        que le encanta trabajar con personas
                        increíbles. Me dedico a fotografiar y
                        documentar videos de boda. Soy alguien muy
                        pasional, inquieto y nervioso, esa inquietud
                        fue lo que me llevó a comprar una cámara a los
                        19 años. No tardé en darme cuenta de que
                        quería dedicarle todo mi tiempo, esa cámara me
                        trajo hasta aquí y por si fuera poco, descubrí
                        que trabajar puede ser algo muy emocionante.
                      </>
                    ) : (
                      <>
                        Hi, I'm Henry, a 23-year-old Guatemalan who
                        loves working with amazing people. I dedicate
                        myself to photographing weddings and
                        documenting wedding videos. I am someone very
                        passionate, restless and nervous, that
                        restlessness was what led me to buy a camera
                        at 19 years old. It didn't take me long to
                        realize that I wanted to dedicate all my time
                        to that passion of mine. That camera brought
                        me to where I am now. I also discovered that
                        working can be something very exciting.
                      </>
                    )}
                  </p>
                  <p>
                    {translation === 'spanish' ? (
                      <>
                        Mi búsqueda audiovisual se basa en capturar la
                        esencia y el mensaje que las personas me
                        regalan, busco realizar un relato documental
                        auténtico y cinematográfico de la pareja, de
                        las personas y situaciones que los rodean.
                        Valoro la autenticidad y creo que las mejores
                        fotos o videos provienen simplemente de ser
                        uno mismo.
                      </>
                    ) : (
                      <>
                        My audiovisual search is based on capturing
                        the essence and message that people want to
                        give to the world. I seek to make an authentic
                        and cinematographic documentary style story of
                        the couple, and the people and situations that
                        surround them. I value authenticity and
                        believe that the best photos or videos come
                        from simply being yourself.
                      </>
                    )}
                  </p>
                  <p>
                    {translation === 'spanish' ? (
                      <>
                        Sabía que encontraría lugares llenos de
                        personas felices, emocionadas y con ganas de
                        compartir la vida. Por eso decidí entrar a
                        este mundo, estoy muy contento de poder
                        dedicarme a lo que me apasiona.
                        <br />
                        Dedicarme a esto fue una de las mejores
                        decisiones que he tomado.
                      </>
                    ) : (
                      <>
                        I knew I would find places full of happy,
                        excited people wanting to share the joy of
                        life. That's why I decided to enter this world
                        of photography. I am very happy to be able to
                        dedicate myself to what I am passionate about.
                        <br />
                        Dedicating myself to this was one of the best
                        decisions I have ever made.
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
            <img src="./10.jpg" alt="fotos de bodas" />
          </section>
          <ClickTop />
        </div>
      )}
    </>
  );
};

export default AboutMe;
