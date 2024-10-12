<template>
  <div class="home-page">
    <h1>Bienvenue sur notre site !</h1>
    <p>Découvrez nos fonctionnalités et services.</p>
    <NuxtLink to="/about" class="btn">En savoir plus</NuxtLink>
  </div>
</template>

<script setup>
// Ajoutez ici des fonctionnalités supplémentaires si nécessaire
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(to bottom, #e0f7fa, #80deea);
  color: #006064;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #00796b;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #004d40;
}
</style>
