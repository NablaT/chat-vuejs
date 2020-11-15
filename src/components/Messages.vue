<template>
  <div class="messages-container">
    <h1 class="title">Chats</h1>
    <div class="tabs">
      <span class="tab selected blue-txt">All</span>
      <span class="tab grey-txt">Favorites</span>
      <span class="tab grey-txt">Channels</span>
    </div>
    <div class="messages">
      <Message
        v-for="currentMessage in messages"
        :key="currentMessage.id"
        :message="currentMessage"
        v-on:read="messageRead(currentMessage)"
      />
    </div>
  </div>
</template>

<script>
import Message from "./Message.vue";

export default {
  name: "Messages",
  components: {
    Message,
  },
  computed: {
    messages() {
      return this.$store.getters.sortMessagesByDate;
    },
  },
  created() {
    this.$store.dispatch('setMessages');


    this.$store.dispatch('setCountByNb');


  },
  methods: {
    messageRead(message) {
      const messageIndex = this.messages.findIndex(
        (mess) => mess.id === message.id
      );
      this.messages[messageIndex].read = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.messages-container {
  display: flex;
  flex-direction: column;
}
.title {
  margin-top: 0.2em;
}
.title,
.tabs {
  text-align: left;
}
.tabs {
  margin-bottom: 1.5em;
}
.tab {
  margin-right: 1em;
  padding-bottom: 0.5em;
}
.selected {
  color: #1ea5e9;
  font-weight: bold;
  border-bottom: #24a8e9 2px solid;
}
.messages {
  display: flex;
  flex-direction: column;
}
</style>
