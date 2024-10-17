import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  // Application en mode SPA
  ssr: false,

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  css: ["vfonts/Lato.css"],

  modules: [
    // Assurez-vous que le module est compatible avec Nuxt 3
    "@nuxtjs/robots",
  ],

  robots: {
    UserAgent: "*",
    Disallow: ["/error", "/admin"],
    Allow: "/",
    Sitemap: "https://404.mickaellherminez.net/sitemap.xml", // Mettez votre URL réelle ici
  },

  build: {
    transpile:
      process.env.NODE_ENV === "production"
        ? [
            "naive-ui",
            "vueuc",
            "@css-render/vue3-ssr",
            "@juggle/resize-observer",
          ]
        : ["@juggle/resize-observer"],
  },

  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === "development"
          ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"]
          : [],
    },
  },

  nitro: {
    compressPublicAssets: true,
  },

  compatibilityDate: "2024-10-16",
});