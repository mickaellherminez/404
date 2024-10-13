<template>
  <n-space vertical :size="24">
    <n-layout>
      <n-layout-header>
        <n-h1>Bienvenue sur notre site</n-h1>
      </n-layout-header>
      <n-layout-content>
        <n-card>
          <n-p>
            Ceci est la page d'accueil de notre application Nuxt 3 avec Naive UI.
          </n-p>
          <n-p>
            Explorez les différentes fonctionnalités et pages 404 personnalisées !
          </n-p>
        </n-card>
        <n-space justify="center" :size="12" style="margin-top: 24px;">
          <n-button type="primary" @click="goToAbout">
            En savoir plus
          </n-button>
          <n-button @click="showNotification">
            Afficher une notification
          </n-button>
        </n-space>
      </n-layout-content>
    </n-layout>
  </n-space>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'
import {
  NSpace,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NH1,
  NP,
  NCard,
  NButton
} from 'naive-ui'

const router = useRouter()
const message = useMessage()

const goToAbout = () => {
  router.push('/about')
}

const showNotification = () => {
  message.info("C'est une notification de test !")
}
</script>

<style scoped>
.n-layout-header {
  padding: 24px;
  text-align: center;
}

.n-layout-content {
  padding: 24px;
}
</style>
