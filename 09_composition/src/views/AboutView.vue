<template>
  <div>
    <h1>Componentes</h1>
    <hr>

    <Counter :initialValue="100" />

  </div>
</template>

<script setup>

import Counter from '../components/Counter.vue'
import { useLink, useRoute } from 'vue-router'


//route
const route = useRoute()

console.log(route)

//uselink
//const link = useLink()

//console.log(link)

</script>
