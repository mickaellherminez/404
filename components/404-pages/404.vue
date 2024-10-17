<template>
  <div class="error-container">
    <div class="error-content">
      <h1 class="error-title">404</h1>
      <h2 class="error-subtitle">Page non trouvée</h2>
      <p class="error-message">La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <NuxtLink to="/" class="error-link">Retour à l'accueil</NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f7;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.error-content {
  text-align: center;
  max-width: 600px;
  padding: 0 20px;
}

.error-title {
  font-size: 8rem;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0;
  line-height: 1;
}

.error-subtitle {
  font-size: 2rem;
  font-weight: 400;
  color: #1d1d1f;
  margin: 20px 0;
}

.error-message {
  font-size: 1.1rem;
  color: #86868b;
  line-height: 1.5;
  margin-bottom: 30px;
}

.error-link {
  display: inline-block;
  background-color: #0071e3;
  color: #ffffff;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 980px;
  font-size: 1rem;
  font-weight: 400;
  transition: background-color 0.3s ease;
}

.error-link:hover {
  background-color: #0077ed;
}

@media (max-width: 768px) {
  .error-title {
    font-size: 6rem;
  }

  .error-subtitle {
    font-size: 1.5rem;
  }

  .error-message {
    font-size: 1rem;
  }
}
</style>