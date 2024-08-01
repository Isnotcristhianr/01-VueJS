<template>
  <button @click="emit('cambio')">{{ title }}</button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Click me",
  },
  value: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["cambio"]);
</script>
