<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar, Footer
  },
}
</script>


<template>
  <div>

    <Navbar />

    <div class="container mx-auto p-5 m-4 rounded-sm shadow-md bg-gray-100	">
      <router-view />
    </div>

    <Footer />

  </div>
</template>
