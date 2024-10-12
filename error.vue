<template>
  <div class="error-container">
    <h1 class="error-title">Erreur {{ error.statusCode }}</h1>
    <p class="error-message">{{ error.message || "Une erreur s'est produite" }}</p>
    <button class="error-button" @click="handleError">Retour à l'accueil</button>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-family: Arial, sans-serif;
}

.error-title {
  font-size: 3rem;
  color: #e53e3e;
  margin-bottom: 1rem;
}

.error-message {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 2rem;
}

.error-button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: #3182ce;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.error-button:hover {
  background-color: #2c5282;
}
</style>
