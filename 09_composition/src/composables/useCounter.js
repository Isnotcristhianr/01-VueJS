import { ref, computed } from "vue";

export const useCounter = (initialValue) => {
    //COMPOSABLES
const count = ref(initialValue.initialValue);

const aumentar = () => {
  count.value++;
};

const disminuir = () => {
  count.value--;
};

const reset = () => {
  count.value = 0;
};

const procentaje = computed(() => {
  return count.value * 0.12;
});

return{
    count, aumentar, disminuir, reset, procentaje
}

}