<template>
  <div class="error-page">
    <h1>404 - Page non trouvée</h1>
    <p>Désolé, la page que vous recherchez n'existe pas.</p>
    <NuxtLink to="/">Retour à l'accueil</NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.error-page {
  text-align: center;
  padding: 2rem;
}
</style>
