<template>
  <div :class="['space-background', theme]" ref="spaceBackground">
    <!-- Affichage des étoiles -->
    <div v-for="star in stars" :key="star.id" class="star" :style="star.style" aria-hidden="true"></div>
    <!-- Affichage des planètes -->
    <div v-for="planet in planets" :key="planet.id" class="planet" :style="planet.style" aria-hidden="true"></div>

    <!-- Message d'erreur -->
    <div class="error-message">
      <div class="error-code">404</div>
      <div class="error-text">Perdu dans l'Espace</div>
      <button @click="goHome" class="home-button">Retour à la Terre</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useThemeVars } from 'naive-ui';

const props = defineProps({
  theme: {
    type: String,
    default: 'light'
  }
});

const router = useRouter();
const themeVars = useThemeVars();
const spaceBackground = ref(null);
const stars = ref([]);
const planets = ref([]);

const isDarkTheme = computed(() => props.theme === 'dark');

const createStars = () => {
  const starCount = 100;
  stars.value = Array.from({ length: starCount }, (_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 3}px`,
      height: `${Math.random() * 3}px`,
      animationDuration: `${Math.random() * 3 + 1}s`,
      animationDelay: `${Math.random() * 2}s`,
    },
  }));
};

const createPlanets = () => {
  const planetData = [
    { color: isDarkTheme.value ? themeVars.value.infoColor : themeVars.value.primaryColor, size: 50 },
    { color: isDarkTheme.value ? themeVars.value.successColor : themeVars.value.warningColor, size: 30 },
    { color: isDarkTheme.value ? themeVars.value.warningColor : themeVars.value.errorColor, size: 40 },
  ];
  planets.value = planetData.map((data, index) => ({
    id: index,
    style: {
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 80 + 10}%`,
      width: `${data.size}px`,
      height: `${data.size}px`,
      backgroundColor: data.color,
      animationDuration: `${Math.random() * 20 + 10}s`,
    },
  }));
};

const handleParallax = (e) => {
  if (!spaceBackground.value) return;
  const { clientX, clientY } = e;
  const { offsetWidth, offsetHeight } = spaceBackground.value;
  const moveX = (clientX / offsetWidth - 0.5) * 20;
  const moveY = (clientY / offsetHeight - 0.5) * 20;
  spaceBackground.value.style.transform = `translate(${moveX}px, ${moveY}px)`;
};

const goHome = () => {
  router.push('/');
};

onMounted(() => {
  createStars();
  createPlanets();
  window.addEventListener('mousemove', handleParallax);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleParallax);
});
</script>

<style scoped>
.space-background {
  height: 100vh;
  overflow: hidden;
  position: relative;
  transition: transform 0.1s ease-out;
}

.space-background.light {
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
}

.space-background.dark {
  background: radial-gradient(ellipse at bottom, #0A0E17 0%, #030305 100%);
}

.star {
  position: absolute;
  border-radius: 50%;
  opacity: 0.8;
  animation: twinkle linear infinite;
}

.light .star {
  background-color: #ffffff;
}

.dark .star {
  background-color: #ffffff;
}

.planet {
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  animation: float linear infinite;
}

.error-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
}

.light .error-message,
.dark .error-message {
  color: #ffffff;
}

.error-code {
  font-size: 8em;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.error-text {
  font-size: 2em;
  margin-top: 0.5em;
}

.home-button {
  margin-top: 2em;
  padding: 0.5em 1em;
  font-size: 1.2em;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
}

.home-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

@keyframes twinkle {

  0%,
  100% {
    opacity: 0.8;
  }

  50% {
    opacity: 0.4;
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }
}

@media (max-width: 768px) {
  .error-code {
    font-size: 6em;
  }

  .error-text {
    font-size: 1.5em;
  }

  .home-button {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .error-code {
    font-size: 4em;
  }

  .error-text {
    font-size: 1.2em;
  }

  .home-button {
    font-size: 0.9em;
  }
}
</style>
