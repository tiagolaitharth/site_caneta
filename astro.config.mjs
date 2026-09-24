// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://site-caneta-chi.vercel.app',
  trailingSlash: 'always',
  redirects: {
    '/pagina-2': '/catalogo/',
    '/pagina-3': '/produtos/6061-pearl/',
  },
});
