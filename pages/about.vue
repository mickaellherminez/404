<template>
  <n-layout style="min-height: 100vh;">
    <n-layout-content>
      <!-- Hero Section -->
      <n-space vertical size="large" class="about-hero-section">
        <n-h1 class="main-title">Qui sommes-nous ?</n-h1>
        <n-p class="subtitle">Découvrez l'histoire, la mission et l'équipe derrière 404 Gallery.</n-p>
        <n-button type="primary" size="large" @click="exploreGallery" class="cta-button">
          Explorer la Galerie
        </n-button>
      </n-space>

      <!-- Our Mission Section -->
      <n-card class="mission-section">
        <n-h2>Notre Mission</n-h2>
        <n-p>
          Chez 404 Gallery, nous transformons les erreurs en opportunités créatives. Notre mission est de rendre les pages d'erreur aussi esthétiques et engageantes que le reste du web, en les replaçant au centre de l'expérience utilisateur.
        </n-p>
      </n-card>

      <!-- Team Section -->
      <n-space vertical size="large" class="team-section">
        <n-h2>Notre Équipe</n-h2>
        <n-grid x-gap="24" y-gap="24" cols="1 s:2 m:3" responsive="screen">
          <n-gi v-for="member in teamMembers" :key="member.name">
            <n-card class="team-card">
              <n-avatar round size="large" :src="member.avatar"></n-avatar>
              <n-h3>{{ member.name }}</n-h3>
              <n-p>{{ member.role }}</n-p>
              <n-p class="team-description">{{ member.description }}</n-p>
            </n-card>
          </n-gi>
        </n-grid>
      </n-space>

      <!-- Call to Action Section -->
      <n-space vertical size="large" class="cta-section alt-cta-section">
        <n-h2>Prêt à explorer nos pages 404 ?</n-h2>
        <n-p>Découvrez des centaines de pages d'erreur conçues pour inspirer votre prochain projet web.</n-p>
        <n-button type="primary" size="large" @click="exploreGallery">
          Découvrir la Galerie
        </n-button>
      </n-space>

      <!-- Return to Home Section -->
      <n-space vertical size="small" class="return-home-section">
        <NuxtLink to="/" class="return-link">Retour à l'accueil</NuxtLink>
      </n-space>
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
  useThemeVars,
  NAvatar
} from 'naive-ui'

const router = useRouter()
const themeVars = useThemeVars()


const exploreGallery = () => {
  router.push('/gallery')
}

const teamMembers = [
  {
    name: "Mickael Lherminez",
    role: "Fondateur & Développeur Principal",
    avatar: "https://404.mickaellherminez.net/mickaellherminez.png",
    description: "Mickael est le créateur de 404 Gallery, passionné par le développement et le design web. Il adore transformer des pages d'erreur en œuvres d'art qui surprennent et amusent."
  },
  {
    name: "Alice Dupont",
    role: "Designer UI/UX",
    avatar: "https://404.mickaellherminez.net/alicedupont.png",
    description: "Alice est en charge de l'expérience visuelle. Son objectif est de créer des designs qui captivent l'attention des utilisateurs tout en restant fonctionnels et esthétiques."
  },
  {
    name: "Jean Martin",
    role: "Développeur Front-End",
    avatar: "https://404.mickaellherminez.net/jeanmartin.png",
    description: "Jean travaille sur les différentes interactions de nos pages 404. Il est expert en Vue.js et s'assure que chaque page soit fluide et réactive."
  }
]
</script>

<style scoped>
.about-hero-section,
.mission-section,
.team-section,
.cta-section,
.return-home-section {
  padding: 60px 24px;
  text-align: center;
}

.about-hero-section {
  background: v-bind('`linear-gradient(135deg, ${themeVars.bodyColor} 0%, ${themeVars.cardColor} 100%)`');
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

.mission-section {
  background-color: v-bind('themeVars.cardColor');
  padding: 80px 32px;
  border-radius: 15px;
  color: v-bind('themeVars.textColor');
  box-shadow: v-bind('`0 4px 15px ${themeVars.boxShadowColor}`');
}

.team-section {
  padding: 80px 24px;
}

.team-card {
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  background-color: v-bind('themeVars.cardColor');
  color: v-bind('themeVars.textColor');
  box-shadow: v-bind('`0 4px 15px ${themeVars.boxShadowColor}`');
}

.team-description {
  margin-top: 10px;
  font-size: 0.9rem;
  color: v-bind('themeVars.textColorSecondary');
}

.alt-cta-section {
  background: v-bind('`linear-gradient(135deg, ${themeVars.cardColor} 0%, ${themeVars.bodyColor} 100%)`');
  padding: 80px 32px;
  border-radius: 15px;
}

.return-link {
  font-size: 1rem;
  text-decoration: none;
  color: v-bind('themeVars.primaryColor');
  transition: color 0.3s ease;
}

.return-link:hover {
  color: v-bind('themeVars.primaryColorHover');
}

@media (max-width: 768px) {
  .about-hero-section,
  .mission-section,
  .team-section,
  .cta-section,
  .return-home-section {
    padding: 40px 16px;
  }
}
</style>