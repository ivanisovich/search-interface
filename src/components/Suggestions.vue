<template>
  <ul v-if="suggestions.length && query.length >= 3">
    <li
      v-for="(suggestion, index) in suggestions"
      :key="index"
      :class="{ active: index === selectedIndex }"
      @click="selectSuggestion(index)"
    >
      {{ suggestion.name }}
    </li>
  </ul>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  suggestions: {
    type: Array,
    default: () => [],
  },
  query: {
    type: String,
    default: "",
  },
  selectedIndex: {
    type: Number,
    default: -1,
  },
});

const emit = defineEmits(["select"]);

const selectSuggestion = (index) => {
  emit("select", index);
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
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
  background-color: #f0f0f0;
}

li:hover {
  background-color: #f9f9f9;
}
</style>
