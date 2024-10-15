<template>
  <n-layout style="min-height: 100vh;">
    <n-layout-content>
      <!-- Hero Section -->
      <n-space vertical size="large" class="hero-section">
        <n-h1 class="main-title">404 Gallery</n-h1>
        <n-p class="subtitle">Votre collection ultime de pages d'erreur 404 créatives et fonctionnelles</n-p>
        <n-button type="primary" size="large" @click="exploreGallery" class="cta-button">
          Explorer la Galerie
        </n-button>
      </n-space>

      <!-- Features Section -->
      <div class="features-section">
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
      </div>

      <!-- Call to Action Section -->
      <n-card class="cta-section">
        <n-h2>Commencez votre exploration</n-h2>
        <n-p>Plongez dans notre galerie de pages 404 et trouvez l'inspiration pour votre prochain projet web.</n-p>
        <n-button type="primary" size="large" @click="exploreGallery">
          Découvrir les Pages 404
        </n-button>
      </n-card>

      <!-- About Creator Section -->
      <n-card class="about-section">
        <n-space align="center" justify="center">
          <n-avatar round size="large"
            src="https://404.mickaellherminez.net/mickaellherminez.png">
          </n-avatar>
          <div>
            <n-h3>Mickael Lherminez</n-h3>
            <n-p>
              Créateur passionné de 404 Gallery, Mickael est un développeur web expérimenté
              avec un œil pour le design et une passion pour l'innovation. Son objectif est
              de transformer les erreurs 404 en opportunités créatives pour améliorer
              l'expérience utilisateur sur le web.
            </n-p>
          </div>
        </n-space>
      </n-card>
    </n-layout-content>
  </n-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'
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
  NAvatar
} from 'naive-ui'
import {
  BookOutline,
  LibraryOutline,
  ContrastOutline,
  FolderOpenOutline,
  PhonePortraitOutline,
  CodeSlashOutline
} from '@vicons/ionicons5'

const router = useRouter()
const themeVars = useThemeVars()

const features = [
  {
    title: "Mille et Une Pages 404",
    description: "Explorez notre vaste collection de pages d'erreur 404 uniques, conçues pour inspirer et améliorer l'expérience utilisateur.",
    icon: BookOutline
  },
  {
    title: "Diversité des Librairies",
    description: "Découvrez des exemples créés avec diverses librairies front-end populaires, montrant la polyvalence du design web moderne.",
    icon: LibraryOutline
  },
  {
    title: "Thèmes Light & Dark",
    description: "Chaque page est disponible en version claire et sombre, s'adaptant aux préférences visuelles de tous les utilisateurs.",
    icon: ContrastOutline
  },
  {
    title: "Catégories Organisées",
    description: "Naviguez facilement à travers nos pages 404 classées par catégories et par librairies pour trouver rapidement l'inspiration dont vous avez besoin.",
    icon: FolderOpenOutline
  },
  {
    title: "100% Responsive",
    description: "Toutes nos pages sont conçues pour s'adapter parfaitement à tous les appareils, des smartphones aux grands écrans.",
    icon: PhonePortraitOutline
  },
  {
    title: "Code Source Disponible",
    description: "Accédez au code source de chaque exemple pour l'implémenter facilement dans vos propres projets.",
    icon: CodeSlashOutline
  }
]

const exploreGallery = () => {
  router.push('/gallery')
}

// Fallback image au cas où l'image principale ne se charge pas
const defaultAvatar = 'https://404.mickaellherminez.net/mickaellherminez.png' // Remplacez par une URL d'image par défaut
</script>

<style scoped>
.hero-section {
  background: v-bind('`linear-gradient(135deg, ${themeVars.bodyColor} 0%, ${themeVars.cardColor} 100%)`');
  color: v-bind('themeVars.textColor');
  padding: 80px 24px;
  text-align: center;
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

.cta-button {
  font-size: clamp(1rem, 2vw, 1.2rem);
  padding: 12px 24px;
}

.features-section {
  padding: 80px 24px;
  background-color: v-bind('themeVars.bodyColor');
  display: flex;
  justify-content: center;
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

.cta-section {
  text-align: center;
  padding: 80px 24px;
  background: v-bind('`linear-gradient(135deg, ${themeVars.cardColor} 0%, ${themeVars.bodyColor} 100%)`');
  color: v-bind('themeVars.textColor');
  border-radius: 15px;
  margin: 24px auto;
  max-width: 800px;
}

.cta-section :deep(.n-card-header) {
  padding-top: 0;
}

.cta-section .n-h2 {
  margin-bottom: 1rem;
}

.cta-section .n-p {
  margin: 0 auto 2rem;
}

.cta-section .n-button {
  font-size: clamp(1rem, 2vw, 1.2rem);
  padding: 12px 24px;
}

@media (max-width: 768px) {
  .hero-section, .features-section, .cta-section {
    padding: 40px 16px;
  }
}

.about-section {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
}

.about-section :deep(.n-avatar) {
  width: 100px;
  height: 100px;
  margin-right: 20px;
  font-size: 36px; /* Pour les initiales si l'image ne se charge pas */
}

.about-section :deep(.n-h3) {
  margin-bottom: 10px;
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
