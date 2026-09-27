import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tvergho.com',
  // One tiny page: inline the CSS so there is no second round trip.
  build: { inlineStylesheets: 'always' },
});
