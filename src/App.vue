<template>
  <div id="app">
    <ListaMensajes :mensajes="mensajes" />
    <Formulario :reversed="true" />
  </div>
</template>

<script>
import ListaMensajes from './components/ListaMensajes.vue'
import Formulario from './components/Formulario.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    ListaMensajes,
    Formulario
  },
  // Forma Cesar
  // provide: {
  //   http: axios,
  // },
  data () {
    return {
      mensajes: ['Hola Don Pepito', 'Hola Don José']
    }
  }
}
</script>
