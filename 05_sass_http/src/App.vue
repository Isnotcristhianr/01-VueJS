    <script>
    import Formulario from '../src/components/Formulario.vue'
    import Data from '../src/components/Data.vue'
    import Grid from '../src/components/Grid.vue'
    export default {
      components: { Formulario, Data, Grid },

    }
</script>
    
<template>
  <div>

    <div class="contenedor">
      <h1>Cotizador Criptomonedas</h1>
    </div>


    <div class="contenedor">
      <grid>
        <formulario />

        <Data />
      </grid>
    </div>

  </div>
</template>

