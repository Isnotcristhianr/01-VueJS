import { mount } from "@vue/test-utils";
import Contador from "@/components/Contador.vue";

describe('Contador Pruebas', () => {
    it('Validar Msg', () => {
        const wrapper = mount(<Contador />);
        expect(wrapper.find('h1').text()).toBe('Contador: 0');
    })

    it('Auymenta contador +1', async () => {
        const wrapper = mount(<Contador />);
        await wrapper.find('button#add').trigger('click')
        expect(wrapper.find('h1').text()).toBe('Contador: 1');
    })

    it('Disminuye contador -1', async () => {
        const wrapper = mount(<Contador />);
        await wrapper.find('button#diss').trigger('click')
        expect(wrapper.find('h1').text()).toBe('Contador: -1');
    })

    it('Resetea contador', async () => {
        const wrapper = mount(<Contador />);
        await wrapper.find('button#add').trigger('click')
        await wrapper.find('button#add').trigger('click')
        await wrapper.find('button#add').trigger('click')
        await wrapper.find('button#res').trigger('click')
        expect(wrapper.find('h1').text()).toBe('Contador: 0');
    })
})