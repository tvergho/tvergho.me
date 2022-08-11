import React, { useEffect } from 'react';
import styles from 'styles/profile.module.scss';
import { motion } from 'framer-motion';
import {
  MdPersonOutline, MdPublic, MdMailOutline, MdImportContacts,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import mixpanel from 'mixpanel-browser';

const ProfileItem = ({ icon: Icon, text, title }) => {
  return (
    <div className={styles.item}>
      <Icon title={title} />
      <div>{text}</div>
    </div>
  );
};

ProfileItem.propTypes = {
  icon: PropTypes.func.isRequired,
  text: PropTypes.string,
  title: PropTypes.string,
};

const ProfileText = () => {
  useEffect(() => {
    mixpanel.track_links('#profile-text a', 'click profile link', (e) => {
      return {
        referrer: document.referrer,
        url: e.getAttribute('href'),
      };
    });
  }, []);

  return (
    <div className={styles.col}>
      <div className={styles.colSection}>
        <h1>Who am I?</h1>
        <div>
          <ProfileItem icon={MdPersonOutline} text="Tyler Vergho" title="name" />
          <ProfileItem icon={MdPublic} text="California" title="location" />
          <ProfileItem icon={MdMailOutline} text="tvergho@gmail.com" title="email" />
          <ProfileItem icon={MdImportContacts} text="Computer Science" title="major" />
        </div>
      </div>

      <div className={styles.colSection}>
        <h2>Elevator Pitch</h2>
        <div id="profile-text">
          I’m a senior at <span style={{ fontWeight: 700 }}>Dartmouth College</span> with several years’ experience building websites and mobile apps using the latest technologies and frameworks.
          Currently a software engineer at the <a href="http://dali.dartmouth.edu/" target="_blank" rel="noreferrer"><span style={{ fontWeight: 700 }}>Dartmouth DALI Lab</span></a>.
          You can access my resume <a href="/resume.pdf" target="_blank" rel="noreferrer"><span style={{ fontWeight: 700 }}>here</span></a>.
        </div>

        <h2>Other Interests</h2>
        <div>I’m also on the Dartmouth <span style={{ fontWeight: 700 }}>policy debate</span> team.</div>
      </div>
    </div>
  );
};

const Profile = ({ inputRef, accentColor }) => {
  return (
    <motion.section id="profile" className="container" ref={inputRef} style={{ color: accentColor }}>
      <ProfileText />
      <div className={styles.col}>
        <img src={require('public/profile.jpg')} alt="Tyler Vergho" className={styles.profile} />
      </div>
    </motion.section>
  );
};

export default Profile;
