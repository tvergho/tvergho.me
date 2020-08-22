import React, { useState, useLayoutEffect } from 'react';

const useScrollPosition = (ref, offset = 0) => {
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const pos = ref.current.offsetTop;

    const onScroll = () => {
      const scrollPos = document.body.scrollTop + window.innerHeight;
      if (pos + offset < scrollPos) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.body.addEventListener('scroll', onScroll);
    return () => document.body.removeEventListener('scroll', onScroll);
  }, []);

  return scrolled;
};

export default useScrollPosition;
