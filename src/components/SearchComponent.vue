<template>
  <div class="container">
    <SearchField
      v-model="query"
      @input="onInput"
      @keydown-down="onArrowDown"
      @keydown-up="onArrowUp"
      @keydown-enter="onEnter"
    />
    <Suggestions
      :suggestions="suggestions"
      :query="query"
      :selectedIndex="selectedIndex"
      @select="selectSuggestion"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { players } from "../data/players";

import SearchField from "./SearchField.vue";
import Suggestions from "./Suggestions.vue";

const router = useRouter();

const query = ref("");
const suggestions = ref([]);
const selectedIndex = ref(-1);

const onInput = () => {
  if (query.value.length >= 3) {
    suggestions.value = players
      .filter((player) =>
        player.name.toLowerCase().includes(query.value.toLowerCase())
      )
      .slice(0, 10);
  } else {
    suggestions.value = [];
  }
};

const onArrowDown = () => {
  if (selectedIndex.value < suggestions.value.length - 1) {
    selectedIndex.value++;
  }
};

const onArrowUp = () => {
  if (selectedIndex.value > 0) {
    selectedIndex.value--;
  }
};

const onEnter = () => {
  if (selectedIndex.value >= 0) {
    selectSuggestion(selectedIndex.value);
  }
};

const selectSuggestion = (index) => {
  const selectedPlayer = suggestions.value[index];
  query.value = selectedPlayer.name;
  suggestions.value = [];
  selectedIndex.value = -1;
  router.push(`/profile/${selectedPlayer.id}`);
};
</script>

<style scoped>
input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}

li {
  padding: 10px;
  cursor: pointer;
  background: white;
  border-bottom: 1px solid #eee;
}

li:last-child {
  border-bottom: none;
}

li.active {
  background: #f0f0f0;
}

li:hover {
  background: #f9f9f9;
}
</style>
