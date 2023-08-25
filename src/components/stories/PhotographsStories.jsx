import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardPhotographyStories from './cardsStories/CardPhotographyStories';
import './storiesStyle/photographsStories.css';

const PhotographsStories = ({ selectNav }) => {
  const [photographsStories, setphotographsStories] = useState();

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/photographs`;
    axios
      .get(url)
      .then((res) => setphotographsStories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="photographsStories__container">
      {photographsStories?.photographs.map((photography, index) => (
        <CardPhotographyStories
          key={photography.id}
          photography={photography}
          index={index}
          selectNav={selectNav}
        />
      ))}
    </div>
  );
};

export default PhotographsStories;
