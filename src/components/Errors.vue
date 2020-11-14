<template>
  <div class="app">
      <span class="errors" v-for="error in errors" :key="error">
        {{error}}
      </span>
  </div>
</template>

<script>
export default {
  name: "Errors",
  computed: {
      errors() {
        return this.$store.state.errors.errors;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
