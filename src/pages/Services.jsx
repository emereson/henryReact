import React, { useEffect, useState } from 'react';
import './stylesPages/servicesStyle.css';
import ClickTop from '../components/ClickTop';

const Services = ({ translation }) => {
  const [viewSection, setviewSection] = useState(false);
  const [viewSection2, setviewSection2] = useState(false);
  const [viewSection3, setviewSection3] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.services__sectionTwo');
      const section2 = document.querySelector('.services__img');
      const section3 = document.querySelector(
        '.services__sectionThree'
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
  }, 2000);

  return (
    <>
      {!loading ? (
        <div className="loading">
          <img
            className="loading__img "
            src="./IMG_5312.png"
            alt="services"
          />
        </div>
      ) : (
        <div className="services__container">
          <section className="services__section">
            <img src="./IMG_5312.png" alt="services" />
            <h1>
              {translation === 'spanish'
                ? 'NUESTROS SERVICIOS'
                : 'OUR SERVICES'}
            </h1>
          </section>
          <section
            className={` services__sectionTwo ${
              viewSection ? 'viewAnimation' : ''
            }`}
          >
            <img src="./012.jpg" alt="" />
            <div className="services__sectionTwo-text">
              <h2>
                {translation === 'spanish'
                  ? 'SERVICIOS DE FOTOGRAFIAS'
                  : 'PHOTOGRAPHY SERVICES'}
              </h2>
              <ul>
                <li>
                  <h3>
                    {translation === 'spanish'
                      ? 'Albunes de boda'
                      : 'Wedding Albums'}
                  </h3>
                  <p>
                    {translation === 'spanish' ? (
                      <>
                        El álbum de fotografías de bodas es un clásico
                        recuerdo que no puede faltar para viajar en el
                        tiempo.
                        <br />
                        Es un recuerdo tangible que puedes guardar
                        como un archivo y registro de tu vida.
                      </>
                    ) : (
                      <>
                        The wedding photo album is a classic memory
                        that cannot be missing to travel back in time.
                        <br />
                        It is a tangible memory that you can keep as
                        an archive and record of your life.
                      </>
                    )}
                  </p>
                </li>
                <li>
                  <h3>
                    {translation === 'spanish'
                      ? 'Edición  foto a foto'
                      : 'Photo to photo edition'}
                  </h3>
                  <p>
                    {translation === 'spanish'
                      ? 'Es mi sello de calidad editar cada foto, una por una para asegurar que cada foto sea un recuerdo memorable con un toque cinematográfico documental.'
                      : 'It is my hallmark of quality to edit each photo, one by one to ensure that each photo is a memorable memory with a documentary cinematic touch.'}
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <div
            className={`services__img ${
              viewSection2 ? 'viewAnimation' : ''
            }`}
          >
            <img
              src="./capa14.jpg"
              alt=""
              style={viewSection3 ? { scale: '1.2' } : { scale: '1' }}
            />
          </div>
          <section
            className={`services__sectionThree ${
              viewSection3 ? 'viewAnimation' : ''
            }`}
          >
            <div className="services__sectionThree-texts">
              <h2>
                {translation === 'spanish'
                  ? 'OTROS SERVICIOS'
                  : 'OTHER SERVICES'}
              </h2>
              <ul>
                <li>
                  <h3>
                    {translation === 'spanish'
                      ? 'Cobertura de dias completos'
                      : 'Full days coverage'}
                  </h3>
                  <p>
                    {translation === 'spanish'
                      ? 'Me encantan las bodas en las que se toma cada detalle con mucha importancia, en las que puedes respirar y relajarte, disfrutar con tranquilidad y sin prisas. Estoy dispuesto a acompañarte a partir de 8 horas en adelante.'
                      : 'I love weddings in which every detail is taken with great importance, in which you can breathe and relax, enjoy calmly and without haste. I am willing to accompany you from 8 am onwards.'}
                  </p>
                </li>
                <li>
                  <h3>
                    {' '}
                    {translation === 'spanish'
                      ? 'Pre Boda'
                      : 'Pre wedding'}
                  </h3>
                  <p>
                    {translation === 'spanish'
                      ? 'Un momento muy íntimo entre ustedes, donde solo estés tú y tu futur@ espos@, sin nadie más viendo. Me encargaré de que tengas las fotos más hermosas que puedas imaginarte y por supuesto, poder conocernos un poco más, y quitarnos el miedo de ser fotografiados o filmados.'
                      : `A very intimate moment between you two, where it's just you and your future spouse, with no one else watching. I will ensure that you have the most beautiful photos you can imagine, and of course, to get to know each other a little better, and to overcome the fear of being photographed or filmed`}
                  </p>
                </li>
                <li>
                  <h3>
                    {' '}
                    {translation === 'spanish'
                      ? 'Sesión de pareja'
                      : 'Couple session'}
                  </h3>
                  <p>
                    {translation === 'spanish'
                      ? 'Para parejas amantes de las fotos y de un buen lugar, tú y tu esposa pueden darse una escapada a un bosque o un glamping. Tomas una copa de vino al lado de una fogata.'
                      : 'For couples who love photos and a good location, you and your wife can take a getaway to a forest or a glamping site. You enjoy a glass of wine by the side of a campfire.'}
                  </p>
                </li>
              </ul>
            </div>
            <img src="./0801_2.jpg" alt="" />
          </section>
          <ClickTop />
        </div>
      )}
    </>
  );
};

export default Services;
