<template lang="pug">
div
  h1 Hello World
  p This is a paragraph
  p This is another paragraph

div.element
  ol
    li.element2 Item 1
    li#id Item 2
    li Item 3
    li Item 4
    li Item 5

div
  label Enlace
  br
  a(
    href="https://www.google.com"
    target="_blank"
    ) Google Pug

div
  h2 Papeleria
  ul
    li(v-for="papel in papeleria" :key="papel.id") {{ papel.nombre }} - {{ papel.precio }}

div
  h2 Componente props
  Lista(:elementos="papeleria")

</template>

<script>
import Lista from './components/Lista.vue'

export default {
  components: {
    Lista
  },
  data: () => ({
    msg: 'Hello World',
    papeleria: [
      { id: 1, nombre: 'Lapiz', precio: 0.5 },
      { id: 2, nombre: 'Boligrafo', precio: 1 },
      { id: 3, nombre: 'Goma', precio: 0.25 },
      { id: 4, nombre: 'Sacapuntas', precio: 1.5 },
      { id: 5, nombre: 'Cuaderno', precio: 2.5 },
    ],
    juegos: [
      { id: 1, nombre: 'Ajedrez', precio: 10 },
      { id: 2, nombre: 'Dominó', precio: 5 },
      { id: 3, nombre: 'Parchís', precio: 7 },
      { id: 4, nombre: 'Monopoly', precio: 20 },
      { id: 5, nombre: 'Risk', precio: 15 },
    ]
  })
}
</script>

<style scoped>
h1 {
  color: rgb(201, 113, 113);
}

.element {
  color: green;
}

.element2 {
  color: blue;
}

#id {
  color: gray;
}
</style>