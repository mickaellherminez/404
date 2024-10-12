<template>
  <div class="error-container">
    <div class="error-content">
      <h1 class="error-title">{{ error.statusCode }}</h1>
      <p class="error-message">{{ error.message || "Oups ! Cette page semble avoir disparu." }}</p>
      <p class="error-subtitle">Explorons de nouveaux horizons ensemble.</p>
      <button class="error-button" @click="handleError">
        Retour à l'accueil
        <span class="button-icon">→</span>
      </button>
    </div>
    <div class="error-illustration">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<style scoped>
.error-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f7;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  overflow: hidden;
  position: relative;
}

.error-content {
  text-align: center;
  max-width: 600px;
  padding: 2rem;
  z-index: 10;
}

.error-title {
  font-size: 8rem;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0;
  line-height: 1;
}

.error-message {
  font-size: 2rem;
  color: #1d1d1f;
  margin: 1rem 0;
}

.error-subtitle {
  font-size: 1.2rem;
  color: #86868b;
  margin-bottom: 2rem;
}

.error-button {
  background-color: #0071e3;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 980px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.error-button:hover {
  background-color: #0077ed;
  transform: scale(1.05);
}

.button-icon {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.error-button:hover .button-icon {
  transform: translateX(4px);
}

.error-illustration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}

.circle-1 {
  width: 300px;
  height: 300px;
  background-color: #40c8e0;
  top: -50px;
  left: -50px;
  animation: float 6s ease-in-out infinite;
}

.circle-2 {
  width: 200px;
  height: 200px;
  background-color: #34c759;
  bottom: -30px;
  right: -30px;
  animation: float 8s ease-in-out infinite;
}

.circle-3 {
  width: 150px;
  height: 150px;
  background-color: #ff9f0a;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 4s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

@keyframes pulse {
  0% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.1); }
  100% { transform: translate(-50%, -50%) scale(1); }
}

@media (max-width: 768px) {
  .error-title {
    font-size: 6rem;
  }
  
  .error-message {
    font-size: 1.5rem;
  }
}
</style>
