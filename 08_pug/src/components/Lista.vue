<template lang="pug">
    ol
        li(v-for="elemento in elementos" :key="elemento.id" @click="select(elemento)") {{ elemento.nombre }}
</template>

<script>
export default {
    props: ['elementos'],
    methods: {
        select(elemento) {
            console.log(elemento),
                alert(elemento.nombre)
        }
    }
}
</script>

<style></style>