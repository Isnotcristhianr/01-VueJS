import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('Probar el componente App', () => {

  it('Contador como 0', () => {
      const wrapper = mount(<App/>)
     // console.log(wrapper.html());
     expect(wrapper.html()).toContain('<h1>Contador: 0</h1>')
  })
  
  it('Contador como 1', async () => {
      const wrapper = mount(<App />, {
        props: {
          count: 1
        }
      });
      await wrapper.setProps({ count: 1 });
    });

    //to contain
    it('Contiene el texto h1', () => {
      const wrapper = mount(App)
      expect(wrapper.text()).toContain('Contador:')
    })

})

describe('Suit extra', () => {
  it('prueba cualquiera', () => {
    expect(2+2).toBe(4)
  })
})
