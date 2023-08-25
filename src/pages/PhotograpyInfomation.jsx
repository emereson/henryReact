import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './stylesPages/photographyInformationStyle.css';
import CardPhotographyInformation from '../components/photographyInformation/CardPhotographyInformation';
import NextPrevPhotography from '../components/photographyInformation/NextPrevPhotography';
import VIewPhotographyComplete from '../components/photographyInformation/VIewPhotographyComplete';
import { useSelector } from 'react-redux';

const PhotograpyInfomation = () => {
  const { id } = useParams();

  const [photographyInformation, setphotographyInformation] =
    useState(null);
  const [viewPhotographyComplete, setviewPhotographyComplete] =
    useState(false);
  const [indexPhotography, setindexPhotography] = useState();
  const [viewloading, setViewLoading] = useState(false);
  const [viewloadingImg, setViewLoadingImg] = useState(false);
  const translation = useSelector((state) => state.translation);

  useEffect(() => {
    setViewLoading(false);
    setViewLoadingImg(false);

    const timeoutId = setTimeout(() => {
      setViewLoading(true);
    }, 2100);

    const timeoutIdImg = setTimeout(() => {
      setViewLoadingImg(true);
    }, 10);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutIdImg);
    };
  }, [id]);

  useEffect(() => {
    setViewLoading(false);
    setViewLoadingImg(false);
    const url = `${import.meta.env.VITE_URL_API}/photographs/${id}`;
    axios
      .get(url)
      .then((res) => setphotographyInformation(res.data.photographs))
      .catch((err) => console.log(err));
  }, [id]);

  const clickPrev = () => {
    setindexPhotography(indexPhotography - 1);
    if (indexPhotography === 0) {
      setindexPhotography(
        photographyInformation?.photographsImgs.length - 1
      );
    }
  };

  const clickNext = () => {
    setindexPhotography(indexPhotography + 1);
    if (
      indexPhotography ===
      photographyInformation?.photographsImgs.length - 1
    ) {
      setindexPhotography(0);
    }
  };

  return (
    <div className="photographyInformation-container">
      <div
        className={`videoInformation__loading ${
          viewloading ? 'videoInformation__loading-exit' : ''
        }`}
      >
        <img
          className={`videoInformation__loading-img ${
            viewloadingImg ? 'videoInformation__loadingImg-exit' : ''
          }`}
          src={photographyInformation?.photographsFrontPage}
          alt=""
        />
      </div>
      <div className="photographyInformation-frontPage">
        <NextPrevPhotography />
        <img
          src={photographyInformation?.photographsFrontPage}
          alt=""
        />
        <h2>
          {translation === 'spanish'
            ? photographyInformation?.title
            : photographyInformation?.titleEng}
        </h2>
        <p>
          {' '}
          {translation === 'spanish'
            ? photographyInformation?.date
            : photographyInformation?.dateEng}
        </p>
        <nav className="photographyInformation-frontPage-links">
          <a
            href="https://www.facebook.com/"
            alt="Link to Facebook page"
            name="Facebook"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            alt="Link to Instagram page"
            name="Instagram"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a
            href="https://www.pinterest.com/"
            alt="Link to pinterest page"
            name="pinterest"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="bx bxl-pinterest"></i>
          </a>
        </nav>
      </div>
      <div className="cardPhotographyInformation-container">
        {photographyInformation?.photographsImgs.map(
          (photography, index) => (
            <CardPhotographyInformation
              key={photography.id}
              photography={photography}
              index={index}
              galleryStyle={photographyInformation?.galleryStyle}
              setviewPhotographyComplete={setviewPhotographyComplete}
              setindexPhotography={setindexPhotography}
            />
          )
        )}
      </div>

      {viewPhotographyComplete ? (
        <div className="viewPhotographyComplete__container">
          <i onClick={clickPrev} className="bx bx-chevron-left"></i>
          {photographyInformation?.photographsImgs.map(
            (photography, index) => (
              <VIewPhotographyComplete
                key={photography.id}
                photography={photography}
                index={index}
                indexPhotography={indexPhotography}
              />
            )
          )}
          <i onClick={clickNext} className="bx bx-chevron-right"></i>

          <i
            onClick={() => setviewPhotographyComplete(false)}
            className="bx bx-x close-viewImg"
          ></i>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default PhotograpyInfomation;
