<template>
  <div>
    <h1>Page 404 - {{ page?.title }}</h1>
    <component :is="dynamicComponent" :theme="theme" />
    <p>{{ page?.description }}</p>
    <div v-if="page">
      <h2>Catégories:</h2>
      <ul>
        <li v-for="category in page.categories" :key="category">{{ category }}</li>
      </ul>
    </div>
    <div v-if="page">
      <h2>Technologies:</h2>
      <ul>
        <li v-for="tech in page.technologies" :key="tech">{{ tech }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import pagesData from '~/data/pagesData';

const route = useRoute();
const pageId = route.params.id;

const page = computed(() => pagesData.find(p => p.id === pageId));

const dynamicComponent = computed(() => {
  if (page.value) {
    return defineAsyncComponent(() => import(`../components/404-pages/${page.value.component}.vue`));
  }
  return null;
});

// You might want to get this from a store or prop
const theme = ref('light');
</script>

<style scoped>
/* Ajoutez ici vos styles spécifiques si nécessaire */
</style>
