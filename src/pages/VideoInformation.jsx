import axios from 'axios';
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
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
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [viewVolume, setviewVolume] = useState(false);

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

  const toggleFullScreen = useCallback(() => {
    const video = videoRef.current;

    if (!isFullscreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (document.webkitRequestFullscreenElement) {
        document.webkitExitFullscreen();
      } else if (document.msRequestFullscreenElement) {
        document.msExitFullscreen();
      } else if (document.mozRequestFullscreenElement) {
        document.mozCancelFullscreen();
      }
    }

    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);

  const handleProgress = useCallback((e) => {
    const newProgress = e.playedSeconds;
    setProgress(newProgress);
  }, []);

  const handleProgressChange = useCallback((seconds) => {
    const newSeconds = seconds.target.value;
    if (videoRef.current) {
      videoRef.current.seekTo(newSeconds);
    }
    setProgress(newSeconds);
  }, []);

  const handleDurationChange = useCallback((duration) => {
    setDuration(duration);
  }, []);

  const handleVolumeChange = useCallback((e) => {
    const newVolume = e.target.value;

    setVolume(newVolume);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <article className="video-information-container">
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
        {!isFullscreen ? <NextPrevVideo /> : ''}
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
        <h4
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
        </h4>
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
            ref={videoRef}
            url={videoInformation.videoUrl || ''}
            playing={playVideo}
            width="100%"
            height="100vh"
            controls={false}
            volume={volume}
            onDuration={handleDurationChange}
            onProgress={handleProgress}
            title={videoInformation.title}
            style={{
              zIndex: '5',
            }}
            onClick={() => setPlayVideo(false)}
          />
        )}
        <section className="video-information-controls">
          <ul className="video-information-time">
            <li className="video-current-time">
              {formatTime(progress)}
            </li>
            <li className="video-duration-time">
              / {formatTime(duration)}
            </li>
          </ul>
          <div className="video-information-progress">
            {duration > 0 && (
              <input
                className="custom-progress"
                type="range"
                min="0"
                max={duration}
                step={0.1}
                value={progress}
                onChange={handleProgressChange}
              />
            )}
          </div>
          <div className="video-information-volume">
            <div
              className=" volumenProgress__container"
              onMouseOut={() => setviewVolume(false)}
              onMouseOver={() => setviewVolume(true)}
            >
              <i className="bx bxs-volume-full"></i>

              <input
                className="volumen__progress"
                type="range"
                min={0}
                max={1}
                step={0.1}
                value={volume}
                onChange={handleVolumeChange}
                onMouseOut={() => setviewVolume(false)}
                style={viewVolume ? { opacity: 1 } : { opacity: 0 }}
              />
            </div>
            <i
              onClick={toggleFullScreen}
              className="bx bx-fullscreen"
            ></i>
          </div>
        </section>
      </div>
      {!isFullscreen ? (
        <div className="cardVideoInformation-container">
          {videoInformation?.dataVideos.map((dataVideo) => (
            <CardVideoInformation
              key={dataVideo.id}
              dataVideo={dataVideo}
              translation={translation}
            />
          ))}
        </div>
      ) : (
        ''
      )}
    </article>
  );
};

export default VideoInformation;
