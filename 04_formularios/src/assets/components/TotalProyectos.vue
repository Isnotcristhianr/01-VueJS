<template>
    <div>
        <div class="row">
            <div class="col-6">
                <h3>Proyectos registrados: {{ numProy }}</h3>
            </div>
            <div class="col-6 text-end">
                <button @click="limpiarLocalStorage" class="btn btn-danger ">Vaciar 🗑️</button>
            </div>
        </div>
        <hr>
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
                            <label class="text text-primary">
                                {{ proyecto.terminos ? "Completado" : "Incompleto" }}
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: ['numProy', 'proyectos', "cambioEstado", "limpiarLocalStorage"],
   
}
</script>

<style></style>