<template>
  <div>
    {{contact.name}}
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
      contact: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
