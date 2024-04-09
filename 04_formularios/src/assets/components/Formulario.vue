

<template>
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" class="form-control" id="nombre" >
          </div>
          <div class="form-group">
            <label for="edad">Edad</label>
            <input type="number" class="form-control" id="edad" >
          </div>
          <div class="form-group">
            <label for="correo">Correo</label>
            <input type="email" class="form-control" id="correo" >
          </div>
          <button type="submit" class="btn btn-success m-2">Enviar</button>
        </form>
      </div>
    </div>
</template>