<template>
    <div>
        <Teleport to="body">
            <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div class="bg-white p-4 rounded-lg">
                    <slot></slot>
                    <button @click="closeModal()" class=" p-2 text-xl text-white bg-red-500 rounded-full">X</button>
                </div>
                <!-- cerrar -->

            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import { Teleport } from 'vue';
import { useModalStore } from '../stores/modal.store';

const { closeModal } = useModalStore();

</script>