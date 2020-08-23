import React, { useState, useEffect } from 'react';

const useDelay = (prop, delay, delayOpen = false, delayClose = true) => {
  const [delayedProp, setDelayedProp] = useState(prop);

  const delayToUse = delay || 500;

  useEffect(() => {
    if ((!prop && delayClose) || (prop && delayOpen)) {
      setTimeout(() => { setDelayedProp(prop); }, delayToUse);
    } else setDelayedProp(prop);
  }, [prop]);

  return delayedProp;
};

export default useDelay;
