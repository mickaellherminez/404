<template>
  <div class="error-page">
    <h1>Erreur 404 - Page non trouvée</h1>
    <p>La page que vous recherchez n'existe pas.</p>
    <NuxtLink to="/">Retour à l'accueil</NuxtLink>
  </div>
</template>

<script setup>
// Pas besoin de definePageMeta ici pour une page 404 statique
</script>

<style scoped>
.error-page {
  text-align: center;
  padding: 2rem;
}
</style>
