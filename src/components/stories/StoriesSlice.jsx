import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const StoriesSlice = ({
  storieSlice,
  storiesTextSlices,
  index,
  translation,
}) => {
  return (
    <SplideSlide>
      <div className="storieSlice__title">
        <p>{storieSlice.numberTitle}. </p>
        {translation === 'spanish'
          ? storieSlice.title
          : storieSlice.titleEng}
      </div>

      <div className="storieSlice__description">
        {translation === 'spanish'
          ? storieSlice.description
          : storieSlice.descriptionEng}
      </div>
    </SplideSlide>
  );
};

export default StoriesSlice;
