import { mount } from '@vue/test-utils'
import App from '@/App.vue'

test('Montar H1 Hello', () => {
    const wrapper = mount(<App/>)
   // console.log(wrapper.html());
   expect(wrapper.html()).toBe('<h1>Contador: </h1>')
})