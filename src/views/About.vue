<template>
  <div class="about">
    <b-container>
      <h1 :title="msg">Curso de VUE</h1>
      <b-row class="mt-3">
        <b-col col lg="12" md="10">
          <b-table striped hover :items="items" :fields="fields">
            <template slot="first_name" slot-scope="data">
              {{ data.item.first_name }}
            </template>
            <template slot="last_name" slot-scope="data">
              {{ data.item.last_name }}
            </template>
            <template slot="avatar" slot-scope="data">
              <b-img :src="data.item.avatar" alt="responsive img" height="75"/>
            </template>
          </b-table>
        </b-col>
      </b-row>
      <ol>
        <li v-for="(item, index) in todos" :key="index">
          {{ item.text }}
        </li>
      </ol>
      <br>
      <h2>FUNCTIONS</h2>
        <span v-if="seen">Text v-if</span>
        <span v-else>Text v-else</span>
      <br><br>
      <h2>METHODS</h2>
      <p>{{ message }}</p>
      <b-row>
          <b-col></b-col>
          <b-col>
            <h3>v-on:</h3>
            <button v-on:click="reserveMessage()">Reserve Msg</button>
          </b-col>
          <b-col>
            <h3>v-model:</h3>
            <input type="text" v-model="message"/>
          </b-col>
          <b-col></b-col>
      </b-row>
      <br><br>
      <h2>COMPUTED</h2>
      <span>Nome:</span>
      <br>
      <input type="text" v-model="firstName"/>
      <br>
      <span>Sobrenome:</span>
      <br>
      <input type="text" v-model="lastName"/>
      <br><br>
      <strong>Nome Completo:</strong><p>{{ fullName }}</p>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      fields: [
        { key: 'first_name', label: 'Nome' },
        { key: 'last_name', label: 'Sobrenome' },
        { key: 'avatar', label: 'Imagem' }
      ],
      msg: 'Curso de vue.js',
      seen: false,
      message: 'Olá VUE!',
      firstName: 'Estevao',
      lastName: 'Braga'
    }
  },
  // created () {
  //   this.$axios.get('https://reqres.in/api/users')
  //     .then((suc) => {
  //       this.items = suc.data.data
  //     })
  //     .catch((err) => {
  //       alert(err)
  //     })
  // },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    },
    reserveMessageC: function () {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reserveMessage () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>
