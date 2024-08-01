<template>
    <div style="text-align: center;">
        <h3>Valor: {{ count }}</h3>
        <button @click="aumentar">+1</button>
        <button @click="disminuir">-1</button>
        <button @click="reset">Reset</button>

        <br>
        <hr>
        <h4>Porcentaje: (iva 12%) {{ procentaje }}%</h4>
    </div>

</template>

<script setup>
    import { ref, computed } from 'vue';

    const initialValue = defineProps({
        initialValue: 
        {
            type: Number,
            default: 50, 
            required: true
        }
    })
    const count = ref(initialValue.initialValue)

    const aumentar = () => {
        count.value++
    }

    const disminuir = () => {
        count.value--
    }

    const reset = () => {
        count.value = 0
    }

    const procentaje = computed(() => {

        return count.value * 0.12
    })


</script>
