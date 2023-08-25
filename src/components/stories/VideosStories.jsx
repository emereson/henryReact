import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardVideosStories from './cardsStories/CardVideosStories';
import './storiesStyle/videosStoriesStyle.css';

const VideosStories = ({ selectNav }) => {
  const [videosStories, setvideosStories] = useState();

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/videos`;
    axios
      .get(url)
      .then((res) => setvideosStories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="videosStories__container">
      {videosStories?.videos.map((videoStorie, index) => (
        <CardVideosStories
          key={videoStorie.id}
          videoStorie={videoStorie}
          index={index}
          selectNav={selectNav}
        />
      ))}
    </div>
  );
};

export default VideosStories;
