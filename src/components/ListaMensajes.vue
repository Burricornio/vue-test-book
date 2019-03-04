
<template>
  <ul>
    <Mensaje
      v-for="(mensaje, indice) in mensajes"
      :key="indice"
      :mensaje= "mensaje"
      >
    </Mensaje>
  </ul>
</template>

<script>
import Mensaje from './Mensaje.vue'

export default {
    name: 'list',
    components: {
      Mensaje
    },
    props: ['mensajes']
  }
</script>
