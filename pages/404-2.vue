<template>
  <div class="space-background">
    <!-- Affichage des étoiles -->
    <div
      v-for="star in stars"
      :key="star.id"
      class="star"
      :style="star.style"
      aria-hidden="true"
    ></div>
    <!-- Affichage des planètes -->
    <div
      v-for="planet in planets"
      :key="planet.id"
      class="planet"
      :style="planet.style"
      aria-hidden="true"
    ></div>

    <!-- Message d'erreur -->
    <div class="error-message">
      <div class="error-code">404</div>
      <div>Perdu dans l'Espace</div>
    </div>

    <!-- Div supplémentaire pour permettre le défilement -->
    <div class="spacer"></div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'LostInSpace',
  setup() {
    const stars = ref([]);
    const planets = ref([]);

    const createStars = () => {
      for (let i = 0; i < 100; i++) {
        const size = Math.random() * 3;
        const ratio = Math.random() * 0.5 + 0.5;
        const initialTop = Math.random() * window.innerHeight * 2;

        stars.value.push({
          id: i,
          parallaxRatio: ratio,
          initialTop,
          style: {
            left: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: 0.8,
            position: 'absolute',
            backgroundColor: 'white',
            borderRadius: '50%',
            transform: `translateY(${initialTop}px)`,
            willChange: 'transform',
          },
        });
      }
    };

    const createPlanets = () => {
      const planetData = [
        { x: 100, y: 100, color: '#FF6B6B' },
        { x: 200, y: 500, color: '#4ECDC4' },
        { x: 800, y: 200, color: '#45B7D1' },
      ];
      planetData.forEach((data, index) => {
        const size = Math.random() * 50 + 20;
        const ratio = Math.random() * 0.3 + 0.7;

        planets.value.push({
          id: index,
          parallaxRatio: ratio,
          initialTop: data.y,
          style: {
            left: `${data.x}px`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: data.color,
            position: 'absolute',
            borderRadius: '50%',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
            transform: `translateY(${data.y}px)`,
            willChange: 'transform',
          },
        });
      });
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      stars.value.forEach((star) => {
        const offset = star.initialTop - scrollY * star.parallaxRatio;
        star.style.transform = `translateY(${offset}px)`;
      });
      planets.value.forEach((planet) => {
        const offset = planet.initialTop - scrollY * planet.parallaxRatio;
        planet.style.transform = `translateY(${offset}px)`;
      });
    };

    onMounted(() => {
      createStars();
      createPlanets();
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Appel initial pour positionner les éléments correctement
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      stars,
      planets,
    };
  },
};
</script>

<style scoped>
body, html {
  margin: 0;
  font-family: Arial, sans-serif;
  color: white;
  overflow-x: hidden;
  background: black;
}

.space-background {
  background: url('https://path-to-your-space-image.jpg') no-repeat center center fixed;
  background-size: cover;
  position: relative;
  min-height: 100vh;
}

.spacer {
  height: 200vh; /* Hauteur pour permettre le défilement */
}

.star {
  position: absolute;
  background-color: white;
  border-radius: 50%;
  opacity: 0.8;
}

.planet {
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.error-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 4em;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  z-index: 10; /* Pour que le message reste au-dessus des autres éléments */
}

.error-code {
  font-size: 2em;
  font-weight: bold;
}
</style>
