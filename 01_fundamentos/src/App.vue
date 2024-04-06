<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.svg" width="125" height="125">
    <small>
      <h1>Hola VueJs 3</h1>
    </small>
    <hr/>
    <h2>Contador: </h2>
    <button>+1</button>
    <button>-1</button>
    <button>Reset</button>
  </div>

</template>

<style scoped>
  .container {
    text-align: center;
  }

  h1{
    font-weight: bolder;
  }

  small{
    color: #666;
  }

  h2{
    font-size: 2.5rem;
  }

  button{
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border-radius: 0.5rem;
    background-color: #41b883;
    color: white;
    border: none;
  }
</style>