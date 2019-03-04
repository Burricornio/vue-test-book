import { shallowMount } from '@vue/test-utils'
import Mensaje from '@/components/Mensaje.vue'


describe('Mensaje.vue', () => {
  // Vamos a utilizar un función factoría para crear el componente mensaje, pasándole propiedades:
  const createWrapper = propsData => shallowMount(Mensaje, { propsData })
  let wrapper

  it('Tiene el mismo HTML', () => {
    wrapper = createWrapper({ mensaje: 'Hola'})
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Tiene la propiedad mensaje', () => {
    wrapper = createWrapper({ mensaje: 'Hola'})
    expect(wrapper.props().mensaje).toBe('Hola')
  })

  it('No tiene una propiedad llamada gato', () => {
    wrapper = createWrapper({ gato: 'Hola' })
    expect(wrapper.props().gato).toBeUndefined()
  })

  it('Tiene un atributo non-prop llamado "gato"', () => {
    wrapper = createWrapper({ gato: 'Hola' })
    expect(wrapper.attributes().gato).toBe('Hola')
  })

  it('María es la autora por defecto', () => {
    wrapper = createWrapper()
    expect(wrapper.vm.autor).toBe('Maria')
  })

  it('Comprobams validaciones en la prop mensaje', () => {
    const mensaje = createWrapper().vm.$options.props.mensaje
    // Mensaje es de tipo cadena
    expect(mensaje.type).toBe(String)
    // MMensaje es obligatorio
    expect(mensaje.required).toBe(false)
    // Mensaje tiene al menos dos caracteres
    expect(mensaje.validator && mensaje.validator('a')).toBeFalsy()
    expect(mensaje.validator && mensaje.validator('aa')).toBeTruthy()
  })

  describe('Eventos', () => {

    beforeEach(() => {
      wrapper = createWrapper({ mensaje: 'Lemmy' })
    })

    it('llama a "onClick" cuando se clicka en un mensaje-item', () => {
      // stub significa en testing un objeto sustituido
      const stub = jest.fn()
      wrapper.setMethods({ onClick: stub })

      wrapper.find('.mensaje').trigger('click')
      expect(stub).toBeCalled()

      // Otra forma de ver si se ha lanzado una vez
      // wrapper.find('.mensaje').trigger('click')
      // expect(wrapper.emitted('mensaje-clickado')).toHaveLength(1)
    })

    it('emite un evento "mensaje-clickado" cuando el método onClick se invoca', () => {
      const stub = jest.fn()
      wrapper.vm.$on('mensaje-clickado', stub)
      wrapper.vm.onClick()

      expect(stub).toBeCalledWith('Lemmy')
    })
  })
})
