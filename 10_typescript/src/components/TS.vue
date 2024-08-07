<template>
  <div>
    <h2>Nombre: {{ store.nombre }}</h2>
    <h3>Edad {{ store.edad }}</h3>
    <button @click="store.crecer">Crecer</button>

  </div>
</template>

<script lang="ts">
import type { Persona } from "../interfaces/Persona";
import { defineComponent, ref } from "vue";
import store from '../Store/store';

const ts = defineComponent({
  name: "TS",
  setup() {
   return  {store}
  },
});

export default ts;
</script>

<style>
</style>