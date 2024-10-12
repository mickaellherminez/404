<template>
  <n-config-provider>
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <NuxtLayout>
              <NuxtPage />
            </NuxtLayout>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup>
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NNotificationProvider,
  NLoadingBarProvider
} from 'naive-ui'
</script>

<style>
body {
  margin: 0;
  font-family: 'Lato', sans-serif;
}
</style>