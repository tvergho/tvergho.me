/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import styles from 'styles/portfolio.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PortfolioSlide from './PortfolioSlide';

const Portfolio = ({ inputRef }) => {
  const [EmblaCarouselReact, embla] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <section id="portfolio" className="container" ref={inputRef} style={{ position: 'relative' }}>
      <button className={`transparent-button ${styles.left}`} type="button" onClick={scrollPrev}><FaChevronLeft size="3rem" /></button>
      <button className={`transparent-button ${styles.right}`} type="button" onClick={scrollNext}><FaChevronRight size="3rem" /></button>

      <EmblaCarouselReact className={styles.emblaViewport}>
        <div className={styles.emblaContainer}>
          <PortfolioSlide
            title="RecMe"
            image={require('public/recme.png')}
            description="RecMe is an app that makes it easy to share businesses with friends and earn cashback rewards."
            technologies={['React Native', 'React', 'AWS', 'Serverless', 'GraphQL']}
            href="https://recme.app/"
          />
          <PortfolioSlide
            title="High Frequency Tones"
            image={require('public/frequency.png')}
            description="Precisely generate sound waves and test the limits of what you can hear."
            technologies={['React Native', 'tone.js']}
            href="https://apps.apple.com/us/app/id1511601653"
          />
          <PortfolioSlide
            title="nchtr.io"
            image={require('public/nchtr.png')}
            description="nchtr.io allows you to crowdsource your texts for when you have no clue how to respond."
            technologies={['React', 'node.js', 'Firebase', 'AWS S3']}
            href="http://nchtr.io/"
          />
          <PortfolioSlide
            title="Scribble"
            image={require('public/scribble.png')}
            description="Scribble is a machine learning powered, real-time Pictionary clone for Android."
            technologies={['Android', 'Java', 'Machine Learning']}
            href="/scribble/scribble.html"
          />
        </div>
      </EmblaCarouselReact>
    </section>
  );
};

export default Portfolio;
