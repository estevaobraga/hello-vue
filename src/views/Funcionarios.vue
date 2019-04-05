<template>
    <div>
        <h2>Funcionarios</h2>
        <p>{{ corpo }}</p>
    </div>
</template>

<script>
export default {
  props: {
    corpo: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
