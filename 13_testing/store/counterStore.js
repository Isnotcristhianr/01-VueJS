import { reactive } from 'vue';

export const counterStore = reactive({
    count: 0,
    increment: () => {
        counterStore.count++
    },
    decrement: () => {
        counterStore.count--
    },
    reset: () => {
        counterStore.count = 0
    }
}
)