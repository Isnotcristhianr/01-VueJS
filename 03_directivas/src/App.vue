<script>
export default {
  data() {
    return {
      mensaje: 'Hola VueJs',
      html: '<p>Soy un parrafo html puro inyectado</p>',
      edad: 12,
      usuarios: [
        { nombre: 'Juan', edad: 20 },
        { nombre: 'Pedro', edad: 30 },
        { nombre: 'Maria', edad: 40 },
      ],
      clicks: 0,
      url: "https://cdn.svgporn.com/logos/google-gemini.svg?response-content-disposition=attachment%3Bfilename%3Dgoogle-gemini.svg"
    };
  },
  methods: {
    add() {
      this.edad++;
    },
    dis() {
      this.edad--;
    },
    click() {
      this.clicks++;
    }
  }
};
</script>

<template>
  <div class="dir">
    <h1>Directivas</h1>
    <hr>
    <!-- v-text -->
    <input type="text" v-model="mensaje">
    <!-- v html -->
    <div v-html="html"></div>
    <!--  v show -->
    <label for="">V-show</label>
    <p> Edad: {{ edad }} </p>
    <button @click="add()">+</button>
    <button @click="dis()">-</button>
    <p v-show="edad >= 18">Eres mayor de edad</p>
    <p v-show="edad < 18">Eres menor de edad</p>
    <br>
    <!-- v-if -->
    <label for="">V-Condicionales</label>
    <p v-if="edad >= 18 && edad > 0 && edad < 100">Edad Valida</p>
    <p v-else>Edad Invalida</p>
    <br>
    <!-- v-for -->
    <label for="">V-For</label>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.nombre">
        {{ usuario.nombre }} - {{ usuario.edad }}
      </li>
    </ul>
    <br>
    <!-- V-On -->
    <label for="">V-On</label>
    <div @click="click" class="contador">
      Clicks en div: {{ clicks }}
    </div>
    <br>
    <!-- v-bind -->
    <label for="">V-Bind</label>
    <br>
    <img :src="url" alt="Google" width="100">
    

  </div>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.dir {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 5px;
  margin: 20px;
}

.dir {
  text-align: center;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 5px;
  margin: 20px;
}

button {
  padding: 5px 10px;
  margin: 5px;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

input {
  padding: 5px 10px;
  margin: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: #f1f1f1;
}

p {
  font-size: 18px;
}

label {
  font-size: 20px;
  font-weight: bold;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  margin: 5px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

li:hover {
  background-color: #f1f1f1;
}

.contador {
  padding: 10px;
  margin: 10px;
  background-color: red;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>
