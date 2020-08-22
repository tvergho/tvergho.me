import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useWindowSize from 'utils/useWindowSize';
import { FaAlignJustify } from 'react-icons/fa';
import useDelay from 'utils/useDelay';
import Link from 'next/link';

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
            onClick={() => { if (ref) ref.current.scrollIntoView({ behavior: 'smooth' }); }}
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

const MobileNav = ({ links, show, onChange }) => {
  const onClick = (ref) => {
    if (ref) ref.current.scrollIntoView({ behavior: 'smooth' });
    onChange(false);
  };

  return (
    <>
      <button className="transparent-button" type="button" name="header" onClick={() => { onChange((prev) => !prev); }}>
        <FaAlignJustify size="1.5rem" />
      </button>
      <motion.div animate={{ height: show ? 'auto' : '0px' }} className="mobile-select">
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

const Header = ({
  accentColor, secondaryColor, links,
}) => {
  const { width } = useWindowSize();
  const [showMobile, setShowMobile] = useState(false);
  const delay = useDelay(showMobile, 300, false, true);

  return (
    <>
      <motion.header style={{ color: accentColor }}>
        <div className="logo"><Link href="/">TYLER VERGHO</Link></div>

        {typeof window !== 'undefined' && width > 768 && (
          <DesktopNav secondaryColor={secondaryColor} links={links} />
        )}
        {typeof window !== 'undefined' && width <= 768 && (
          <MobileNav links={links} show={showMobile} onChange={setShowMobile} />
        )}
      </motion.header>
      <motion.div animate={{ opacity: showMobile ? 0.5 : 0 }} style={{ display: delay ? '' : 'none' }} className="backdrop" onClick={() => { setShowMobile(false); }} />
    </>
  );
};

Header.propTypes = {
  accentColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  secondaryColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    ref: PropTypes.object,
  })).isRequired,
};

export default Header;
