<template>
    <form class="form-control" @submit.prevent="handleSubmit">
        <div class="label">
            <span class="label-text">Create Publication</span>
        </div>
        <!-- subir img -->
        <div class=" file text-center m-3">
            <input @change="handleUploadImg" type="file" class="file-input file-input-xs file-input-primary"
                accept="image/*">

        </div>
        <textarea class="textarea textarea-bordered h-24" placeholder="Share your dea...."
            v-model="publicationForm.body"></textarea>
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
import { getDownloadURL } from 'firebase/storage';

const { create, uploadImg, downloadImg } = UsePublications();

const publicationForm = reactive<{ body: string, img: string }>({
    body: '',
    img: ''
});

const clearForm = () => {
    publicationForm.body = '';
    publicationForm.img = '';
}

//img
const handleUploadImg = async (event: Event) => {
    const target = event.target as HTMLInputElement;

    if (target.files!.length <= 0) {
        return;
    }

    try {
        const file = target.files![0];

        await uploadImg(file);

        const dowloadLink = await downloadImg(file);

        publicationForm.img = dowloadLink!;

    } catch (error) {
        console.log(error);
    }


}

const auth = useFirebaseAuth();

const handleSubmit = async () => {
    if (publicationForm.body.length < 10) {
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
    clearForm();
}    
</script>