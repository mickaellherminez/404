import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Active le rendu côté serveur
  target: 'server', // Utilisez 'server' pour SSR
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: true,
  app: {
    head: {
      title: 'Mon Application Nuxt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
})
