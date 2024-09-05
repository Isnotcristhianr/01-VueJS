<template>
  <div>

    <ContadorComposition />
    <hr>
    <ContadorComposition />
  </div>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ContadorComposition from './components/Contador_composition.vue'

export default {
  name: 'App',
 /*  components: {
    HelloWorld
  } */
  components: {
    ContadorComposition
  }
}

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
