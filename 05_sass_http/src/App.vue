    <script>
    import Formulario from '../src/components/Formulario.vue'
    import Data from '../src/components/Data.vue'
    import Grid from '../src/components/Grid.vue'
    export default {
      components: { Formulario, Data, Grid },
      data() {
        return {
          criptomoneda: "🪙",
          divisa: "💲",
          img: "",
          precio: 0,
          error: null, // Error message
        }
      },
      methods: {
        async obtener(cripto, divisa) {
          {
            this.criptomoneda = cripto;
            this.divisa = divisa;

            const res = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${encodeURI(cripto)}&tsyms=${encodeURI(divisa)}`);
            const data = await res.json();
            console.log(data);

            if (data.Response === "Error") {
              this.error = data.Message;
              return;
            }

            this.img = data.DISPLAY[cripto][divisa].IMAGEURL;
            this.precio = data.DISPLAY[cripto][divisa].PRICE;
            this.simbolo = data.DISPLAY[cripto][divisa].TOSYMBOL;

          }
        },

      }
    }
</script>
    
<template>
  <div>

    <div class="contenedor">
      <h1>Cotizador Criptomonedas</h1>
      <div class="profile">
        <h5>Desarrollado por: </h5>
        <a href="https://isnotcristhianr.me/">IsnotCristhianr</a>
      </div>
    </div>


    <div class="contenedor">
      <grid>
        <formulario @info="obtener" />

        <Data :cripto="criptomoneda" :divisa="divisa" :img="img" :precio="precio" />
      </grid>
    </div>

  </div>
</template>

