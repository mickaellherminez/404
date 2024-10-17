import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  // Application en mode SSR (Server-Side Rendering)
  ssr: true,

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  css: ["vfonts/Lato.css"],

  modules: ["@nuxtjs/robots"],

  robots: {
    UserAgent: "*",
    Disallow: ["/error", "/admin"],
    Allow: "/",
    Sitemap: "https://404.mickaellherminez.net/sitemap.xml",
  },

  build: {
    transpile: [
      "naive-ui",
      "vueuc",
      "@css-render/vue3-ssr",
      "@juggle/resize-observer",
    ],
  },

  vite: {
    optimizeDeps: {
      include: ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"],
    },
    build: {
      minify: "terser",
      cssMinify: true,
    },
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },

  experimental: {
    payloadExtraction: false,
  },

  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || "https://404.mickaellherminez.net",
    },
  },

  routeRules: {
    "/**": { swr: true },
  },

  generate: {
    fallback: true,
  },

  compatibilityDate: "2024-10-16",
});
