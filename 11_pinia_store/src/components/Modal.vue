<template>
    <div>
        <Teleport to="body">
            <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div class="bg-white p-4 rounded-lg">
                    <slot>
                        <!-- contenido -->
                         <div class="contend">
                            <CardContent />
                         </div>
                    </slot>
                    <!-- cerrar -->
                     <div class="text-end">
                         <button @click="closeModal()" class=" p-2 text-xl text-white bg-red-500 rounded-full">X</button>
                     </div>
                </div>

            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import { Teleport } from 'vue';
import { useModalStore } from '../stores/modal.store';
import CardContent from '../components/CardContent.vue';

const { closeModal } = useModalStore();

</script>