<template>
  <div>
   
    <Header />

    <main class="m-10">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Structures/Header.vue';
</script>