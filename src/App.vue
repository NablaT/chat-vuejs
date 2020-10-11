<template>
  <div class="app">
    <Messages class="message-list-container" v-on:message-nb="setMessagesNB" />
    <Menu class="menu-container" :unreadMessages="messageNb" />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Messages from "./components/Messages.vue";

export default {
  name: "App",
  components: {
    Messages,
    Menu
  },
  data() {
    return {
      messageNb: 0,
    };
  },
  methods: {
    setMessagesNB(newMessageNb) {
      this.messageNb = newMessageNb;
    },
  },
};
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app {
  display: flex;
  flex-direction: column;
}
.message-list-container {
  flex: 2 0 auto;
}
.menu-container{
  flex-shrink: 0;
}
.blue-txt {
  color: #1ea5e9;
}
.blue-background {
  background-color: #1ea5e9;
}
.green-txt {
  color: #01cc46;
}
.grey-text {
  color: #a2a8ae;
}
</style>
