<script>
export default {
  data: () => ({
    nombre: '',
    actividad: '',
    terminos: false,
    proyectos: []
  }),
  methods: {
    registrarProyecto() {

      const proyecto = {
        nombre: this.nombre,
        actividad: this.actividad,
        terminos: this.terminos
      }
      
      this.proyectos.push(proyecto)

      console.log(
        this.proyectos
      )

      this.nombre=""
      this.actividad=""
      this.terminos=false

    }
  }
}
</script>


<template>
  <div class="row">
    <div class="col-12">
      <form @submit.prevent="registrarProyecto">
        <div class="form-group">
          <label for="nombre">Proyecto</label>
          <input type="text" class="form-control" id="nombre" v-model.trim="nombre" required>
        </div>
        <br>
        <div class="form-group">
          <label for="form-label">Actividad</label>
          <select name="" id="" class="form-select text-center " v-model.trim="actividad" required>
            <option value="" selected hidden disabled>
              Seleccione una actividad
            </option>
            <option value="Desarrollo">Desarrollo</option>
            <option value="Diseño">Diseño</option>
            <option value="Administración">Administración</option>
          </select>
        </div>
        <br>
        <div class="mb-3">
          <label for="" class="form-check-label">
            <input type="checkbox" class="form-check-input" id="terminos" v-model.trim="terminos"> Acepto términos y condiciones
          </label>
        </div>
        <button type="submit" class="btn btn-success m-2">Enviar</button>
      </form>
      <hr>
    </div>
    <pre>
        Proyecto: {{ nombre }}
        Actividad: {{ actividad }}
        Terminos: {{ terminos }}
      </pre>
  </div>
</template>