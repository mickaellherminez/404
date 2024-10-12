import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static', // Assurez-vous que le mode est défini sur 'static'
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
