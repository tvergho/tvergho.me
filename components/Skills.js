import React from 'react';
import styles from 'styles/skills.module.scss';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useScrollPosition from 'utils/useScrollPosition';
import useDelay from 'utils/useDelay';
import {
  Javascript, ReactIcon, ReactNative, HTML, PyTorch, WebDesign, Python, AWS,
} from './frameworkLogos';

const SkillItem = ({
  icon: Icon, name, progress, scrolled,
}) => {
  const delay = useDelay(scrolled, 500, true, false);

  return (
    <div className={styles.skill}>
      <Icon />

      <div className={styles.content}>
        <div className={styles.name}>{name}</div>
        <div className={styles.progress}>
          <motion.div
            className={styles.progressFill}
            style={{ display: delay ? '' : 'none', backgroundColor: delay ? '' : 'none' }}
            animate={{ width: delay ? progress : '0px' }}
            transition={{ duration: delay ? 0.7 : 0, type: delay ? 'spring' : 'tween', stiffness: 200 }}
          />
        </div>
      </div>
    </div>
  );
};

SkillItem.propTypes = {
  icon: PropTypes.func.isRequired,
  name: PropTypes.string,
  progress: PropTypes.string,
};

const Skills = ({ inputRef }) => {
  const scrolled = useScrollPosition(inputRef, 80);

  return (
    <section id="skills" className={`container ${styles.container}`} ref={inputRef}>
      <h1 className={styles.header}>Skills</h1>

      <div className={styles.skills}>
        <div className={styles.col}>
          <SkillItem icon={Javascript} name="Javascript" progress="95%" scrolled={scrolled} />
          <SkillItem icon={ReactIcon} name="React" progress="90%" scrolled={scrolled} />
          <SkillItem icon={ReactNative} name="React Native" progress="85%" scrolled={scrolled} />
          <SkillItem icon={HTML} name="HTML/CSS" progress="85%" scrolled={scrolled} />
        </div>
        <div className={styles.col}>
          <SkillItem icon={PyTorch} name="PyTorch" progress="60%" scrolled={scrolled} />
          <SkillItem icon={WebDesign} name="Web Design" progress="70%" scrolled={scrolled} />
          <SkillItem icon={Python} name="Python" progress="75%" scrolled={scrolled} />
          <SkillItem icon={AWS} name="AWS" progress="70%" scrolled={scrolled} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
