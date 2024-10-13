<template>
  <n-config-provider :theme="theme">
    <n-layout>
      <n-layout-header bordered>
        <n-page-header>
          <template #title>
            Erreur {{ error.statusCode }}
          </template>
        </n-page-header>
      </n-layout-header>
      <n-layout-content>
        <n-space vertical align="center" style="min-height: 80vh; padding: 2rem;">
          <n-result :status="error.statusCode === 404 ? '404' : 'error'" :title="error.statusCode.toString()"
            :description="error.message || 'Oups ! Cette page semble avoir disparu.'">
            <template #footer>
              <n-space>
                <n-button @click="handleError" type="primary" size="large">
                  Retour à l'accueil
                </n-button>
                <n-button @click="reportError" size="large">
                  Signaler un problème
                </n-button>
              </n-space>
            </template>
          </n-result>
          <n-alert type="warning" style="max-width: 600px; margin-top: 2rem;">
            Si le problème persiste, veuillez contacter notre support technique.
          </n-alert>
        </n-space>
      </n-layout-content>
      <n-layout-footer bordered>
        <n-space justify="center">
          <span>&copy; {{ new Date().getFullYear() }} Votre Entreprise. Tous droits réservés.</span>
        </n-space>
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  NConfigProvider,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NPageHeader,
  NSpace,
  NResult,
  NButton,
  NAlert,
  darkTheme,
  useOsTheme
} from 'naive-ui'
import { useHead } from '#app'

const props = defineProps({
  error: Object
})

const osThemeRef = useOsTheme()
const theme = computed(() => osThemeRef.value === 'dark' ? darkTheme : null)

const handleError = () => {
  clearError({ redirect: '/' })
}

const reportError = () => {
  // Implémentez ici la logique pour signaler l'erreur
  console.log('Erreur signalée:', props.error)
}

useHead({
  title: `Erreur ${props.error.statusCode} - Votre Site`,
  meta: [
    { name: 'description', content: `Page d'erreur ${props.error.statusCode} - ${props.error.message || 'Une erreur est survenue.'}` },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}

/* Styles pour l'accessibilité */
.n-button:focus {
  outline: 2px solid #1890ff;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>