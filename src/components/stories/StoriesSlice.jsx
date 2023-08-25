import React from 'react';

const StoriesSlice = ({ storieSlice, storiesTextSlices, index, translation }) => {
  return (
    <ul
      className="storieSlice__ul"
      style={
        storiesTextSlices === index
          ? { transform: 'translateX(0)' }
          : storiesTextSlices > index
          ? { transform: 'translateX(-100%)' }
          : { transform: 'translateX(100%)' }
      }
    >
      <li className="storieSlice__title">
        <p>{storieSlice.numberTitle}. </p>
        {translation === 'spanish' ? storieSlice.title : storieSlice.titleEng}
      </li>

      <li className="storieSlice__description">
        {translation === 'spanish' ? storieSlice.description : storieSlice.descriptionEng}
      </li>
    </ul>
  );
};

export default StoriesSlice;
