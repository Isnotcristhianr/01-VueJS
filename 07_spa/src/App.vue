<script>
import { RouterView } from 'vue-router';

export default {
  components: (
    RouterView
),
}
</script>


<template>
  <div>
    <div class="bg-gray-100 p-4">
    <h1 class="text-2xl font-bold text-gray-800">¡Hola, Tailwind!</h1>
  </div>
  
    <nav class="text-gray-600">
      <router-link to="/"
      class="text-green-500">Home</router-link> |
      <router-Link to="/about">About</router-link> |
      <router-link to="/gifs">Gifs</router-link> |
      <router-link to="/users">Users</router-link>
    </nav>

    <router-view />
  </div>
</template>

