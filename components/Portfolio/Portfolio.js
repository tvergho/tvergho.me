/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import styles from 'styles/portfolio.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import useScrollPosition from 'utils/useScrollPosition';
import PortfolioSlide from './PortfolioSlide';

const Portfolio = ({ inputRef }) => {
  const [EmblaCarouselReact, embla] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrolled = useScrollPosition(inputRef, 80);

  return (
    <section id="portfolio" className="container" ref={inputRef} style={{ position: 'relative' }}>
      <button className={`transparent-button ${styles.left}`} type="button" onClick={scrollPrev}><FaChevronLeft size="3rem" /></button>
      <button className={`transparent-button ${styles.right}`} type="button" onClick={scrollNext}><FaChevronRight size="3rem" /></button>

      <EmblaCarouselReact className={styles.emblaViewport}>
        <div className={styles.emblaContainer}>
          <PortfolioSlide
            title="RecTree"
            image={require('public/rectree.png')}
            description="RecTree is an app that makes it easy to share businesses with friends and earn cashback rewards."
            technologies={['React Native', 'React', 'AWS', 'Serverless', 'GraphQL']}
            href="https://rectree.app/"
            scrolled={scrolled}
          />
          <PortfolioSlide
            title="IDEA Lab"
            image={require('public/idea-lab.png')}
            description="I designed and developed the website for the Dartmouth IDEA Lab, which develops solutions for problems in anesthesia and healthcare."
            technologies={['React', 'Next.js', 'Sanity CMS']}
            href="https://dartmouthidea.org/"
            scrolled={scrolled}
          />
          <PortfolioSlide
            title="High Frequency Tones"
            image={require('public/frequency.png')}
            description="Precisely generate sound waves and test the limits of what you can hear."
            technologies={['React Native', 'tone.js']}
            href="https://apps.apple.com/us/app/id1511601653"
            scrolled={scrolled}
          />
          <PortfolioSlide
            title="Scribble"
            image={require('public/scribble.png')}
            description="Scribble is a machine learning powered, real-time Pictionary clone for Android."
            technologies={['Android', 'Java', 'Machine Learning']}
            href="/scribble/scribble.html"
            scrolled={scrolled}
          />
        </div>
      </EmblaCarouselReact>
    </section>
  );
};

export default Portfolio;
