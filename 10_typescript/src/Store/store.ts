import { reactive } from "vue";
import type { Store } from "../interfaces/Store";

const store = reactive<Store>({
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  estudiante: true,
  crecer: () => {
    store.edad++;
  },
});

export default store;
