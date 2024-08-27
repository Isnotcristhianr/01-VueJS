<script setup lang="ts">
import { onMounted } from 'vue';
import AppLayout from '../../layouts/AppLayout.vue';
import { UsePublications } from '../../stores/publications.store';

const { findAll, data } = UsePublications(); 

onMounted(() => {
    findAll();
});

</script>

<template>
    <div>
      <AppLayout>
        <h1>
            Blog
        </h1>
        <pre>
            {{ data }}
        </pre>
      </AppLayout>  
    </div>
</template>