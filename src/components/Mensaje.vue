<template>
  <li style="margin-top: 10px" class="mensaje">{{ mensaje }}</li>
</template>

<script>
export default {
  props: ['mensaje'],
  created() {
    // Tengamos presente evitar la renderización anidada
    // cuando puede haber efectos secundarios (“side effects”),
    // dado que los life cycle hooks de los componentes hijos
    // (created, mounted) serán disparados y por lo tanto puede haber llamadas HTTP u otros efectos secundarios que no queremos que se ejecuten. Para probar lo que comentamos, puedes probar a añadir en el componente Mensaje.vue un console.log en el hook created():
    console.log('Creado')
  }
}
</script>
