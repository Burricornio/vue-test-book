import { shallowMount } from '@vue/test-utils'
import Formulario from '@/components/Formulario.vue'
import axios from './__mocks__/axios'

describe('Formulario.vue', () => {
  let wrapper
  // Forma Cesar
  // let http = {
  //   get: jest.fn()
  // }

  beforeEach(() => {
    // Forma Cesar
    // wrapper = shallowMount(Formulario, { provide: { http }})
    wrapper = shallowMount(Formulario)
    // Resetea los mocks (axios)
    jest.resetModules()
    jest.clearAllMocks()
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
        data: () => ({ inputValue: 'Lemmy super perrete' }),
        // provide: { http } -- Forma Cesar
      })
      wrapper.setData({ inputValue: 'Lemmy super perrete' })

      expect(spy).not.toBeCalled()
    })

    it('se llama con un nuevo valor en el resto de casos', () => {
      wrapper.setData({ inputValue: 'Lemmy el perrete' })
      expect(spy).toBeCalled()
    })
  })

  describe('Metodos - onSubmit(Mock de axios)', () => {

    it('Llama a axios.get and y comprueba el resultado de la promesa', async () => {
      // Forma Cesar
      // http.get.mockResolvedValue('pepito')

      // Forma Cesar
      // expect(http.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts?q=lemmy')

      const resultado = await wrapper.vm.onSubmit('lemmy')

      expect(resultado).toEqual({ data: [3] })
      expect(wrapper.vm.results).toEqual([3])
      expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/posts?q=lemmy')
    })

    //Este test debería fallar, ¡pero no lo hace! Porque axios.get ha sido llamado en el test anterior
    // it('Aquí no debería ser llamado', () => {
    //   expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/posts?q=lemmy')
    // })
  })
})
