<template>
  <div class="player-card" v-if="player">
    <h1>{{ player.name }}</h1>
    <p>{{ player.description }}</p>
  </div>
  <div v-else>
    <p>Игрок не найден</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { players } from "../data/players";

const route = useRoute();
const player = ref(null);

onMounted(() => {
  const playerId = parseInt(route.params.id, 10);
  console.log("Загружается профиль для игрока с ID:", playerId);
  player.value = players.find((p) => p.id === playerId);
  if (player.value) {
    console.log("Найденный игрок:", player.value);
  } else {
    console.log("Игрок не найден");
  }
});
</script>

<style scoped>
.container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.player-card {
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 10px;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
}
</style>
