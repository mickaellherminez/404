<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

router.onError((error, to) => {
  if (error.message.includes('Failed to fetch dynamically imported module') || error.message.includes('Chunkload failed')) {
    // Rediriger vers la page 404 en cas d'erreur de chargement
    router.push('/404')
  }
})
</script>
