

<template>
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="">
          <div class="form-group">
            <label for="nombre">Proyecto</label>
            <input type="text" class="form-control" id="nombre" required>
          </div>
          <br>
          <div class="form-group">
            <label for="form-label">Actividad</label>
            <select name="" id="" class="form-select text-center " required>
              <option value="" disabled>
                Seleccione una actividad
              </option>
              <option value="1" >Desarrollo</option>
              <option value="2">Diseño</option>
              <option value="3">Administración</option>
            </select>
          </div>
          <br>
          <div class="mb-3">
            <label for="" class="form-check-label">
              <input type="checkbox" class="form-check-input" id="terminos"> Acepto términos y condiciones
            </label>
          </div>
          <button type="submit" class="btn btn-success m-2">Enviar</button>
        </form>
      </div>
    </div>
</template>