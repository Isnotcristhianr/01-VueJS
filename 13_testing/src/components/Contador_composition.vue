<template>
  <div>
    <h1>Contador: {{ counterStore.count }}</h1>
    <!-- btn -->
    <button id="add" @click="counterStore.increment">Incrementar</button>
    <button id="diss" @click="counterStore.decrement">Decrementar</button>
    <button id="res" @click="counterStore.reset">Reset</button>
  </div>
</template>

<script>
import { counterStore } from '../../store/counterStore';

export default {
  setup() {
    return {
      counterStore,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
