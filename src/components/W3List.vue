<template>
    <div>
    <h2>{{ titulo }}</h2>
    <b-row class="mt-3">
        <b-col col lg="12" md="10">
          <b-table striped hover :items="items" :fields="fields">
            <template slot="nome" slot-scope="data">
              {{ data.item.nome }}
            </template>
          </b-table>
        </b-col>
    </b-row>
    </div>
</template>

<script>
export default {
  name: 'W3List',
  props: {
    titulo: {
      type: String,
      required: true,
      default: 'titulo do component'
    },
    items: [],
    fields: []
  }
}
</script>
