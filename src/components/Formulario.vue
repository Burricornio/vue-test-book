<template>
  <div>
    <form @submit.prevent="onSubmit(inputValue)" action="">
      <input type="text" v-model="inputValue">
      <span class="reversed">{{ reversedInput }}</span>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['reversed'],
  // forma Cesar con inyección de dependencias, inversión de control
  // inject: ['http'],
  data: () => ({
    inputValue: '',
    results: []
  }),
  watch: {
    inputValue (newVal, oldVal) {
      if (newVal.trim().length && newVal !== oldVal) {
        console.log(newVal)
      }
    }
  },
  computed: {
    reversedInput () {
      return this.reversed ? this.inputValue.split('').reverse().join('') : this.inputValue
    }
  },
  methods: {
    onSubmit (value) {
      // Forma Cesar
      // const promesaGet = this.http.get('https://jsonplaceholder.typicode.com/posts?q=' + value)
      const promesaGet = axios.get('https://jsonplaceholder.typicode.com/posts?q=' + value)

      promesaGet.then(results => {
        this.results = results.data
      })

      return promesaGet
    }
  }
}
</script>
