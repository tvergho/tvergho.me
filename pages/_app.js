import React from 'react';
import mixpanel from 'mixpanel-browser';
import 'styles/global.scss';

mixpanel.init('07ff7432cf4bf799bbda57ddcb266968', { debug: process.env.NODE_ENV === 'development' });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
