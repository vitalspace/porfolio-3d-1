import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';


import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://vitalspace.github.io/porfolio-3d-1/',
  base: '/',
  integrations: [tailwind(), svelte()]
});