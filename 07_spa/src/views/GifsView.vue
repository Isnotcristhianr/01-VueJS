<template>
  <div>
    <h1 class="text-3xl font-bold text-center">Buscador Gifs</h1>
    <p class="text-center mt-5">Busca gifs en la barra de navegación</p>

    <div class="">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 m-2">
        <div v-for="gif in gifs" :key="gif.id" class="rounded-lg shadow-md bg-white p-2">
          <div class="text-center">
            <img :src="gif.images.original.url" alt="Gif" class="rounded-t-lg" height="100">
          </div>
          <div class="p-4 shadow">
            <p class="text-center font-bold">{{ gif.title }}</p>
          </div>
          <div class="text-center m-2 p-2 ">
            <a href=""
              class="rounded-full bg-blue-400 text-white m-3 p-2 xl:px-24 md:px-5 sm:px-10 transition-all duration-300">
              <img src="../assets/Cloud UI Interface Icon.svg" alt="Cloud icon" class="w-5 h-5 inline-block">
              Descargar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      cloudIcon
    }
  },
  data: () => ({
    gifs: []
  }),
  methods: {
    async getGifs() {
      const data = await fetch('https://api.giphy.com/v1/gifs/search?api_key=76l1Z6KuzNGdrTRMNOrT183vGkkNafCm&q=programer');
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