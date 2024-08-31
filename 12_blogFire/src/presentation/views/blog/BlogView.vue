<script setup lang="ts">
import { onMounted } from 'vue';

//store
import { UsePublications } from '../../stores/publications.store';

//presentation
import AppLayout from '../../layouts/AppLayout.vue';
import CreatePublicationForm from '../../components/forms/CreatePublicationForm.vue';

const { findAll, data } = UsePublications(); 

onMounted(() => {
    findAll();
});

</script>

<template>
    <div>
      <AppLayout>
        <h1 class="text-center text-2xl font-semibold">
            Welcome to Blog
        </h1>
        
        <CreatePublicationForm />

      </AppLayout>  
    </div>
</template>