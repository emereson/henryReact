import React, { useState, useEffect } from 'react';

const CardPhotographyInformation = ({
  photography,
  index,
  galleryStyle,
  setviewPhotographyComplete,
  setindexPhotography,
}) => {
  const [photoVisible, setphotoVisible] = useState(false);

  const shouldSpanTwoRows = calculateShouldSpanTwoRows(index);

  function calculateShouldSpanTwoRows(index) {
    const patternIndices = [0];
    let current = 0;

    while (current <= index) {
      if (patternIndices.length % 2 === 1) {
        current += 4;
      } else {
        current += 5;
      }
      patternIndices.push(current);
    }

    return patternIndices.includes(index);
  }

  useEffect(() => {
    const handleScroll = () => {
      const cardEventElement = document.getElementById(
        `idPhotography${index}`
      );

      if (cardEventElement) {
        if (isInViewport(cardEventElement)) {
          setphotoVisible(true);
        } else {
          setphotoVisible(false);
        }
      }
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const topOffset = -400;

      return rect.top + topOffset < windowHeight;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [index]);

  return (
    <>
      {galleryStyle === 'row' ? (
        <div
          id={`idPhotography${index}`}
          style={{
            opacity: photoVisible ? 1 : 0,
            transform: photoVisible
              ? 'translateY(0)'
              : 'translateY(100%)',
            ...(shouldSpanTwoRows
              ? { gridColumn: 'span 2', gridRow: 'span 2' }
              : null),
          }}
        >
          <img
            src={photography.photographsImgUrl}
            alt={photography.photographsImgUrl}
            rel={photography.photographsImgUrl}
          />
          <span
            onClick={() => {
              setindexPhotography(index);
              setviewPhotographyComplete(true);
            }}
          ></span>
        </div>
      ) : (
        <div
          id={`idPhotography${index}`}
          style={{
            opacity: photoVisible ? 1 : 0,
            transform: photoVisible
              ? 'translateY(0)'
              : 'translateY(100%)',
            ...(shouldSpanTwoRows
              ? { gridColumn: 'auto', gridRow: 'span 2' }
              : null),
          }}
        >
          <img
            src={photography.photographsImgUrl}
            alt={photography.photographsImgUrl}
            rel={photography.photographsImgUrl}
          />
          <span
            onClick={() => {
              setindexPhotography(index);
              setviewPhotographyComplete(true);
            }}
          ></span>
        </div>
      )}
    </>
  );
};

export default CardPhotographyInformation;
