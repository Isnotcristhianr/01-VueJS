<template>
  <div>
   
    <Header />

    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Structures/Header.vue';
</script>