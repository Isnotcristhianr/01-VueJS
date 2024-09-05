<template>
  <div>
    <h1>{{ msg }}: {{ count }}</h1>
    <h2>d</h2>
    <!-- btn -->
    <button id='add' @click="increment">Incrementar</button>
    <button id="diss" @click="decrement">Decrementar</button>
    <button id="res" @click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: 'Contador',
    count: 0
  }),
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    }
  }
 
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
