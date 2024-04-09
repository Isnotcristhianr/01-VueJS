<script>

import Header from "./assets/components/Header.vue";
import Formulario from "./assets/components/Formulario.vue";

export default {
  components: {
    Header,
    Formulario
  },
  data() {
    return {
      url: "https://cdn.svgporn.com/logos/vue.svg?response-content-disposition=attachment%3Bfilename%3Dvue.svg",
      nombre: "",
      edad: 0,
      correo: ""
    };
  },
  methods: {
    addUser() {
      console.log('Usuario agregado: ' + this.nombre + ' ' + this.edad + ' ' + this.correo)
    }
  }
};
</script>

<template>
  <div class="container text-center p-5">

    <Header />

    <!-- Formulario -->
    <Formulario />
  </div>
</template>
