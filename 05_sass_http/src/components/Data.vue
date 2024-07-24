<template>
    <div class="data">
        <h2>Información de Conversión...</h2>

        <h3>
            <span class="cript">
                {{ cripto }}
            </span>
            -
            <span class="moneda">
                {{ divisa }}
            </span>
        </h3>

        <img :src="`https://www.cryptocompare.com${img}`" alt="">
        <p>El precio es: <strong>
                {{ precio }}
            </strong></p>

    </div>

</template>

<script>
export default {
    props: {
        cripto: {
            type: String,
            required: true
        },
        divisa: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },

    },
}
</script>