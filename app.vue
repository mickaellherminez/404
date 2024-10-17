<template>
  <n-config-provider :theme="theme">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <NuxtLayout>
              <SuperToolbar @theme-change="toggleTheme" />
              <NuxtPage />
            </NuxtLayout>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NNotificationProvider,
  NLoadingBarProvider,
  darkTheme,
  lightTheme
} from 'naive-ui'
import SuperToolbar from '../components/SuperToolbar.vue'

const theme = ref(null)

const toggleTheme = (isDark) => {
  theme.value = isDark ? darkTheme : lightTheme
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Lato', sans-serif;
}
</style>
