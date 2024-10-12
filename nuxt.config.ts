import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Désactive le rendu côté serveur pour un site statique
  target: 'static', // Utilisez 'static' pour un site statique
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
  generate: {
    fallback: true // Génère un fichier 404.html
  },
  hooks: {
    'build:done': (builder) => {
      const fs = require('fs');
      const path = require('path');
      const htaccessContent = `
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   
   ErrorDocument 404 /404.html
      `;
      fs.writeFileSync(path.resolve(builder.options.buildDir, 'dist', '.htaccess'), htaccessContent);
    }
  }
})
