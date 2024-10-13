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
          <n-result
            :status="error.statusCode === 404 ? '404' : 'error'"
            :title="error.statusCode.toString()"
            :description="error.message || 'Oups ! Cette page semble avoir disparu.'"
          >
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
          <n-alert title="Besoin d'aide ?" type="info">
            Si vous pensez qu'il s'agit d'une erreur, n'hésitez pas à contacter notre support.
          </n-alert>
        </n-space>
      </n-layout-content>
      <n-layout-footer bordered>
        <n-space justify="center">
          <n-text>&copy; {{ new Date().getFullYear() }} Votre Entreprise. Tous droits réservés.</n-text>
        </n-space>
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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
  NText,
  darkTheme, 
  useOsTheme 
} from 'naive-ui'
import { useHead } from '#app'

const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})

const osTheme = useOsTheme()
const theme = computed(() => osTheme.value === 'dark' ? darkTheme : null)

const handleError = () => {
  clearError({ redirect: '/' })
}

const reportError = () => {
  // Implémentez ici la logique pour signaler l'erreur
  console.log('Erreur signalée:', props.error)
}

// SEO
useHead({
  title: `Erreur ${props.error.statusCode} | Votre Site`,
  meta: [
    { name: 'description', content: `Une erreur ${props.error.statusCode} s'est produite. ${props.error.message}` },
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
