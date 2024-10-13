<template>
  <n-layout-header bordered class="super-toolbar">
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
    <div class="toolbar-right">
      <n-select v-model:value="selectedLanguage" :options="languageOptions" size="small" />
      <n-switch v-model:value="isDarkTheme" @update:value="toggleTheme" class="theme-switch">
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
import { ref, watch, defineEmits } from 'vue'
import { useRouter } from 'vue-router'
import {
  NLayoutHeader,
  NMenu,
  NSelect,
  NSwitch,
  NIcon,
  useMessage,
  useOsTheme
} from 'naive-ui'
import { SunnyOutline, MoonOutline } from '@vicons/ionicons5'

const emit = defineEmits(['theme-change'])

const router = useRouter()
const message = useMessage()
const osTheme = useOsTheme()

const activeKey = ref(null)
const selectedLanguage = ref('fr')
const isDarkTheme = ref(osTheme.value === 'dark')

const menuOptions = [
  {
    label: 'Accueil',
    key: 'home',
    onClick: () => router.push('/')
  },
  {
    label: 'À propos',
    key: 'about',
    onClick: () => router.push('/about')
  },
  {
    label: 'Pages 404',
    key: '404',
    children: [
      {
        label: 'Classique',
        key: '404-classic',
        onClick: () => router.push('/classic/404')
      },
      {
        label: 'Moderne',
        key: '404-modern',
        onClick: () => router.push('/modern/404')
      }
    ]
  }
]

const languageOptions = [
  { label: 'Français', value: 'fr' },
  { label: 'English', value: 'en' }
]

const toggleTheme = (value) => {
  isDarkTheme.value = value
  emit('theme-change', value)
  message.info(value ? 'Thème sombre activé' : 'Thème clair activé')
}

// Vous pouvez ajouter ici la logique pour changer la langue
watch(selectedLanguage, (newLang) => {
  message.info(`Langue changée pour : ${newLang}`)
})
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
  min-width: 50px; /* Augmente la largeur minimale du switch */
}

:deep(.n-switch__rail) {
  height: 24px; /* Augmente la hauteur du rail du switch */
}

:deep(.n-switch__button) {
  width: 22px; /* Augmente la largeur du bouton du switch */
  height: 22px; /* Augmente la hauteur du bouton du switch */
}

:deep(.n-switch__button-icon) {
  font-size: 16px; /* Ajuste la taille de l'icône */
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
