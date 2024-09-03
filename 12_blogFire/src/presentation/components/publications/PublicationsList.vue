<template>
    <div class="m-2 xl:ml-96 xl:mr-96">

        <div class="card card-compact bg-base-200 shadow-xl w-auto m-3" v-for="publication in data.publications" v-bind:key="publication.id">
            <figure>
                <img
                :src="publication.img"
                width="50%"
                :alt="publication.id"
                class="rounded-lg"
                />
            </figure>
            <div class="card-body">
                <!-- fecha -->
                <h6 class="card text-end
                text-xs text-gray-500">
                {{ publication.createdAt }}
                </h6>
                <h6 class="card-title">
                Autor: {{ publication.uid }}
                </h6>
                <p>
                    {{ publication.body }}
                </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Like</button>
                    <button class="btn btn-secondary">Comment</button>
                </div>
            </div>
        </div>   
    </div>
</template>

<script setup lang="ts">
//store
import { UsePublications } from '../../stores/publications.store';

const { data } = UsePublications(); 

</script>