<template>
    <div>
        <hr>
        <br>
        <div class="text-white text-center">
            <h4 >Selecciona un producto:</h4>
        </div>
        <br>
        <div class="flex justify-center items-center">
          <div
          class="grid grid-cols-2 gap-4 bg-slate-400 text-center p-4 rounded w-96"
          >
          <div
            v-for="product in products.available"
            :key="product.name"
            class="card border p-2"
          >
            <img :src="product.img" alt="prod" class="w-32 h-32 mx-auto" />
            <h2 class="text-xl font-bold">{{ product.name }}</h2>
            <p class="text-gray-600">Price: ${{ product.value.toFixed(2) }}</p>
            <button
            @click="addProduct(product)"
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script setup lang="ts">
import { useProductStore } from "../stores/product.store";

const { products, addProduct } = useProductStore();
console.log(products);

</script>
  