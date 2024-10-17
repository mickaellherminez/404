<template>
  <div class="not-found">
    <canvas ref="canvas"></canvas>
    <div class="message">404 - Page not found. Play with the particles!</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

definePageMeta({
  ssr: false,
  title: '404 - Page Not Found'
})

const canvas = ref(null)
let ctx
let particles = []
const mouse = { x: null, y: null, radius: 150 }

function resizeCanvas() {
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  initParticles()
}

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = Math.random() * 3 + 1
    this.baseX = this.x
    this.baseY = this.y
    this.density = (Math.random() * 30) + 1
    this.color = `hsl(${Math.random() * 360}, 50%, 50%)`
  }

  draw() {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
  }

  update() {
    let dx = mouse.x - this.x
    let dy = mouse.y - this.y
    let distance = Math.sqrt(dx * dx + dy * dy)
    let forceDirectionX = dx / distance
    let forceDirectionY = dy / distance
    let maxDistance = mouse.radius
    let force = (maxDistance - distance) / maxDistance
    let directionX = forceDirectionX * force * this.density
    let directionY = forceDirectionY * force * this.density

    if (distance < mouse.radius) {
      this.x -= directionX
      this.y -= directionY
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX
        this.x -= dx / 10
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY
        this.y -= dy / 10
      }
    }
  }
}

function initParticles() {
  particles = []
  const numberOfParticles = (canvas.value.height * canvas.value.width) / 5000
  for (let i = 0; i < numberOfParticles; i++) {
    const x = Math.random() * canvas.value.width
    const y = Math.random() * canvas.value.height
    particles.push(new Particle(x, y))
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  // Dessiner le texte "404"
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
  ctx.font = 'bold 200px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('404', canvas.value.width / 2, canvas.value.height / 2)

  particles.forEach(particle => {
    particle.draw()
    particle.update()
  })
  requestAnimationFrame(animate)
}

function onMouseMove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

function onMouseLeave() {
  mouse.x = undefined
  mouse.y = undefined
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  canvas.value.addEventListener('mousemove', onMouseMove)
  canvas.value.addEventListener('mouseleave', onMouseLeave)
  animate()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCanvas)
  canvas.value.removeEventListener('mousemove', onMouseMove)
  canvas.value.removeEventListener('mouseleave', onMouseLeave)
})
</script>

<style scoped>
.not-found {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #1a1a2e;
  overflow: hidden;
  font-family: Arial, sans-serif;
  color: #fff;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
}

.message {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 18px;
  color: #fff;
  z-index: 10;
}
</style>
