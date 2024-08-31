<template>
    <form class="form-control" @submit.prevent="handleSubmit">
        <div class="label">
            <span class="label-text">Create Publication</span>
        </div>
        <textarea class="textarea textarea-bordered h-24" placeholder="Comparte tu idea...."
            v-model="publicationForm.body"
        ></textarea>
        <div class="text-end">
            <button class="btn btn-primary m-1 w-40">Post</button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useFirebaseAuth } from 'vuefire';

import { formatPublicationDataSourceAdapter } from '../../../adapters/datasources/formatPublicationDataSource';

import { UsePublications } from '../../stores/publications.store';

    const { create } = UsePublications();

    const  publicationForm = reactive({
        body: ''
    });

    const auth = useFirebaseAuth();

    const handleSubmit = () => {
        if(publicationForm.body.length < 10){
            alert('Publication must be at least 10 characters');
            return;
        }

        //uid
        //?, no sabe si esta logueado
        //!, esta seguro que esta logueado
        const uid = auth!.currentUser!.uid;

        const formatData = formatPublicationDataSourceAdapter(
            publicationForm, uid
        )

        create(formatData);
    }    
</script>