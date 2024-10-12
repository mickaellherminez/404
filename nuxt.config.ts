import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Désactive le rendu côté serveur pour un site statique
  target: 'static', // Utilisez 'static' pour un site statique
  app: {
    head: {
      title: 'Mon Application Nuxt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  generate: {
    fallback: true
  },
  hooks: {
    'generate:done': (generator) => {
      // Copier 404.html à la racine
      const fs = require('fs');
      const path = require('path');
      fs.copyFileSync(
        path.resolve(generator.nuxt.options.buildDir, 'dist/404/index.html'),
        path.resolve(generator.nuxt.options.buildDir, 'dist/404.html')
      );
    }
  },
  modules: [
    '@chakra-ui/nuxt'
  ],
})
