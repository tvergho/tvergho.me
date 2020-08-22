import React from 'react';
import styles from 'styles/profile.module.scss';
import { motion } from 'framer-motion';
import {
  MdPersonOutline, MdPublic, MdMailOutline, MdImportContacts,
} from 'react-icons/md';
import PropTypes from 'prop-types';

const ProfileItem = ({ icon: Icon, text, title }) => {
  return (
    <div className={styles.item}>
      <Icon title={title} />
      <div>{text}</div>
    </div>
  );
};

ProfileItem.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string,
  title: PropTypes.string,
};

const ProfileText = () => {
  return (
    <div className={styles.col}>
      <h1>Who am I?</h1>

      <div>
        <ProfileItem icon={MdPersonOutline} text="Tyler Vergho" title="name" />
        <ProfileItem icon={MdPublic} text="California" title="location" />
        <ProfileItem icon={MdMailOutline} text="tvergho@gmail.com" title="email" />
        <ProfileItem icon={MdImportContacts} text="Computer Science" title="major" />
      </div>

      <div>
        <h2>Elevator Pitch</h2>
        <div>
          I’m a sophomore at <span style={{ fontWeight: 700 }}>Dartmouth College</span> with several years’ experience building websites and mobile apps using the latest technologies and frameworks.
          Currently, I’m working on <a href="https://recme.app" target="_blank" rel="noreferrer"><span style={{ fontWeight: 700 }}>RecMe</span></a>,
          an app that rewards sharing businesses with your friends.
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
    </motion.section>
  );
};

export default Profile;
