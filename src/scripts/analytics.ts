// Only collect visits to the public site, never local or Netlify preview builds.
if (import.meta.env.PROD && ['tvergho.com', 'www.tvergho.com'].includes(location.hostname)) {
  void import('posthog-js').then(({ default: posthog }) => {
    posthog.init('phc_rKoygC5UGNLU7KNrowMjDEyktuBLxfvEbAJyisz38qQY', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'never',
      autocapture: false,
      capture_pageview: true,
      capture_pageleave: true,
      disable_session_recording: true,
      disable_surveys: true,
      persistence: 'sessionStorage',
    });

    document.addEventListener('click', (event) => {
      const link = event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>('a[data-analytics-event]')
        : null;
      if (!link) return;
      posthog.capture(link.dataset.analyticsEvent!, {
        destination: link.dataset.analyticsDestination,
      });
    });
  }).catch(() => {
    // Analytics blockers or network failures must not affect the page.
  });
}
