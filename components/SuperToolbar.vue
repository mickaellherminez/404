<template>
  <nav class="super-toolbar">
    <NuxtLink to="/" class="toolbar-item">Accueil</NuxtLink>
    <NuxtLink to="/about" class="toolbar-item">À propos</NuxtLink>
    <!-- Ajoutez d'autres liens selon vos besoins -->
    <div class="toolbar-right">
      <button @click="toggleTheme" class="theme-toggle">
        {{ isDarkTheme ? '☀️' : '🌙' }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isDarkTheme = ref(false)

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
  // Ici, vous pouvez ajouter la logique pour changer le thème de l'application
}
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
