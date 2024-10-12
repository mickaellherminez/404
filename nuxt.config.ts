import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // Active le rendu côté serveur
  target: 'server', // Utilisez 'server' pour SSR
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Mode de rendu
  ssr: true,

  // Configuration du serveur
  server: {
    port: 3000, // Port par défaut
    host: '0.0.0.0' // Pour permettre l'accès externe
  },

  // Modules Nuxt
  modules: [
    // Ajoutez ici les modules dont vous avez besoin, par exemple :
    // '@nuxtjs/axios',
    // '@nuxtjs/pwa',
  ],

  // Configuration des composants automatiques
  components: true,

  // Configuration du build
  build: {
    transpile: [], // Ajoutez ici les dépendances à transpiler si nécessaire
  },

  // Configuration des styles globaux
  css: [
    // Ajoutez ici vos fichiers CSS globaux
  ],

  // Configuration des plugins
  plugins: [
    // Ajoutez ici vos plugins
  ],

  // Configuration des variables d'environnement publiques
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'https://api.example.com'
    }
  },

  // Configuration des métadonnées de l'application
  app: {
    head: {
      title: 'Mon Application Nuxt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Description de mon application Nuxt' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  // Configuration pour la page d'erreur personnalisée
  error: {
    statusCode: 404,
    message: 'Page non trouvée',
    component: '~/pages/404.vue'
  },

  generate: {
    routes: ['/about']
  }
})
