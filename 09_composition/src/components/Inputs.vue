<template>
    <div>

        <label for=""> Tec: #{{ num }} </label>
        <br />
        
        <input
        type="text"
        v-model="formulario.name[num]"
        name=""
        id=""
        placeholder="Ingresa tu Nombre"
        />
        <label for="">{{ formulario.name[num] }}</label>
        <br />
        
        <select v-model="formulario.level[num]" name="nivel" id="">
            <option value="0" disabled selected>Selecciona un nivel</option>
            <option value="1">Nivel 1</option>
            <option value="2">Nivel 2</option>
            <option value="3">Nivel 3</option>
        </select>
        <label for="">{{ formulario.level[num] }}</label>
    </div>
</template>

<script setup>
import { defineProps, onUnmounted } from "vue";
import { onMounted } from "vue";

const { num, formulario } = defineProps(["num", "formulario"]);

//life cicle hoocks
onUnmounted(() => {
    console.log("Componente desmontado");
    formulario.name[num] = null;
    formulario.level[num] = null;
});
</script>

<style>

</style>