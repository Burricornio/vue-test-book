import { mount } from '@vue/test-utils'
import ListaMensajes from '@/components/ListaMensajes.vue'
import Mensaje from '@/components/Mensaje.vue'

describe('ListaMensajes.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ListaMensajes, {
      propsData: {
        mensajes: ['Item test']
      }
    })
  })

  it('Tiene la estructura HTML esperada', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('ha recibido ["Item test"] como la propiedad mensajes', () => {
    expect(wrapper.vm.mensajes).toEqual(['Item test'])
  })

  // Usamos is para afirmar sobre el componente raíz y contains
  // para checkear si existen sub-componentes. Así como,
  // find, todos pueden recibir un Selector: ya sea un
  // Selector de CSS o un Componente

  it('Es un componente ListaMensajes', () => {
    expect(wrapper.is(ListaMensajes)).toBe(true)
    // O como Selector CSS del _markup_ generado:
    expect(wrapper.is('ul')).toBe(true)
  })

  it('Contiene un component <Mensaje>', () => {
    expect(wrapper.contains(Mensaje)).toBe(true)
    expect(wrapper.contains('.mensaje')).toBe(true)
  })

  it('Ambos ListaMensajes y Mensaje son instancias de Vue', () => {
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.find(Mensaje).isVueInstance()).toBe(true)
  })

  // Testearemos la Estructuras en mayor detalle
  it('Elemento ensaje existe', () => {
    expect(wrapper.find('.mensaje').exists()).toBe(true)
  })

  it('Mensaje no es vacio', () => {
    expect(wrapper.find(Mensaje).isEmpty()).toBe(false)
  })

  it('Mensaje tiene un atributo de clase de valor "mensaje"', () => {
    expect(wrapper.find(Mensaje).classes()).toContain('mensaje')
  })

  it('Mensaje tiene el estilo "margin-top: 10"', () => {
  expect(wrapper.find(Mensaje).attributes().style).toBe('margin-top: 10px;')
  })

  // Eventos
  it('Llama a gestionarMensajeClick cuando @mensaje-click se produce', () => {
    const stub = jest.fn()
    wrapper.setMethods({ gestionarMensajeClick: stub })

    wrapper.find(Mensaje).vm.$emit('mensaje-clickado', 'gato')
    expect(stub).toBeCalledWith('gato')
  })
})
