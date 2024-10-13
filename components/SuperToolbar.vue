<template>
  <n-layout-header bordered>
    <n-menu mode="horizontal" :options="menuOptions" />
  </n-layout-header>
</template>

<script setup>
import { h, ref } from 'vue'
import { NLayoutHeader, NMenu, NButton } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuOptions = [
  {
    label: () => h(
      'a',
      { href: '/', onClick: (e) => { e.preventDefault(); router.push('/') } },
      { default: () => 'Accueil' }
    ),
    key: 'home'
  },
  {
    label: () => h(
      'a',
      { href: '/about', onClick: (e) => { e.preventDefault(); router.push('/about') } },
      { default: () => 'À propos' }
    ),
    key: 'about'
  }
]
</script>

<style scoped>
.super-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.toolbar-item {
  color: white;
  text-decoration: none;
  margin-right: 1rem;
  transition: color 0.3s ease;
}

.toolbar-item:hover {
  color: #00dc82;
}

.toolbar-right {
  display: flex;
  align-items: center;
}

.theme-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
