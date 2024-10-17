<template>
  <n-layout style="min-height: 100vh;">
    <n-layout-content>
      <n-space vertical size="large" class="gallery-page">
        <n-h1>Galerie Complète</n-h1>
        <n-grid x-gap="24" y-gap="24" cols="1 s:2 m:3" responsive="screen">
          <n-gi v-for="page in pagesData" :key="page.id">
            <n-card
              class="gallery-card"
              :hoverable="true"
              @click="navigateToPage(page.id)"
            >
              <img :src="page.image" :alt="page.title" class="gallery-image" />
              <n-space vertical size="small" align="center">
                <n-h3>{{ page.title }}</n-h3>
                <n-p>{{ page.description }}</n-p>
              </n-space>
            </n-card>
          </n-gi>
        </n-grid>
      </n-space>
    </n-layout-content>
  </n-layout>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { NLayout, NLayoutContent, NSpace, NGrid, NGi, NCard, NH1, NIcon } from 'naive-ui';
import pagesData from '~/data/pagesData.js';

const router = useRouter();

const navigateToPage = (id) => {
  router.push(`/pages/${id}`);
};
</script>

<style scoped>
.gallery-page {
  padding: 60px 24px;
  text-align: center;
}

.gallery-card {
  cursor: pointer;
  transition: transform 0.3s ease;
  text-align: center;
}

.gallery-card:hover {
  transform: translateY(-5px);
}

.gallery-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
