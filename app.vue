<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

router.onError((error) => {
  if (error.message.includes('Failed to fetch dynamically imported module') || error.message.includes('Chunkload failed')) {
    router.push('/404')
  }
})

// Redirection vers 404 si la page n'existe pas
if (process.client) {
  router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
      next('/404')
    } else {
      next()
    }
  })
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
