// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },
  //Deploy 20 Projects
  base: import.meta.env.DEV ? undefined : '/20-projects-with-vanilla-extract/',
  site: import.meta.env.DEV
    ? 'http://localhost:4321/'
    : 'https://20essentials.github.io/20-projects-with-vanilla-extract/'
});
