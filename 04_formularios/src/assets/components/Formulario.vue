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
      <div class="col-12 mb-4">
        <ProgressBar :porcentaje="porcentaje" />
      </div>
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
        <TotalProyectos :numProy="numProy" :proyectos="proyectos" :cambioEstado="cambioEstado" :limpiarLocalStorage= "limpiarLocalStorage" />
      </div>#naty
    </div>
  </div>

</template>

<script>
import ProgressBar from './ProgressBar.vue'
import TotalProyectos from './TotalProyectos.vue'

export default {
  components: { ProgressBar, TotalProyectos },
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

      //guardar localstorage
      this.saveLocalStorage()

      console.log(
        this.proyectos
      )

      this.nombre = ""
      this.actividad = ""
      this.terminos = false

    },
    cambioEstado(id) {

      this.proyectos[id].terminos = !this.proyectos[id].terminos
      if (this.proyectos[id].terminos == false) {
        this.estadoCompletado = false
      } else {
        this.estadoCompletado = true
      }

      //actualizar local storage
      this.saveLocalStorage()
    },
    saveLocalStorage() {
      try {
        localStorage.setItem("proyectos", JSON.stringify(this.proyectos));
      } catch (error) {
        console.error("Error al guardar en localStorage:", error);
      }
    },
    limpiarLocalStorage() {
      //solo clave valor
      localStorage.removeItem("proyectos")
      //todo
      //localStorage.clear();

      this.proyectos = []
    }
  },
  computed: {
    numProy() {
      return this.proyectos.length
    },
    porcentaje() {

      let completados = 0

      this.proyectos.map(proyecto => {
        if (proyecto.terminos)
          completados++
      })

      console.log((completados * 100) / this.numProy)

      return ((completados * 100) / this.numProy) || 0
    },
  },
  mounted() {
    console.log('Componente montado')

    this.proyectos = JSON.parse(localStorage.getItem("proyectos")) || []
  }
}
</script>
