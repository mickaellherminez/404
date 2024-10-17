<template>
  <n-layout style="min-height: 100vh;">
    <n-layout-content>
      <!-- Hero Section -->
      <n-space vertical size="large" class="hero-section">
        <n-h1 class="main-title">404 Gallery</n-h1>
        <n-p class="subtitle">
          Votre collection ultime de pages d'erreur 404 créatives et fonctionnelles
        </n-p>
        <n-button type="primary" size="large" @click="exploreGallery" class="cta-button">
          Explorer la Galerie
        </n-button>
      </n-space>

      <!-- Features Section -->
      <n-space vertical size="large" class="features-section">
        <n-grid x-gap="24" y-gap="24" cols="1 s:2 m:3" responsive="screen">
          <n-gi v-for="feature in features" :key="feature.title">
            <n-card class="feature-card">
              <template #header>
                <n-space align="center">
                  <n-icon size="24" :component="feature.icon" />
                  <n-h3>{{ feature.title }}</n-h3>
                </n-space>
              </template>
              <n-p>{{ feature.description }}</n-p>
            </n-card>
          </n-gi>
        </n-grid>
      </n-space>

      <!-- Featured Gallery Section -->
      <n-space vertical size="large" class="gallery-section">
        <n-h2>Galerie en Vedette</n-h2>
        <n-grid x-gap="24" y-gap="24" cols="1 s:2 m:3" responsive="screen">
          <n-gi v-for="page in featuredPages" :key="page.id">
            <n-card class="gallery-card" :hoverable="true" @click="navigateToPage(page.id)">
              <img :src="page.image" :alt="page.title" class="gallery-image" />
              <n-space vertical size="small" align="center">
                <n-h3>{{ page.title }}</n-h3>
                <n-p>{{ page.description }}</n-p>
              </n-space>
            </n-card>
          </n-gi>
        </n-grid>
      </n-space>

      <!-- Call to Action Section -->
      <n-space vertical size="large" class="cta-section alt-cta-section">
        <n-h2>Prêt à explorer ?</n-h2>
        <n-p>
          Découvrez notre collection de pages 404 qui transforment les erreurs en une expérience unique et mémorable.
        </n-p>
        <n-button type="primary" size="large" @click="exploreGallery" class="cta-button">
          Découvrir Maintenant
        </n-button>
      </n-space>

      <!-- About Creator Section -->
      <n-card class="about-section alt-about-section">
        <n-space align="center" justify="center">
          <n-avatar round size="large" :src="defaultAvatar"></n-avatar>
          <div>
            <n-h3>Qui suis-je ?</n-h3>
            <n-p>
              Salut ! Je suis Mickael, un passionné de design et de développement web, et l'esprit créatif derrière 404
              Gallery. Mon objectif est de transformer chaque page d'erreur en une opportunité amusante qui divertit les
              utilisateurs. Rejoignez-moi pour redéfinir les erreurs !
            </n-p>
            <n-button type="primary" size="small" @click="navigateToContact" class="fun-button">
              Échangeons ensemble !
            </n-button>
          </div>
        </n-space>
      </n-card>
    </n-layout-content>
  </n-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  NLayout,
  NLayoutContent,
  NSpace,
  NCard,
  NH1,
  NH2,
  NH3,
  NP,
  NButton,
  NGrid,
  NGi,
  NIcon,
  useThemeVars,
  NAvatar,
} from 'naive-ui';
import {
  BookOutline,
  LibraryOutline,
  ContrastOutline,
  FolderOpenOutline,
  PhonePortraitOutline,
  CodeSlashOutline,
} from '@vicons/ionicons5';

// Importer les données des pages
import pagesData from '~/data/pagesData.js';

const router = useRouter();
const themeVars = useThemeVars();

