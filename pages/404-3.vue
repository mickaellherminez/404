<template>
  <div :class="['game-container', theme]">
    <h1>404 - Page Not Found</h1>
    <p>Find the treasure in the optimal number of steps!</p>
    <div id="maze">
      <div v-for="(row, y) in maze" :key="`row-${y}`" class="row">
        <div v-for="(cellValue, x) in row" :key="`cell-${x}-${y}`" :class="['cell', {
          wall: cellValue === 1,
          treasure: cellValue === 2
        }]">
          <span v-if="cellValue === 2">💎</span>
          <span v-else-if="x === player.x && y === player.y">
            {{ steps <= optimalPath.value + 15 ? '😊' : '😓' }} </span>
        </div>
      </div>
    </div>
    <div id="message">{{ message }}</div>
    <div id="steps">Steps: {{ steps }}</div>
    <div id="controls">
      <button @click="move(0, -1)">↑</button><br>
      <button @click="move(-1, 0)">←</button>
      <button @click="move(1, 0)">→</button><br>
      <button @click="move(0, 1)">↓</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  theme: String
});

const mazeSize = 15;
const maze = ref([]);
const player = reactive({ x: 1, y: 1 });
const steps = ref(0);
const optimalPath = ref(0);
const message = ref('');

function generateMaze() {
  maze.value = Array.from({ length: mazeSize }, () => Array(mazeSize).fill(1));
  const stack = [{ x: 1, y: 1 }];
  maze.value[1][1] = 0;

  while (stack.length > 0) {
    const current = stack[stack.length - 1];
    const directions = [
      { dx: 0, dy: -2 }, // Up
      { dx: 2, dy: 0 },  // Right
      { dx: 0, dy: 2 },  // Down
      { dx: -2, dy: 0 }  // Left
    ].sort(() => Math.random() - 0.5);

    let moved = false;
    for (const dir of directions) {
      const nx = current.x + dir.dx;
      const ny = current.y + dir.dy;
      if (
        nx > 0 &&
        nx < mazeSize - 1 &&
        ny > 0 &&
        ny < mazeSize - 1 &&
        maze.value[ny][nx] === 1
      ) {
        maze.value[ny][nx] = 0;
        maze.value[current.y + dir.dy / 2][current.x + dir.dx / 2] = 0;
        stack.push({ x: nx, y: ny });
        moved = true;
        break;
      }
    }

    if (!moved) {
      stack.pop();
    }
  }

  // Place treasure
  maze.value[mazeSize - 2][mazeSize - 2] = 2;

  // Calculate optimal path
  optimalPath.value = calculateOptimalPath();
}

function calculateOptimalPath() {
  const queue = [{ x: 1, y: 1, steps: 0 }];
  const visited = new Set();
  while (queue.length > 0) {
    const current = queue.shift();
    if (maze.value[current.y][current.x] === 2) {
      return current.steps;
    }
    const key = `${current.x},${current.y}`;
    if (visited.has(key)) continue;
    visited.add(key);
    [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ].forEach(([dx, dy]) => {
      const nx = current.x + dx;
      const ny = current.y + dy;
      if (maze.value[ny][nx] !== 1) {
        queue.push({ x: nx, y: ny, steps: current.steps + 1 });
      }
    });
  }
  return Infinity;
}

function move(dx, dy) {
  const newX = player.x + dx;
  const newY = player.y + dy;
  if (maze.value[newY][newX] !== 1) {
    player.x = newX;
    player.y = newY;
    steps.value++;
    if (maze.value[newY][newX] === 2) {
      if (steps.value <= optimalPath.value + 15) {
        message.value = `Congratulations! You've found the treasure in ${steps.value} steps! 🎉`;
      } else {
        message.value = `Too many steps! Try again. Optimal path: ${optimalPath.value} steps.`;
        resetGame();
      }
    }
  }
}

function resetGame() {
  player.x = 1;
  player.y = 1;
  steps.value = 0;
  message.value = '';
  generateMaze();
}

function handleKeydown(e) {
  switch (e.key) {
    case 'ArrowUp':
      move(0, -1);
      break;
    case 'ArrowDown':
      move(0, 1);
      break;
    case 'ArrowLeft':
      move(-1, 0);
      break;
    case 'ArrowRight':
      move(1, 0);
      break;
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
  generateMaze();
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.game-container.light {
  background-color: #f0f0f0;
  color: #000;
}

.game-container.dark {
  background-color: #1a1a2e;
  color: #fff;
}

#maze {
  display: inline-block;
  border: 2px solid #e94560;
  margin-top: 20px;
}

.row {
  display: flex;
}

.cell {
  width: 25px;
  height: 25px;
  border: 1px solid #0f3460;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.wall {
  background-color: #0f3460;
}

.treasure {
  font-size: 18px;
}

#message {
  margin-top: 20px;
  font-size: 18px;
}

#controls {
  margin-top: 20px;
}

button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #e94560;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #d23d54;
}

#steps {
  margin-top: 10px;
  font-size: 16px;
}
</style>