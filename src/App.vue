<template>
  <div id="app">
    <ListaMensajes :mensajes="mensajes">
      <header slot="header">Header externo</header>
      <Mensaje
        v-for="(mensaje, indice) in mensajes"
        :key="indice"
        :mensaje= "mensaje"
        @mensaje-clickado="gestionarMensajeClick"
        >
      </Mensaje>
    </ListaMensajes>
    <Formulario :reversed="true" />
  </div>
</template>

<script>
import ListaMensajes from './components/ListaMensajes.vue'
import Formulario from './components/Formulario.vue'
import Mensaje from './components/Mensaje.vue'
// import axios from 'axios'

export default {
  name: 'app',
  components: {
    ListaMensajes,
    Formulario,
    Mensaje
  },
  // Forma Cesar
  // provide: {
  //   http: axios,
  // },
  data () {
    return {
      mensajes: ['Hola Don Pepito', 'Hola Don José']
    }
  },
  methods: {
    gestionarMensajeClick (mensaje) {
      console.log(mensaje)
    }
  }
}
</script>
