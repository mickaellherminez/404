<!-- pages/technologies/[technology].vue -->
<template>
  <div>
    <h1>Technologie : {{ technologyName }}</h1>
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
const technologyName = route.params.technology;
const filteredPages = pagesData.filter((page) =>
  page.technologies.includes(technologyName)
);
</script>
