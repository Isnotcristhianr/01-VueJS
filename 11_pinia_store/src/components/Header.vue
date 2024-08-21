<template>
  <div class="bg-slate-800 text-white">
    <header class="p-3 flex justify-between items-center mx-2 mr-2">
      <h1 class="text-2xl font-bold">Pinia Store</h1>
      <div @click="openModal()" class="p-1 rounded-sm" :class="products.quantity() > 0 ? 'bg-blue-500' : 'bg-red-300'">
        <label
          >Artículos:
          {{ products.quantity() }}
        </label>
      </div>
      <Modal v-if="modalValue.open"/>
    </header>
  </div>
  <!-- header -->
</template>

<script setup lang="ts">
import {ref} from "vue";
import { useProductStore } from "../stores/product.store";


//modal
import Modal from "../components/Modal.vue";
import { useModalStore } from "../stores/modal.store";
const {modalValue, openModal} = useModalStore();

const { products } = useProductStore();

</script>

