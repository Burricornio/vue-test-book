
<template>
  <ul>
    <li v-for="(mensaje, indice) in mensajes" :key="indice">{{ mensaje }}</li>
  </ul>
</template>

<script>
export default {
    name: 'list',
    props: ['mensajes']
  }
</script>
