<script setup>
import { reactive, ref } from "vue";
import Inputs from "@/components/Inputs.vue";

const msg = ref("Hola, Ref composition API");
msg.value = "Adios, Ref composition API";

const nombre = ref("Nombre");

const nivel = ref("0");

//objetos reactivos
const formulario = reactive({
  name: [],
  level: [],
  num: 0,
});
</script>

<template>
  <div>
    <h1>Refs</h1>
    <hr />
    {{ msg }}

    <br />
    <hr />

    <!-- Formulario -->
    <h2>Refs</h2>
    <form action="">
      <input
        type="text"
        v-model="nombre"
        name=""
        id=""
        placeholder="Ingresa tu Nombre"
      />
      <label for="">{{ nombre }}</label>
      <select v-model="nivel" name="nivel" id="">
        <option value="0" disabled selected>Selecciona un nivel</option>
        <option value="1">Nivel 1</option>
        <option value="2">Nivel 2</option>
        <option value="3">Nivel 3</option>
      </select>
      <label for="">{{ nivel }}</label>
    </form>

    <hr />
    <h2>Objetos reactivos</h2>
    <form action="">
      <label for="">
        Tegnologia:
        <input
          type="number"
          name=""
          id=""
          min="1"
          max="5"
          v-model="formulario.num"
        />
        <label for="">{{ formulario.num }}</label>
      </label>
      <br />

      <div v-for="num in formulario.num" :key="num">
        <inputs :num="num" :formulario="formulario" />
      </div>
    </form>
  </div>
</template>
