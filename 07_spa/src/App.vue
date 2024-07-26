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
    
    <nav>
      <router-link to="/">Home</router-link> |
      <router-Link to="/about">About</router-link> |
      <router-link to="/gifs">Gifs</router-link>
    </nav>

    <router-view />
  </div>
</template>

