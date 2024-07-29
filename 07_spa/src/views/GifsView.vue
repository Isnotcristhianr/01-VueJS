<template>
  <div>
    <h1 class="text-3xl font-bold text-center">Buscador Gifs</h1>
    <p class="text-center mt-5">Busca gifs en la barra de navegación</p>


    <Search @buscar="getGifs" />

    <div v-if="gifs.length === 0">
      <Loading />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 m-2">
      <div v-for="gif in gifs" :key="gif.id" class="rounded-lg shadow-md bg-white p-2">
        <Card :gif="gif" />
      </div>
    </div>
  </div>
</template>

<script>

import Card from '../components/Card.vue';
import Search from '../components/Search.vue';
import Loading from '../components/Loading.vue';
import swal from 'sweetalert2';

export default {
  components: {
    Card, Search, Loading
  },
  data: () => ({
    gifs: []
  }),
  methods: {
    async getGifs(busqueda = 'cat') {

      if (busqueda.trim() === "") {
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes escribir algo en el buscador',
        });
        return;
      }

      const data = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=76l1Z6KuzNGdrTRMNOrT183vGkkNafCm&q=${busqueda}`);
      const res = await data.json();
      console.log(res);
      this.gifs = res.data;
    }
  },
  created() {
    this.getGifs();
  }
}
</script>