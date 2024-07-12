<script>
export default {
  data: () => ({
    nombre: '',
    actividad: '',
    terminos: false,
    proyectos: [],
    numProyectos: 0,
    estadoCompletado: false
  }),
  methods: {
    registrarProyecto() {

      //completado: false

      const proyecto = {
        nombre: this.nombre,
        actividad: this.actividad,
        terminos: this.terminos
      }

      this.proyectos.push(proyecto)

      console.log(
        this.proyectos
      )

      this.nombre = ""
      this.actividad = ""
      this.terminos = false

    },
    cambioEstado(id) {
      this.proyectos[id].terminos = !this.proyectos[id].terminos
      if(this.proyectos[id].terminos == false){
        this.estadoCompletado = false
      }else{
        this.estadoCompletado = true
      }
    }
  },
  computed: {
    numProyectos() {
      return this.proyectos.length
    }
  }
}
</script>


<template>
  <div>

    <hr>
    <!--
    <pre>
      Proyecto: {{ nombre }}
        Actividad: {{ actividad }}
        Terminos: {{ terminos }}
      </pre>
      -->

    <div class="row">
      <div class="col-12 col-md-4">
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
                <input type="checkbox" class="form-check-input" id="terminos" v-model.trim="terminos"> Acepto términos y
                condiciones
              </label>
            </div>
            <button type="submit" class="btn btn-success m-2">Enviar</button>
          </form>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Proyecto</th>
                <th>Actividad</th>
                <th>Terminos</th>
                <th>Completado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(proyecto, index) in proyectos" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ proyecto.nombre }}</td>
                <td>{{ proyecto.actividad }}</td>
                <td @click="cambioEstado(index)" :class="proyecto.terminos ? 'bg-success' : 'bg-danger'">{{
                  proyecto.terminos ? "Si" : "No" }}</td>
                <td>
                  <label class="text text-primary" >
                    {{ proyecto.terminos ? "Completado" : "Incompleto" }}
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>