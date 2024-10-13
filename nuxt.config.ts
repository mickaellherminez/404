import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  target: 'static',

  // ... autres configurations ...
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  css: [
    'vfonts/Lato.css'
  ],

  modules: [
    '@nuxtjs/robots',
  ],

  robots: {
    UserAgent: '*',
    Disallow: ['/error', '/admin'],
    Allow: '/',
    Sitemap: 'https://votresite.com/sitemap.xml'
  },

  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer'
          ]
        : ['@juggle/resize-observer']
  },

  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : []
    }
  },

  nitro: {
    compressPublicAssets: true,
  },

  experimental: {
    payloadExtraction: false
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'layouts/error.vue')
      })
    }
  },

  compatibilityDate: '2024-10-13'
})
