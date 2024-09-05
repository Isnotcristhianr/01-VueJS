import { counterStore } from '../../../store/counterStore';

describe('Pruebas Store forma aislada', () => {

    afterEach(() => {
        counterStore.count = 0;
    });

    it('Aumentar Store +1',  () => {
        counterStore.increment();
        expect(counterStore.count).toBe(1);
    })

    it('Disminuir Store -1',  () => {
        counterStore.decrement();
        expect(counterStore.count).toBe(-1); //0 - 1 depende de after all o after each
    })

    it('Reiniciar Store',  () => {
        counterStore.reset();
        expect(counterStore.count).toBe(0);
    })

    //interaccioones
    it('Incrementar 2 veces',  () => {
        counterStore.increment();
        counterStore.increment();
        counterStore.decrement();
        counterStore.increment();
        expect(counterStore.count).toBe(2);
    })

});