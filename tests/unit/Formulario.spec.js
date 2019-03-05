import { shallowMount } from '@vue/test-utils'
import Formulario from '@/components/Formulario.vue'
import { doesNotReject } from 'assert';

describe('Formulario.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Formulario)
  })

  it('El HTML no ha sufrido modificaciones', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  describe('Propiedades', () => {

    it('devuelve la cadena que le pasemos si la propiedad reversed no es true', () => {
      wrapper.setData({ inputValue: 'Probando componente' })

      expect(wrapper.vm.reversedInput).toBe('Probando componente')
    })

    it('devuelve la cadena invertida si la propiedad reversed es true', () => {
      wrapper.setData({ inputValue: 'Hola' })
      wrapper.setProps({ reversed: true })

      expect(wrapper.vm.reversedInput).toBe('aloH')
    })
  })

  describe('Watchers - inputValue', () => {
    let spy

    beforeAll(() => {
      spy = jest.spyOn(console, 'log')
    })

    afterEach(() => {
      // Limpiamos el spy
      spy.mockClear()
    })

    it('no se llama si se pasa valor vacío (sin espacios delante)', () => {
      wrapper.setData({ inputValue: '   ' })
      expect(spy).not.toBeCalled()
    })

    it('no se llama si los valores son iguales', () => {
      wrapper = shallowMount(Formulario, {
        data: () => ({ inputValue: 'Lemmy super perrete' })
      })
      wrapper.setData({ inputValue: 'Lemmy super perrete' })

      expect(spy).not.toBeCalled()
    })

    it('se llama con un nuevo valor en el resto de casos', () => {
      wrapper.setData({ inputValue: 'Lemmy el perrete' })
      expect(spy).toBeCalled()
    })
  })
})
