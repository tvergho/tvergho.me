/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styles from 'styles/contact.module.scss';
import { Facebook, Linkedin, Github } from './socialIcons';

const Contact = ({ inputRef }) => {
  return (
    <section id="contact" className={`container ${styles.contact}`} ref={inputRef}>
      <h1 className={styles.header}>Get in touch</h1>

      <div className={styles.socialGroup}>
        <h2 className={styles.subheader}>Email</h2>
        <div><a href="mailto:tvergho@gmail.com">tvergho@gmail.com</a></div>
      </div>

      <div className={styles.socialGroup}>
        <h2 className={styles.subheader}>Social Media</h2>
        <div className={styles.icons}>
          <a href="https://www.facebook.com/tyler.vergho/" target="_blank" rel="noreferrer"><Facebook /></a>
          <a href="https://www.linkedin.com/in/tyler-vergho-16b488183/" target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href="https://github.com/tvergho/" target="_blank" rel="noreferrer"><Github /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
