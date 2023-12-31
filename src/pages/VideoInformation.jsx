import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './stylesPages/videoInformationStyle.css';
import ReactPlayer from 'react-player';
import CardVideoInformation from '../components/VideoInformation/CardVideoInformation';
import NextPrevVideo from '../components/VideoInformation/NextPrevVideo';
import { useSelector } from 'react-redux';

const VideoInformation = () => {
  const { id } = useParams();
  const videoRef = useRef(null);
  const translation = useSelector((state) => state.translation);

  const [videoInformation, setVideoInformation] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);
  const [viewImg, setViewImg] = useState(false);
  const [viewloading, setViewLoading] = useState(false);
  const [viewloadingImg, setViewLoadingImg] = useState(false);

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
    setViewImg(false);
    setPlayVideo(false);
  }, [id]);

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/videos/${id}`;
    axios
      .get(url)
      .then((res) => setVideoInformation(res.data.videos))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <article className="video-information-container">
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
          src={videoInformation?.videosimgUrl}
          alt=""
        />
      </div>
      <div className="videoInformation-video">
        <NextPrevVideo />
        <h2
          onClick={() => {
            setPlayVideo(true);
            setViewImg(true);
          }}
          style={
            playVideo
              ? { opacity: '0', zIndex: '3' }
              : { opacity: '1', zIndex: '8' }
          }
        >
          {translation === 'spanish'
            ? videoInformation?.title
            : videoInformation?.titleEng}
        </h2>
        <h3
          style={
            playVideo
              ? { opacity: '0', zIndex: '3' }
              : { opacity: '1', zIndex: '8' }
          }
        >
          {' '}
          {translation === 'spanish'
            ? videoInformation?.date
            : videoInformation?.dateEng}
        </h3>
        <span
          onClick={() => {
            setPlayVideo(true);
            setViewImg(true);
          }}
          style={playVideo ? { zIndex: '3' } : { zIndex: '7' }}
        ></span>
        <img
          style={
            viewImg
              ? { opacity: '0', zIndex: '3' }
              : { opacity: '1', zIndex: '6' }
          }
          src={videoInformation?.videosimgUrl}
          alt={videoInformation?.title}
        />
        {videoInformation && (
          <ReactPlayer
            className="react-player"
            ref={videoRef}
            url={videoInformation.videoUrl || ''}
            playing={playVideo}
            width="100%"
            height="100%"
            controls={true}
            title={videoInformation.title}
            style={{
              zIndex: '5',
            }}
          />
        )}
      </div>

      <div className="cardVideoInformation-container">
        {videoInformation?.dataVideos.map((dataVideo) => (
          <CardVideoInformation
            key={dataVideo.id}
            dataVideo={dataVideo}
            translation={translation}
          />
        ))}
      </div>
    </article>
  );
};

export default VideoInformation;
