import { defineNuxtConfig } from 'nuxt/config';
import fs from 'fs';
import path from 'path';

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
    fallback: true, // Génère un fichier 404.html
    routes: ['/404']
  },
  hooks: {
    'build:done': (builder: any) => {
      const htaccessContent = `
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

ErrorDocument 404 /404.html
      `;
      
      const distDir = path.resolve(__dirname, '.output', 'public');
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }
      fs.writeFileSync(path.join(distDir, '.htaccess'), htaccessContent);
    },
    'generate:done': (generator) => {
      // Copier 404.html à la racine
      fs.copyFileSync(
        path.resolve(generator.nuxt.options.buildDir, 'dist/404/index.html'),
        path.resolve(generator.nuxt.options.buildDir, 'dist/404.html')
      );
    }
  }
})
