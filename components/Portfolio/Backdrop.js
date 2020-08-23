import React from 'react';
import styles from 'styles/portfolio.module.scss';
import { motion } from 'framer-motion';
import useDelay from 'utils/useDelay';
import PropTypes from 'prop-types';

const Backdrop = ({
  onMouseEnter, onMouseLeave, showBackdrop, height, width, title, description, technologies, href,
}) => {
  const delayClose = useDelay(showBackdrop, 300, false, true);
  const delayOpen = useDelay(showBackdrop, 300, true, false);

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <motion.div
        className={styles.backdrop}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        animate={{ opacity: showBackdrop ? 0.9 : 0 }}
        style={{ display: delayClose ? '' : 'none', height, width }}
      >
        <h1>{title}</h1>
        <motion.div className={styles.divider} animate={{ width: delayOpen ? '80%' : '0%' }} transition={{ duration: delayOpen ? 0.6 : 0 }} />
        <div className={styles.desc}>{description}</div>
        <div className={styles.tech}>{technologies.join(', ')}</div>
      </motion.div>
    </a>
  );
};

Backdrop.propTypes = {
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  showBackdrop: PropTypes.bool.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  description: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  href: PropTypes.string,
};

export default Backdrop;
