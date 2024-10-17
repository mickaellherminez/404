<template>
  <div class="space-background">
    <div class="error-message">
      <div class="error-code">404</div>
      <div>Perdu dans l'Espace</div>
    </div>
    <!-- Afficher les étoiles -->
    <div
      v-for="star in stars"
      :key="star.id"
      class="star"
      :style="star.style"
      :data-rellax-speed="star.speed"
      aria-hidden="true"
    ></div>
    <!-- Afficher les planètes -->
    <div
      v-for="planet in planets"
      :key="planet.id"
      class="planet"
      :style="planet.style"
      :data-rellax-speed="planet.speed"
      aria-hidden="true"
    ></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Rellax from 'rellax';

const stars = ref([]);
const planets = ref([]);

const createStar = () => {
  const size = Math.random() * 3;
  const star = {
    id: Math.random().toString(36).substr(2, 9),
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 200}%`,
      width: `${size}px`,
      height: `${size}px`,
      opacity: 0.8,
      position: 'absolute',
      backgroundColor: 'white',
      borderRadius: '50%',
    },
    speed: (Math.random() * 2 + 1).toFixed(2),
  };
  stars.value.push(star);
};

const createPlanet = (x, y, color) => {
  const size = Math.random() * 50 + 20;
  const planet = {
    id: Math.random().toString(36).substr(2, 9),
    style: {
      left: `${x}px`,
      top: `${y}px`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      position: 'absolute',
      borderRadius: '50%',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
    },
    speed: (Math.random() * 2 + 1).toFixed(2),
  };
  planets.value.push(planet);
};

onMounted(() => {
  // Créer des étoiles
  for (let i = 0; i < 100; i++) {
    createStar();
  }

  // Créer des planètes
  createPlanet(100, 100, '#FF6B6B');
  createPlanet(200, 500, '#4ECDC4');
  createPlanet(800, 200, '#45B7D1');

  // Initialiser Rellax
  new Rellax('.star, .planet', {
    speed: -2,
    center: false,
    round: true,
    vertical: true,
    horizontal: false,
  });
});
</script>

<style scoped>
body,
html {
  height: 100%;
  margin: 0;
  font-family: Arial, sans-serif;
  color: white;
  overflow-x: hidden;
  background: black;
}

.space-background {
  background: url('https://path-to-your-space-image.jpg') no-repeat center center fixed;
  background-size: cover;
  height: 200vh;
  position: relative;
}

.error-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 4em;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.error-code {
  font-size: 2em;
  font-weight: bold;
}

.star {
  will-change: transform;
}

.planet {
  will-change: transform;
}
</style>
