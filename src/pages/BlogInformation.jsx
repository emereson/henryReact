import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './stylesPages/videoInformationStyle.css';

import './stylesPages/blogInformation.css';

const BlogInformation = ({ translation }) => {
  const { id } = useParams();
  const [dataBlog, setdataBlog] = useState();
  const [viewloading, setViewLoading] = useState(false);
  const [viewloadingImg, setViewLoadingImg] = useState(false);

  const [photoVisible, setPhotoVisible] = useState(false);
  const [photoVisible2, setPhotoVisible2] = useState(false);
  const [photoVisible3, setPhotoVisible3] = useState(false);
  const [photoVisible4, setPhotoVisible4] = useState(false);

  useEffect(() => {
    setViewLoading(false);
    setViewLoadingImg(false);

    const timeoutId = setTimeout(() => {
      setViewLoading(true);
    }, 2500);

    const timeoutIdImg = setTimeout(() => {
      setViewLoadingImg(true);
    }, 10);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutIdImg);
    };
  }, [id]);

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/blogs/${id}`;
    axios
      .get(url)
      .then((res) => setdataBlog(res?.data.blog))
      .catch((err) => console.log(err));
  }, []);

  console.log(dataBlog);

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
      <Link to="/stories" className="cardVideosStories__close">
        x
      </Link>
      <div
        className={`videoInformation__loading ${
          viewloading ? 'videoInformation__loading-exit' : ''
        }`}
      >
        <img
          className={`videoInformation__loading-img ${
            viewloadingImg ? 'videoInformation__loadingImg-exit' : ''
          }`}
          src={dataBlog?.blogImg1}
          alt=""
        />
      </div>
      <div className="film-effect1"></div>
      <img
        src={dataBlog?.blogImg1}
        alt="blog-1-imagen-1"
        id={`idPhotoStories5`}
        className="blogStories__firstImg"
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
            {translation === 'spanish'
              ? dataBlog?.title
              : dataBlog?.titleEng}
          </h2>
          <p>
            {translation === 'spanish'
              ? dataBlog?.paragraph1
              : dataBlog?.paragraph1Eng}
          </p>
          <p>
            {translation === 'spanish'
              ? dataBlog?.paragraph2
              : dataBlog?.paragraph2Eng}
          </p>
          <p>
            {translation === 'spanish'
              ? dataBlog?.paragraph3
              : dataBlog?.paragraph3Eng}
          </p>
          <p>
            {' '}
            {translation === 'spanish'
              ? dataBlog?.paragraph4
              : dataBlog?.paragraph4Eng}
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
            {translation === 'spanish'
              ? dataBlog?.paragraph5
              : dataBlog?.paragraph5Eng}
          </p>
          <p>
            {translation === 'spanish'
              ? dataBlog?.paragraph6
              : dataBlog?.paragraph6Eng}
          </p>
          <span>{dataBlog?.couplesName}</span>
        </section>
      </article>
      <img
        src={dataBlog?.blogImg2}
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
        src={dataBlog?.blogImg3}
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

export default BlogInformation;
