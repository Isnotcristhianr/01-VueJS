<template>
  <div class="text-center">
    <form action="" @submit.prevent="$emit('buscar', busqueda)">
        <input v-model.trim="busqueda" type="text" placeholder="Escribe..." class="w-md p-2 rounded-lg border-2 border-gray-200 m-1">
        <button type="submit" class="bg-blue-200 text-white p-2 rounded-lg mt-2 shadow">🔍</button>
    </form>
  </div>
</template>

<script>
export default {
    data: () => ({
        busqueda: ''
    }),
    methods: {
        getData(){
            this.emit('buscar', this.busqueda);
            this.busqueda = '';
        }
    }

}
</script>
