<!-- sfc -> Single File Component -->
<script>
import Grid from './Grid.vue';

export default {
  components: { Grid },
    props: {
        url: String,
        title: String,
        image: String
    }
}
</script>


<template>
    <grid>
        <img :src="image" alt="logo" />
        <h2>{{ title }}</h2>
        <a :href="url" target="_blank">Ver más</a>
    </grid>
</template>

<style scoped>
img {
    width: 8rem;
    height: 8rem;
    padding: 0.5rem;
}

h2 {
    color: #35495e;
}

a {
    color: #42b983;
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #42b983;
}
</style>