const features = [
  {
    title: 'Mille et Une Pages 404',
    description:
      "Explorez notre vaste collection de pages d'erreur 404 uniques, conçues pour inspirer et améliorer l'expérience utilisateur.",
    icon: BookOutline,
  },
  {
    title: 'Diversité des Librairies',
    description:
      'Découvrez des exemples créés avec diverses librairies front-end populaires, montrant la polyvalence du design web moderne.',
    icon: LibraryOutline,
  },
  {
    title: 'Thèmes Light & Dark',
    description:
      'Chaque page est disponible en version claire et sombre, s’adaptant aux préférences visuelles de tous les utilisateurs.',
    icon: ContrastOutline,
  },
  {
    title: 'Catégories Organisées',
    description:
      'Naviguez facilement à travers nos pages 404 classées par catégories et par librairies pour trouver rapidement l’inspiration dont vous avez besoin.',
    icon: FolderOpenOutline,
  },
  {
    title: '100% Responsive',
    description:
      'Toutes nos pages sont conçues pour s’adapter parfaitement à tous les appareils, des smartphones aux grands écrans.',
    icon: PhonePortraitOutline,
  },
  {
    title: 'Code Source Disponible',
    description:
      'Accédez au code source de chaque exemple pour l’implémenter facilement dans vos propres projets.',
    icon: CodeSlashOutline,
  },
];

// Sélectionner quelques pages pour la galerie en vedette
const featuredPages = ref(pagesData.slice(0, 6));

const exploreGallery = () => {
  router.push('/gallery');
};

const navigateToPage = (id) => {
  router.push(`/pages/${id}`);
};

const navigateToContact = () => {
  router.push('/contact');
};

const defaultAvatar = 'https://404.mickaellherminez.net/mickaellherminez.png';
</script>

<style scoped>
.hero-section,
.features-section,
.cta-section,
.about-section,
.gallery-section {
  padding: 60px 24px;
  text-align: center;
}

.hero-section {
  background: v-bind(
    '`linear-gradient(135deg, ${themeVars.bodyColor} 0%, ${themeVars.cardColor} 100%)`'
  );
  color: v-bind('themeVars.textColor');
}

.main-title {
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: clamp(1rem, 3vw, 1.5rem);
  max-width: 800px;
  margin: 0 auto 2rem;
}

.cta-button,
.cta-section .n-button {
  font-size: clamp(1rem, 2vw, 1.2rem);
  padding: 12px 24px;
}

.feature-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  transition: all 0.3s ease;
  overflow: hidden;
  background-color: v-bind('themeVars.cardColor');
  color: v-bind('themeVars.textColor');
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: v-bind('`0 10px 20px ${themeVars.boxShadowColor}`');
}

.gallery-card {
  cursor: pointer;
  transition: transform 0.3s ease;
  text-align: center;
}

.gallery-card:hover {
  transform: translateY(-5px);
}

.gallery-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.alt-cta-section {
  background: v-bind(
    '`linear-gradient(135deg, ${themeVars.cardColor} 0%, ${themeVars.bodyColor} 100%)`'
  );
  padding: 80px 32px;
  border-radius: 15px;
}

.alt-about-section {
  background-color: v-bind('themeVars.cardColor');
  padding: 60px 24px;
  border-radius: 15px;
  box-shadow: v-bind('`0 4px 15px ${themeVars.boxShadowColor}`');
}

.about-section {
  max-width: 800px;
  margin: 40px auto;
}

.about-section :deep(.n-avatar) {
  width: 100px;
  height: 100px;
  margin-right: 20px;
  font-size: 36px;
}

.about-section :deep(.n-h3) {
  margin-bottom: 10px;
}

.about-section .fun-button {
  margin-top: 10px;
}

@media (max-width: 768px) {
  .hero-section,
  .features-section,
  .cta-section,
  .about-section,
  .gallery-section {
    padding: 40px 16px;
  }
}

@media (max-width: 600px) {
  .about-section :deep(.n-space) {
    flex-direction: column;
    text-align: center;
  }

  .about-section :deep(.n-avatar) {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>
