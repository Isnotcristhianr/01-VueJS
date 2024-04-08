<script>
export default {
  data() {
    return {
      url: "https://cdn.svgporn.com/logos/vue.svg?response-content-disposition=attachment%3Bfilename%3Dvue.svg"
    };
  },
  methods: {
    addUser() {
      console.log('Usuario agregado')
    }
  }
};
</script>

<template>
  <div class="dir">
    <h1>Formularios</h1>
    <img :src="url" alt="Vue" width="150">
    <hr>
    <!-- Formulario -->
    <form @submit.prevent="addUser">
      <div>
        <label>Nombre
          <input type="text" placeholder="Nombre" required>
        </label>
      </div>
      <br>
      <div>
        <label>Edad
          <input type="number" placeholder="Edad" required>
        </label>
      </div>
      <br>
      <div>
        <label>Correo
          <input type="email" placeholder="Correo" required>
        </label>
      </div>
      <br>

      <button type="submit">Enviar</button>

    </form>
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

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin: 10px;
}

input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>
