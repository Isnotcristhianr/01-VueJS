<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { getCurrentUser } from 'vuefire';

const router = useRouter();

onMounted(async () => {
  const currentUser = await getCurrentUser();
  console.log(currentUser)

  if (currentUser){
    router.replace({ name: 'blog' })
  }else{
    router.replace({ name: 'login' })
  }


})
</script>

<template>
  <div>

    <RouterView />

  </div>
</template>
