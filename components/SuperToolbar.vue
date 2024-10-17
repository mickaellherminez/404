<template>
  <n-layout-header bordered class="super-toolbar">
    <n-menu
      v-model:value="activeKey"
      mode="horizontal"
      :options="menuOptions"
    />
    <div class="toolbar-right">
      <n-select
        v-model:value="selectedLanguage"
        :options="languageOptions"
        size="small"
      />
      <n-switch
        v-model:value="isDarkTheme"
        @update:value="toggleTheme"
        class="theme-switch"
      >
        <template #checked>
          <n-icon size="18"><SunnyOutline /></n-icon>
        </template>
        <template #unchecked>
          <n-icon size="18"><MoonOutline /></n-icon>
        </template>
      </n-switch>
    </div>
  </n-layout-header>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import {
  NLayoutHeader,
  NMenu,
  NSelect,
  NSwitch,
  NIcon,
  useMessage,
  useOsTheme,
} from 'naive-ui';
import { SunnyOutline, MoonOutline } from '@vicons/ionicons5';

// Importer les données des pages
import pagesData from "../data/pagesData.js";

const router = useRouter();
const message = useMessage();
const osTheme = useOsTheme();

const activeKey = ref(null);
const selectedLanguage = ref('fr');
const isDarkTheme = ref(osTheme.value === 'dark');

const emit = defineEmits(['theme-change']);

// Extraire les catégories et technologies uniques
const categories = [
  ...new Set(pagesData.flatMap((page) => page.categories)),
];

const technologies = [
  ...new Set(pagesData.flatMap((page) => page.technologies)),
];

// Construire les options du menu dynamiquement
const menuOptions = [
  {
    label: 'Accueil',
    key: 'home',
    onClick: () => router.push('/'),
  },
  {
    label: 'Catégories',
    key: 'categories',
    children: categories.map((category) => ({
      label: category,
      key: `category-${category}`,
      onClick: () =>
        router.push(`/categories/${encodeURIComponent(category)}`),
    })),
  },
  {
    label: 'Technologies',
    key: 'technologies',
    children: technologies.map((technology) => ({
      label: technology,
      key: `technology-${technology}`,
      onClick: () =>
        router.push(`/technologies/${encodeURIComponent(technology)}`),
    })),
  },
  {
    label: 'À propos',
    key: 'about',
    onClick: () => router.push('/about'),
  },
];

const languageOptions = [
  { label: 'Français', value: 'fr' },
  { label: 'English', value: 'en' },
];

const toggleTheme = (value) => {
  isDarkTheme.value = value;
  emit('theme-change', value);
  message.info(value ? 'Thème sombre activé' : 'Thème clair activé');
};

// Gérer le changement de langue
watch(selectedLanguage, (newLang) => {
  message.info(`Langue changée pour : ${newLang}`);
  // Ajouter la logique pour changer la langue de l'application ici
});
</script>

<style scoped>
.super-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.toolbar-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-switch {
  min-width: 50px;
}

:deep(.n-switch__rail) {
  height: 24px;
}

:deep(.n-switch__button) {
  width: 22px;
  height: 22px;
}

:deep(.n-switch__button-icon) {
  font-size: 16px;
}

@media (max-width: 768px) {
  .super-toolbar {
    flex-direction: column;
    padding: 0.5rem;
  }

  .toolbar-right {
    margin-top: 0.5rem;
  }
}
</style>
