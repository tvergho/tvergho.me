import React, { useEffect, useRef } from 'react';
import { NextSeo } from 'next-seo';
import {
  Contact, Intro, Portfolio, Profile, Skills, Header,
} from 'components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import mixpanel from 'mixpanel-browser';

const Home = () => {
  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const header = [
    { name: 'HOME', ref: homeRef },
    { name: 'PROFILE', ref: profileRef },
    { name: 'SKILLS', ref: skillsRef },
    { name: 'PORTFOLIO', ref: portfolioRef },
    { name: 'CONTACT', ref: contactRef },
  ];

  const scrollYProgress = useMotionValue(0);
  const background = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['#0D1B2A', '#1B263B', '#415A77', '#6281A9', '#E0E1DD']);
  const accentColor = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['#58FCF2', '#68F3E9', '#B3FCF8', '#E0FFFD', '#0C739D']);
  const secondaryColor = useTransform(scrollYProgress, [0, 1], ['#F1A208', '#FF9411']);

  const onScroll = () => {
    const { body } = document;
    const scrollDist = body.scrollTop / (body.scrollHeight - window.innerHeight);
    scrollYProgress.set(scrollDist);
  };

  useEffect(() => {
    document.body.addEventListener('scroll', onScroll, { passive: true });
    mixpanel.track('Page View', { page: 'Home' });
    return () => document.body.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <NextSeo
        title="Tyler Vergho"
        description="Hi, I'm Tyler - a Dartmouth CS student based in California interested in web and mobile app development. Check out my projects and learn more about me."
      />
      <motion.div className="page" style={{ backgroundColor: background }}>
        <Header accentColor={accentColor} secondaryColor={secondaryColor} links={header} />
        <Intro inputRef={homeRef} accentColor={accentColor} />
        <Profile inputRef={profileRef} accentColor={accentColor} />
        <Skills inputRef={skillsRef} />
        <Portfolio inputRef={portfolioRef} />
        <Contact inputRef={contactRef} />
      </motion.div>
    </>
  );
};

export default Home;
