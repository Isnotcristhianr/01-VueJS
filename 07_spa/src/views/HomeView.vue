<template>
  <div>
    <h1 class="text-3xl font-bold text-center">Bienvenido!</h1>

    <p class="text-center mt-5">Aquí tienes un gif aleatorio:</p>

    <div class="flex justify-center mt-5">
      <img :src="img" alt="Random Gif" class="rounded-lg">
    </div>

    <p class="text-center mt-5">Gif: {{ name }}</p>
    <p class="text-center mt-5">Autor: {{ autor }}</p>




  </div>
</template>

<script>
export default {
  data: () => ({
    img: "",
    name: "",
    autor:"",

  }),
  created() {
    this.getRandomGif();
  },
  methods: {
    async getRandomGif() {
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=76l1Z6KuzNGdrTRMNOrT183vGkkNafCm');
      const data = await response.json();
      console.log(data);
      this.img = data.data.images.original.url;
      this.name = data.data.title;
      this.autor = data.data.username;
    }
  }
}
</script>
