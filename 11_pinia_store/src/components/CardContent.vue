<template>
    <div class="contend">
        <h1 class="text-2xl font-bold">Articulos: </h1>
        <div class="" v-if="products.quantity() === 0">
            <p>No hay productos seleccionados</p>
        </div>
        <div v-else>
            <!-- tabla de nombre, preci, cantidad e imagen de la lista de las compras -->
            <table class="table-auto" v-if="products.quantity() > 0">
                <thead>
                    <tr>
                        <th class="px-4 py-2">Imagen</th>
                        <th class="px-4 py-2">Nombre</th>
                        <th class="px-4 py-2">Precio</th>
                        <th class="px-4 py-2">Cantidad</th>
                        <th class="px-4 py-2">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products.selected" :key="product.name">
                        <td class="border px-4 py-2">
                            <img :src="product.img" alt="prod" class="w-16 h-16 mx-auto" />
                        </td>
                        <td class="border px-4 py-2">{{ product.name }}</td>
                        <td class="border px-4 py-2">{{ product.value.toFixed(2) }}</td>
                        <td class="border px-4 py-2">{{ product.quantity }}</td>
                        <td class="border px-4 py-2">
                            <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                🗑️
                            </button>
                        </td>
                    </tr>

                </tbody>
            </table>
            <div class="text-end">
                <label for="">Cantidad: {{ products.quantity() }}</label>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from '../stores/product.store';


const {products, removeProduct} = useProductStore();
</script>