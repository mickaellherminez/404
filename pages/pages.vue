<template>
  <div>
    <h1>Page {{ $route.params.id }}</h1>
    <component :is="currentPageComponent" v-if="currentPageComponent" />
    <p v-else>Page non trouvée</p>
  </div>
</template>

<script setup>
import { ref, computed, defineAsyncComponent, markRaw } from 'vue'
import { useRoute } from 'vue-router'
import pagesData from '~/data/pagesData.js'

const route = useRoute()
const currentPageComponent = ref(null)

const pageId = computed(() => route.params.id)

const page = computed(() => pagesData.find(p => p.id === pageId.value))

// Use markRaw and correct import path
watch(page, (newPage) => {
  if (newPage && newPage.component) {
    currentPageComponent.value = markRaw(defineAsyncComponent(() =>
      import(`../components/404-pages/${newPage.component}`)
    ))
  } else {
    currentPageComponent.value = null
  }
}, { immediate: true })
</script>