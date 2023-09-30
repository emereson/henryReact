import React, { useEffect, useRef, useState } from 'react';
import './stylesPages/letsConnect.css';
import emailjs from '@emailjs/browser';
import ClickTop from '../components/ClickTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LetsConnect = ({ translation }) => {
  const formRef = useRef();

  const [viewSection, setviewSection] = useState(false);
  const [viewSection2, setviewSection2] = useState(false);
  const [label, setLabel] = useState('');
  const [label2, setLabel2] = useState('');
  const [label3, setLabel3] = useState('');
  const [label4, setLabel4] = useState('');
  const [label5, setLabel5] = useState('');
  const [label6, setLabel6] = useState('');
  const [label7, setLabel7] = useState('');
  const [label8, setLabel8] = useState('');

  const [loading, setloading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(
        '.letsConnect__sectionTwo'
      );
      const section2 = document.querySelector('.letsConnec__form');

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

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent form submission
    const form = formRef.current;

    emailjs
      .sendForm(
        'service_pezmeo8',
        'template_opbl4jv',
        form,
        '1FEJbPsPE46KyIOzy'
      )
      .then((result) => {
        form.reset();
        toast('  💕 El fomulario se envio exitosamente 💕', {
          position: 'top-right',
          autoClose: 5001,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setLabel('');
    } else {
      setLabel(event.target.id);
    }
  };
  const handleInputChange2 = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setLabel2('');
    } else {
      setLabel2(event.target.id);
    }
  };
  const handleInputChange3 = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setLabel3('');
    } else {
      setLabel3(event.target.id);
    }
  };
  const handleInputChange4 = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setLabel4('');
    } else {
      setLabel4(event.target.id);
    }
  };
  const handleInputChange5 = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setLabel5('');
    } else {
      setLabel5(event.target.id);
    }
  };
  const handleInputChange6 = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setLabel6('');
    } else {
      setLabel6(event.target.id);
    }
  };
  const handleInputChange7 = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setLabel7('');
    } else {
      setLabel7(event.target.id);
    }
  };
  const handleInputChange8 = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setLabel8('');
    } else {
      setLabel8(event.target.id);
    }
  };

  return (
    <>
      {!loading ? (
        <div className="loading">
          <img
            className="loading__img "
            src="./grupo1.jpg"
            alt="Let's connect"
          />
        </div>
      ) : (
        <div className="letsConnect__container">
          <ToastContainer />
          <section className="letsConnect__section">
            <img src="./grupo1.jpg" alt="Let's connect" />
            <h1>
              {translation === 'spanish' ? `HABLEMOS` : `LET'S TALK`}
            </h1>
          </section>
          <section
            className={`letsConnect__sectionTwo ${
              viewSection ? 'viewAnimation' : ''
            }`}
          >
            <p>
              {translation === 'spanish'
                ? `Gracias por estar interesadp en mi.`
                : `Thank you for being interested in working with me.`}
            </p>
            <p>
              {translation === 'spanish'
                ? `será un honor capturar tus mejores momentos.`
                : `It will be an honor to capture your best moments.`}
            </p>
            <p>
              {translation === 'spanish'
                ? `si quieres obtener todos los detalles, rellena el formulario`
                : `
                If you want to get all the details, fill out the form`}
            </p>
            <p>
              {translation === 'spanish'
                ? `y me pondre en contacto contigo`
                : `and I will contact you.`}
            </p>
          </section>
          <form
            className={`letsConnec__form ${
              viewSection2 ? 'viewAnimation' : ''
            }`}
            ref={formRef}
            onSubmit={sendEmail}
          >
            <div>
              <label
                htmlFor="name"
                style={
                  label === 'name'
                    ? { transform: 'translateY(10%)' }
                    : { transform: 'translateY(170%)' }
                }
              >
                {translation === 'spanish'
                  ? 'Nombre (Tuyo + el de tu pareja)*'
                  : 'Name (Yours + your partner)*'}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                style={
                  label2 === 'email'
                    ? { transform: 'translateY(10%)' }
                    : { transform: 'translateY(170%)' }
                }
              >
                {translation === 'spanish' ? 'Email*' : 'Email*'}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={handleInputChange2}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                style={
                  label3 === 'phone'
                    ? { transform: 'translateY(10%)' }
                    : { transform: 'translateY(170%)' }
                }
              >
                {translation === 'spanish'
                  ? 'Número de teléfono y mejor hora para contactarlo'
                  : 'Phone Number & Best Time yo Reach You'}
              </label>

              <input
                type="tel"
                name="phone"
                id="phone"
                onChange={handleInputChange3}
                required
              />
            </div>

            <div>
              <label
                htmlFor="redes"
                style={
                  label4 === 'redes'
                    ? { transform: 'translateY(10%)' }
                    : { transform: 'translateY(170%)' }
                }
              >
                {translation === 'spanish'
                  ? 'Redes Sociales:IG, FB, Tiktok'
                  : 'Social Networks: IG, FB, Tiktok'}
              </label>

              <input
                type="text"
                name="redes"
                id="redes"
                onChange={handleInputChange4}
                required
              />
            </div>
            <div>
              <label
                htmlFor="interested"
                style={
                  label5 === 'interested'
                    ? { transform: 'translateY(10%)' }
                    : { transform: 'translateY(170%)' }
                }
              >
                {translation === 'spanish'
                  ? '¿En qué esta interesado?'
                  : `What are you interested in?
          `}
              </label>

              <input
                type="text"
                name="interested"
                id="interested"
                onChange={handleInputChange5}
                required
              />
            </div>

            <div>
              <label
                htmlFor="location"
                style={
                  label6 === 'location'
                    ? { transform: 'translateY(10%)' }
                    : { transform: 'translateY(170%)' }
                }
              >
                {translation === 'spanish'
                  ? 'Lugar del Evento'
                  : 'Place of the event'}
              </label>

              <input
                type="text"
                name="location"
                id="location"
                onChange={handleInputChange6}
                required
              />
            </div>

            <div>
              <label
                htmlFor="date"
                style={
                  label7 === 'date'
                    ? { transform: 'translateY(10%)' }
                    : { transform: 'translateY(10%)' }
                }
              >
                {translation === 'spanish'
                  ? 'Fecha del Evento'
                  : 'Event Date'}
              </label>
              <input
                type="text"
                name="date"
                id="date"
                defaultValue="23/09/2023"
                onChange={handleInputChange7}
                required
              />
            </div>

            <div>
              <label
                htmlFor="know"
                style={
                  label8 === 'know'
                    ? { transform: 'translateY(10%)' }
                    : { transform: 'translateY(170%)' }
                }
              >
                {translation === 'spanish'
                  ? 'Cómo me has conocido'
                  : 'How did you hear about me'}
              </label>
              <input
                type="text"
                name="know"
                id="know"
                onChange={handleInputChange8}
                required
              />
            </div>
            <textarea
              name="message"
              id="mensaje"
              rows="10"
              cols="50"
              placeholder={
                translation === 'spanish'
                  ? 'Cuéntame un poco más sobre ustedes como pareja y cuál es su visión para su boda, me encantaría que me lo contaran. (Si la fecha de la boda no está decidida, da una idea de lo que estabas pensando aquí.)'
                  : 'Tell me a little more about you all as a couple and what your vision is for your wedding,  I would love to know. (If the wedding date is not decided, just write in a date around the time you are considering.)  '
              }
              required
            />
            <button
              className="letsConnect__submit"
              type="submit"
              value="Enviar"
            >
              {translation === 'spanish' ? 'ENVIAR' : 'SEND'}
            </button>
          </form>
          <ClickTop />
        </div>
      )}
    </>
  );
};

export default LetsConnect;
