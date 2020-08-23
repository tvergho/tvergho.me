import React from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import styles from 'styles/portfolio.module.scss';
import PortfolioSlide from './PortfolioSlide';

const Portfolio = ({ inputRef }) => {
  const [EmblaCarouselReact] = useEmblaCarousel({ loop: false });

  return (
    <section id="portfolio" className="container" ref={inputRef} style={{ position: 'relative' }}>
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
        </div>
      </EmblaCarouselReact>
    </section>
  );
};

export default Portfolio;
