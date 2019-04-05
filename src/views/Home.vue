<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <W3List :titulo="titulo2" :items="items2"/>
  </div>
</template>

<script>
// @ is an alias to /src
import W3List from '@/components/W3List.vue'

export default {
  name: 'home',
  components: {
    W3List
  },
  data () {
    return {
      titulo2: 'Novo titulo',
      items2: [
        { nome: 'Estêvão Braga' },
        { nome: 'Patrick Monteiro' },
        { nome: 'Marcelo Garcia' }
      ]
    }
  }
}
</script>
