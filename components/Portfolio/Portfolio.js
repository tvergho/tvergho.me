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
            title="TroutRoutes"
            image={require('public/trout.png')}
            description="I developed the web platform for TroutRoutes, a trout fishing application with a proprietary database of over 23,000 trout streams across the US.
            The web application enables users to create and share custom markup data and provides real-time access to detailed geographic information about streams and access points."
            technologies={['React.js', 'Mapbox', 'Firebase', 'Stripe', 'Google Cloud Functions', 'Bootstrap', 'Node.js']}
            href="https://maps.troutinsights.com/"
            scrolled={scrolled}
          />
          <PortfolioSlide
            title="Logos"
            image={require('public/logos.png')}
            description="A search engine for open-source debate evidence based on vector embeddings.
            Scrapes the high school and policy debate wikis for speech documents, and generates a publicly searchable database of cards."
            technologies={['Python', 'React', 'Next.js', 'Typescript', 'Pinecone', 'Docker', 'AWS DynamoDB']}
            href="https://logos-debate.netlify.app/"
            scrolled={scrolled}
          />
          <PortfolioSlide
            title="RecTree"
            image={require('public/rectree.png')}
            description="RecTree is a mobile application that makes it easy to share businesses with friends and earn cashback rewards."
            technologies={['React Native', 'React', 'AWS', 'Serverless', 'GraphQL']}
            href="https://rectree.app/"
            scrolled={scrolled}
          />
          <PortfolioSlide
            title="PrizeRing"
            image={require('public/prizering.png')}
            description="PrizeRing is a live mobile game show app where users can repurpose social media content to win real money.
            Users create and participate in live game shows, creating a fulfilling interactive entertainment experience. Developed with the DALI Lab."
            technologies={['React Native', 'Plaid', 'Express.js', 'MongoDB', 'AWS S3', 'Firebase']}
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
            title="Orbit"
            image={require('public/orbit.png')}
            description="Orbit is a social media platform that analyzes a user's close friends network to find mutual connections in close geographic proximity.
            Created a functional TestFlight prototype with the Dartmouth DALI Lab."
            technologies={['React Native', 'Expo', 'Express.js', 'MongoDB', 'AWS S3', 'Redux']}
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
            title="Linguistics Games"
            image={require('public/linguisticsgames.png')}
            description="Linguistics Games is a mobile application created for the Dartmouth linguistics department that gamifies the process of collecting voice samples for research.
            Developed with the Dartmouth DALI Lab."
            technologies={['React Native', 'Express.js', 'MongoDB', 'AWS S3', 'Redux']}
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
