<template>
  <div>
    <h1>Erreur 404</h1>
    <p>La page que vous recherchez n'existe pas.</p>
    <button @click="handleError">Retour à l'accueil</button>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>