import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './videoInformationStyle/nextPrevVideoStyle.css';

const NextPrevVideo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nextPrevVideos, setNextPrevVideos] = useState([]);

  const currentIndex = nextPrevVideos.findIndex(
    (video) => video.id === parseInt(id)
  );

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/videos`;
    axios
      .get(url)
      .then((res) => {
        setNextPrevVideos(res.data.videos);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigateToVideo = (index) => {
    if (index >= 0 && index < nextPrevVideos?.length) {
      navigate(`/videoInformation/${nextPrevVideos[index]?.id}`);
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
          currentIndex === nextPrevVideos?.length - 1
            ? { zIndex: 1, opacity: '0 ' }
            : { zIndex: 9 }
        }
      >
        <i className="bx bx-right-arrow"></i>
      </button>
    </div>
  );
};

export default NextPrevVideo;
