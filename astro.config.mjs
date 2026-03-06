import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

export default defineConfig({
  integrations: [tailwind(), icon()],
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  server: {
    host: true,
  },
});