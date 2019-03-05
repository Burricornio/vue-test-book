
<template>
  <div>
    <header class="list-header">
      <slot name="header">
        Este es el header por defecto...
      </slot>
    </header>
    <ul class="lista-mensajes">
      <!-- <Mensaje
        v-for="(mensaje, indice) in mensajes"
        :key="indice"
        :mensaje= "mensaje"
        @mensaje-clickado="gestionarMensajeClick"
        >
      </Mensaje> -->
      <slot />
    </ul>
  </div>
</template>

<script>
// import Mensaje from './Mensaje.vue'

export default {
  name: 'list',
  // components: {
  //   Mensaje
  // },
  // props: ['mensajes'],
  methods: {
    // gestionarMensajeClick(mensaje) {
    //   console.log(mensaje)
    // }
  }
}
</script>
