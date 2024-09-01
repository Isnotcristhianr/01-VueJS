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
import swal from 'sweetalert2';

    const { create } = UsePublications();

    const  publicationForm = reactive({
        body: ''
    });

    const auth = useFirebaseAuth();

    const handleSubmit = async () => {
        if(publicationForm.body.length < 10){
            swal.fire('Error', 'La publicación debe tener al menos 10 caracteres', 'error');
            return;
        }

        //uid
        //?, no sabe si esta logueado
        //!, esta seguro que esta logueado
        const uid = auth!.currentUser!.uid;

        const formatData = formatPublicationDataSourceAdapter(
            publicationForm, uid
        )

        await create(formatData);
        publicationForm.body = '';
    }    
</script>