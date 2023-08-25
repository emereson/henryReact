import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NextPrevPhotography = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nextPrevPhotography, setNextPrevPhotography] = useState();
  const currentIndex = nextPrevPhotography?.findIndex(
    (video) => video.id === parseInt(id)
  );

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/photographs`;
    axios
      .get(url)
      .then((res) => setNextPrevPhotography(res.data.photographs))
      .catch((err) => console.log(err));
  }, [id]);

  const navigateToVideo = (index) => {
    if (index >= 0 && index < nextPrevPhotography?.length) {
      navigate(
        `/photograpyInfomation/${nextPrevPhotography[index]?.id}`
      );
    }
  };

  return (
    <div className="nextPrevVideo__container">
      <button
        className="nextPrevVideo__prev"
        onClick={() => navigateToVideo(currentIndex - 1)}
        style={
          currentIndex === 0
            ? { zIndex: 1, opacity: '0' }
            : { zIndex: 9 }
        }
      >
        <i className="bx bx-left-arrow"></i>
      </button>

      <button
        className="nextPrevVideo__next"
        onClick={() => navigateToVideo(currentIndex + 1)}
        style={
          currentIndex === nextPrevPhotography?.length - 1
            ? { zIndex: 1, opacity: '0 ' }
            : { zIndex: 9 }
        }
      >
        <i className="bx bx-right-arrow"></i>
      </button>
    </div>
  );
};

export default NextPrevPhotography;
