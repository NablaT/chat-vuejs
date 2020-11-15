<template>
  <div>
    Contacts
    <div class="contacts">
      <Contact v-for="contact in contacts" :key="contact.id" :contact="contact"/>
    </div>
  </div>
</template>

<script>
import Contact from "./Contact";

export default {
  name: "Contacts",
  components: {
    Contact,
  },
  computed: {
    contacts() {
      return this.$store.state.contactsModule.contacts;
    },
  },
  created() {
    this.$store.dispatch("setContacts");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
