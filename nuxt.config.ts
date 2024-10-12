import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // Active le rendu côté serveur
  target: 'server', // Utilisez 'server' pour SSR
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: true,
})
