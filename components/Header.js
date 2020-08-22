import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useWindowSize from 'utils/useWindowSize';
import { FaAlignJustify } from 'react-icons/fa';

const DesktopNav = ({ secondaryColor, links }) => {
  const [hovering, setHovering] = useState('');

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { name, ref } = link;
        return (
          <motion.button
            type="button"
            name={name}
            onClick={() => { ref.current.scrollIntoView({ behavior: 'smooth' }); }}
            style={hovering === name ? { color: secondaryColor } : {}}
            onMouseEnter={(e) => { setHovering(e.target.name); }}
            onMouseLeave={() => { setHovering(''); }}
            key={name}
          >{name}
          </motion.button>
        );
      })}
    </div>
  );
};

const MobileNav = ({ links }) => {
  const [shown, setShown] = useState(false);

  const onClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setShown(false);
  };

  return (
    <>
      <button className="transparent-button" type="button" name="header" onClick={() => { setShown((prev) => !prev); }}>
        <FaAlignJustify size="1.5rem" />
      </button>
      <motion.div animate={{ height: shown ? 'auto' : '0px' }} className="mobile-select">
        {links.map((link) => {
          const { name, ref } = link;
          return (
            <button
              type="button"
              name={name}
              onClick={() => { onClick(ref); }}
              key={name}
            >{name}
            </button>
          );
        })}
      </motion.div>
    </>
  );
};

const Header = ({ accentColor, secondaryColor, links }) => {
  const { width } = useWindowSize();

  return (
    <motion.header style={{ color: accentColor }}>
      <div className="logo">TYLER VERGHO</div>

      {typeof window !== 'undefined' && width > 768 && (
        <DesktopNav secondaryColor={secondaryColor} links={links} />
      )}
      {typeof window !== 'undefined' && width <= 768 && (
        <MobileNav links={links} />
      )}
    </motion.header>
  );
};

Header.propTypes = {
  accentColor: PropTypes.oneOf([PropTypes.object, PropTypes.string]).isRequired,
  secondaryColor: PropTypes.oneOf([PropTypes.object, PropTypes.string]),
  links: PropTypes.shape({
    name: PropTypes.string,
    ref: PropTypes.func,
  }).isRequired,
};

export default Header;
