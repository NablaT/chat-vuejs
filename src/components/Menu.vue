<template>
  <div class="menu">
    <i class="fas fa-user-friends"></i>
    <i class="fas fa-phone"></i>
    <i class="far fa-comments selected"> 
      <span class="unread" v-if="unreadMessages > 0">&nbsp;{{unreadMessages}}</span> 
      <span v-else>&nbsp;&nbsp;</span>
    </i> 
    <i class="fas fa-user-friends"></i>
    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script>
export default {
  name: "Menu",
  computed: {
    unreadMessages() {
      return this.$store.getters.numberOfUnreadMessages;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
}
.fas, .far {
  margin: 0.8em;
  color: #A2A8AE;
}
.selected {
  color: #1ea5e9;
  font-weight: bold;
}
</style>
