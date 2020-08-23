import React, { useState, useEffect, useRef } from 'react';
import useWindowSize from 'utils/useWindowSize';
import styles from 'styles/portfolio.module.scss';
import PropTypes from 'prop-types';
import Backdrop from './Backdrop';

const PortfolioSlide = ({
  image, title, description, technologies, href,
}) => {
  const [showBackdrop, setShowBackdrop] = useState(false);

  const imgRef = useRef(null);
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    if (imgRef?.current) {
      const { naturalWidth, naturalHeight } = imgRef.current;
      const maxWidth = windowWidth - 20;
      const maxHeight = windowHeight * 0.7;

      const widthRatio = maxWidth / naturalWidth;
      const heightRatio = maxHeight / naturalHeight;

      if (widthRatio <= heightRatio) {
        console.log('resize width', naturalHeight, maxWidth);
        setHeight(naturalHeight * (maxWidth / naturalWidth));
        setWidth(maxWidth);
      } else {
        console.log('resize height', naturalWidth, maxHeight);
        setWidth(naturalWidth * (maxHeight / naturalHeight));
        setHeight(maxHeight);
      }
    }
  }, [imgRef, windowWidth, windowHeight]);

  const onHover = () => {
    setShowBackdrop(true);
  };

  const onUnhover = () => {
    setShowBackdrop(false);
  };

  return (
    <div className={styles.emblaSlide}>
      <div className={styles.inner}>
        <img src={image} alt={title} onMouseEnter={onHover} onMouseLeave={onUnhover} ref={imgRef} onClick={onHover} style={{ width, height }} />
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
