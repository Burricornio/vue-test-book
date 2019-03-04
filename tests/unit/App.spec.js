import App from '@/App.vue'
import { shallowMount } from '@vue/test-utils'

describe('App.vue', () => {

  it('Test de comprobación', () => {
    const test = true
    expect(test).toBe(true)
  })

  it('Tiene la estructura HTML esperada', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Mensajes es igual a ["Item test"]', () => {
    const wrapper = shallowMount(App, {
      data() {
        return {
          mensajes: ['Item test']
        }
      }
    })
    expect(wrapper.vm.$data.mensajes).toEqual(["Item test"])
  })
})
