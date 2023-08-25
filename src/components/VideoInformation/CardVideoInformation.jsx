import React from 'react';

const CardVideoInformation = ({ dataVideo, translation }) => {
  return (
    <section className="cardVideoInformation-section">
      <h4> {translation === 'spanish' ? dataVideo.title : dataVideo.titleEng}</h4>
      {dataVideo.link ? (
        <a
          href={dataVideo.link}
          alt={dataVideo.title}
          name={dataVideo.title}
          rel={dataVideo.title}
          target="_blank"
        >
          {translation === 'spanish' ? dataVideo.description : dataVideo.descriptionEng}
        </a>
      ) : (
        <p>{translation === 'spanish' ? dataVideo.description : dataVideo.descriptionEng}</p>
      )}
    </section>
  );
};

export default CardVideoInformation;
