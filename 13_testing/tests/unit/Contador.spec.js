import { mount } from '@vue/test-utils'
import App from '@/App.vue'

test('Montar Hello', () => {
    const wrapper = mount(<App/>)
   // console.log(wrapper.html());
   expect(wrapper.html()).toBe('<h1>Contador: </h1>')
})

test('Contador como 1', async () => {
    const wrapper = mount(<App />, {
      props: {
        count: 1
      }
    });
    
    // Wait for asynchronous data (replace with your actual logic)
    await new Promise(resolve => setTimeout(resolve, 1000));

    const h1 = wrapper.find('h1');
    expect(h1.text()).toBe('Contador: 1');
  });