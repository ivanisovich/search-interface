<template>
  <input
    type="text"
    v-model="query"
    @input="emitInput"
    @keydown.down.prevent="emitKeydownDown"
    @keydown.up.prevent="emitKeydownUp"
    @keydown.enter.prevent="emitKeydownEnter"
    placeholder="Введите имя объекта"
  />
</template>

<script setup>
import { ref, watch, defineEmits, defineProps } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits([
  "update:modelValue",
  "input",
  "keydown-down",
  "keydown-up",
  "keydown-enter",
]);

const query = ref(props.modelValue);

watch(query, (newValue) => {
  emit("update:modelValue", newValue);
});

const emitInput = () => emit("input", query.value);
const emitKeydownDown = () => emit("keydown-down");
const emitKeydownUp = () => emit("keydown-up");
const emitKeydownEnter = () => emit("keydown-enter");
</script>
