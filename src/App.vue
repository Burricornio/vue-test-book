<template>
  <div id="app">
    <ListaMensajes :mensajes="mensajes" />
  </div>
</template>

<script>
import ListaMensajes from './components/ListaMensajes.vue'

export default {
  name: 'app',
  components: {
    ListaMensajes
  },
  data () {
    return {
      mensajes: ['Hola Don Pepito', 'Hola Don José']
    }
  }
}
</script>

