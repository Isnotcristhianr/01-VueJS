<template>
  <div style="text-align: center">
    <h3>Valor: {{ count }}</h3>
    <Buttons @cambio="aumentar" title="Aumentar" />
    <Buttons @cambio="disminuir" title="Disminuir" />
    <Buttons @cambio="reset" title="Reset" />

    <br />
    <hr />
    <h4>Porcentaje: (iva 12%) {{ procentaje }}%</h4>
  </div>
</template>

<script setup>
import Buttons from "./Buttons.vue";
import { useCounter } from "../composables/useCounter";

const initialValue = defineProps({
  initialValue: {
    type: Number,
    default: 50,
    required: true,
  },
});

const { count, aumentar, disminuir, reset, procentaje } =
  useCounter(initialValue);
</script>
