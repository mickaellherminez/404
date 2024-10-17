<!-- pages/categories/[category].vue -->
<template>
  <div>
    <h1>Catégorie : {{ categoryName }}</h1>
    <ul>
      <li v-for="page in filteredPages" :key="page.id">
        <NuxtLink :to="`/pages/${page.id}`">{{ page.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import pagesData from '~/data/pagesData.js';

const route = useRoute();
const categoryName = route.params.category;
const filteredPages = pagesData.filter((page) =>
  page.categories.includes(categoryName)
);
</script>
