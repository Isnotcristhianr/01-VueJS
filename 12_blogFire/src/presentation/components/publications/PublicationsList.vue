<template>
    <div class="m-2">

        <div class="card card-compact bg-base-200 shadow-xl w-auto">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">uid</h2>
                <p>text</p>
                <div class="card-actions justify-end">
                    fecha
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