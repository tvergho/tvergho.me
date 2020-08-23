import React from 'react';
import styles from 'styles/intro.module.scss';
import { motion } from 'framer-motion';

const Intro = ({ inputRef, accentColor }) => {
  return (
    <section id="intro" className="container" ref={inputRef}>
      <motion.div className={styles.header} style={{ color: accentColor }}>Hi, I&#39;m Tyler.</motion.div>
      <div className={styles.subheader}>I build beautiful, modern, highly performant <span style={{ fontWeight: 700 }}>websites</span> and <span style={{ fontWeight: 700 }}>mobile apps.</span></div>
    </section>
  );
};

export default Intro;
