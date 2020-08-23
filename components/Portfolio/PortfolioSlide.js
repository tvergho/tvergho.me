import React, { useState, useEffect, useRef, useCallback } from 'react';
import useWindowSize from 'utils/useWindowSize';
import styles from 'styles/portfolio.module.scss';
import PropTypes from 'prop-types';
import Backdrop from './Backdrop';

const PortfolioSlide = ({
  image, title, description, technologies, href,
}) => {
  const [showBackdrop, setShowBackdrop] = useState(false);

  const imgRef = useRef(null);
  const setRef = useCallback((node) => {
    imgRef.current = node;
    setDimensions();
  }, [])

  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    setDimensions();
  }, [windowWidth, windowHeight]);

  const setDimensions = () => {
    if (imgRef?.current) {
      const { naturalWidth, naturalHeight } = imgRef.current;
      const maxWidth = windowWidth - 20;
      const maxHeight = windowHeight * 0.7;

      const widthRatio = maxWidth / naturalWidth;
      const heightRatio = maxHeight / naturalHeight;

      if (widthRatio <= heightRatio) {
        setHeight(naturalHeight * (maxWidth / naturalWidth));
        setWidth(maxWidth);
      } else {
        setWidth(naturalWidth * (maxHeight / naturalHeight));
        setHeight(maxHeight);
      }
    }
  }

  const onHover = () => {
    setShowBackdrop(true);
  };

  const onClick = (e) => {
    if (!showBackdrop) {
      e.stopPropagation();
      setShowBackdrop(true);
    }
  };

  const onUnhover = () => {
    setShowBackdrop(false);
  };

  return (
    <div className={styles.emblaSlide}>
      <div className={styles.inner}>
        <img src={image} alt={title} onMouseEnter={onHover} onMouseLeave={onUnhover} ref={setRef} onClick={onClick} style={{ width, height }} />
        <Backdrop
          onMouseEnter={onHover}
          onMouseLeave={onUnhover}
          showBackdrop={showBackdrop}
          height={height}
          width={width}
          title={title}
          description={description}
          technologies={technologies}
          href={href}
        />
      </div>
    </div>
  );
};

PortfolioSlide.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  href: PropTypes.string,
};

export default PortfolioSlide;
