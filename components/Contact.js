/* eslint-disable jsx-a11y/control-has-associated-label */
import mixpanel from 'mixpanel-browser';
import React, { useEffect } from 'react';
import styles from 'styles/contact.module.scss';
import { Facebook, Linkedin, Github } from './socialIcons';

const Contact = ({ inputRef }) => {
  useEffect(() => {
    mixpanel.track_links('#email-container a', 'Clicked Email');
    mixpanel.track_links('#icons a', 'Clicked Icon', (e) => {
      return {
        href: e.getAttribute('href'),
      };
    });
  }, []);

  return (
    <section id="contact" className={`container ${styles.contact}`} ref={inputRef}>
      <h1 className={styles.header}>Get in touch</h1>

      <div className={styles.socialGroup}>
        <h2 className={styles.subheader}>Email</h2>
        <div id="email-container"><a href="mailto:tvergho@gmail.com">tvergho@gmail.com</a></div>
      </div>

      <div className={styles.socialGroup}>
        <h2 className={styles.subheader}>Social Media</h2>
        <div className={styles.icons} id="icons">
          <a href="https://www.facebook.com/tyler.vergho/" target="_blank" rel="noreferrer"><Facebook /></a>
          <a href="https://www.linkedin.com/in/tyler-vergho-16b488183/" target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href="https://github.com/tvergho/" target="_blank" rel="noreferrer"><Github /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
