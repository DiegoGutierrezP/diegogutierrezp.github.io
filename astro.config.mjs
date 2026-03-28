// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true
    }
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Rubik",
      cssVariable: "--font-rubik",
      options: {}
    },
    {
      provider: fontProviders.google(),
      name: "Roboto Mono",
      cssVariable: "--font-roboto-mono",
      weights: [400, 500, 700, 800, 900],
       display: "swap",
      options: {}
    },
    {
      provider: fontProviders.google(),
      name: "Montserrat",
      cssVariable: "--font-montserrat",
      weights: [400, 500, 700, 800, 900],
      display: "swap",
      options: {}
    },
    {
      provider: fontProviders.google(),
      name: "Outfit",
      cssVariable: "--font-outfit",
      weights: [400, 500, 700, 800, 900],
      display: "swap",
      options: {}
    }
  ]
});