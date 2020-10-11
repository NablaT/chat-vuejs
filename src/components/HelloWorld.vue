<template>
  <div class="app">
    <HelloWorld :msg="'Welcome to Your Vue.JS App'"/>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
