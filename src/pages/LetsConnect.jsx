import React, { useRef } from 'react';
import './stylesPages/letsConnect.css';
import emailjs from '@emailjs/browser';
import ClickTop from '../components/ClickTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LetsConnect = ({ translation }) => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent form submission
    const form = formRef.current;

    emailjs
      .sendForm(
        'service_4jm7prj',
        'template_sjet75m',
        form,
        'Fe1focVs4CYeoB-Ic'
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

  return (
    <div className="letsConnect__container">
      <ToastContainer />
      <section className="letsConnect__section">
        <img src="./grupo1.jpg" alt="" />
        <h1>
          {translation === 'spanish' ? `HABLEMOS` : `LET'S TALK`}
        </h1>
      </section>
      <section className="letsConnect__sectionTwo">
        <p>
          {translation === 'spanish'
            ? `Gracias por estar interesadp en mi.`
            : `Thank you for being interested in me.`}
        </p>
        <p>
          {translation === 'spanish'
            ? `sera un honor capturar tus mejores momentos.`
            : `it will be an honor to capture your best moments.`}
        </p>
        <p>
          {translation === 'spanish'
            ? `si quieres obtener todos lo detalles. rellena el formulario`
            : `
            if you want to get all the details. complete the form`}
        </p>
        <p>
          {translation === 'spanish'
            ? `y me pondre en contacto contigo`
            : `and I will contact you.`}
        </p>
      </section>
      <form
        className="letsConnec__form"
        ref={formRef}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder={
            translation === 'spanish'
              ? 'Nombre (Tuyo + el de tu pareja)*'
              : 'Name (Yours + your partner)*'
          }
          required
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder={
            translation === 'spanish' ? 'Email*' : 'Email*'
          }
          required
        />

        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder={
            translation === 'spanish'
              ? 'Número de teléfono y mejor hora para contactarlo'
              : 'Phone Number & Best Time yo Reach You'
          }
          required
        />

        <input
          type="text"
          name="redes"
          id="redes"
          placeholder={
            translation === 'spanish'
              ? 'Redes Sociales:IG, FB, Tiktok'
              : 'Social Networks: IG, FB, Tiktok'
          }
          required
        />

        <input
          type="text"
          name="interested"
          id="interested"
          placeholder={
            translation === 'spanish'
              ? '¿En que estas interesado?'
              : `What are you interested in?
          `
          }
          required
        />
        <input
          type="text"
          name="location"
          id="location"
          placeholder={
            translation === 'spanish'
              ? 'Lugar del evento'
              : 'Place of the event'
          }
          required
        />
        <input
          type="text"
          name="date"
          id="date"
          placeholder={
            translation === 'spanish'
              ? 'Fecha del evento'
              : 'Event date'
          }
          required
        />
        <input
          type="text"
          name="know"
          id="know"
          placeholder={
            translation === 'spanish'
              ? 'Como me has conocido'
              : 'How did you know me'
          }
          required
        />
        <textarea
          name="message"
          id="mensaje"
          rows="10"
          cols="50"
          placeholder={
            translation === 'spanish'
              ? 'Cuéntame un poco más sobre ustedes como pareja y cuál es su visión para su boda, me encantaría que me lo contaran. (Si la fecha de la boda no está decidida, da una idea de lo que estabas pensando aquí)'
              : 'Tell me a bit more about you as a couple and what is your vision for your wedding, I would love to hear from you. (If the wedding date is not decided, give an idea of ​​what you were thinking here)'
          }
          required
        />
        <button
          className="letsConnect__submit"
          type="submit"
          value="Enviar"
        >
          Enviar
        </button>
      </form>
      <ClickTop />
    </div>
  );
};

export default LetsConnect;
