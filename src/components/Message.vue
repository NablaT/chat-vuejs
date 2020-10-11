<template>
  <div
    class="message"
    v-bind:class="{ cursor: !message.read }"
    @click="markAsRead"
  >
    <div class="profile-img-wrapper">
      <img class="profile-image" v-bind:src="message.sender.profileImage" />
    </div>
    <div class="col-1">
      <span class="sender">{{ message.sender.name }}</span>
      <span
        class="message-content sm-txt grey-text"
        v-bind:class="{ unread: !message.read }"
        >{{ message.content }}</span
      >
    </div>
    <div class="col-2">
      <div class="date sm-txt grey-text">{{ formatDate }}</div>
      <span class="read-icon" v-if="message.read">
        <i class="fas fa-check-double green-txt sm-txt"></i>
      </span>
      <div class="nb-message blue-background sm-txt" v-else>1</div>
    </div>
  </div>
  <span class="separator"></span>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: Object,
  },
  computed: {
    formatDate() {
      const date = new Date(this.message.date);
      const minutes = date.getMinutes();
      const hours = date.getHours();
      return this.addDecimal(hours) + ":" + this.addDecimal(minutes);
    },
  },
  methods: {
    markAsRead() {
      if (!this.message.read) {
        this.$emit("read", true);
      }
    },
    addDecimal(number) {
      return number < 10 ? "0" + number : number;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  display: flex;
}
.separator {
  border-top: 2px solid #f7f7f7;
  margin-bottom: 1em;
  margin-top: 1em;
}
.content {
  width: 100%;
}
.profile-img-wrapper {
  height: 71px;
  width: 70px;
  overflow: hidden;
  border-radius: 100px;
  display: flex;
}
.profile-image {
  border-radius: 100px;
  position: relative;
  right: 15px;
}
.sender {
  margin-bottom: 1em;
}
.sender,
.unread {
  font-weight: bold;
}
.cursor:hover {
  cursor: pointer;
}
.col-1,
.col-2 {
  display: flex;
  flex-direction: column;
  padding-left: 1em;
}
.col-1 {
  flex: 4;
  text-align: justify;
  text-justify: inter-word;
}
.col-2 {
  align-items: center;
}
.date {
  margin-bottom: 1em;
}
.nb-message {
  color: white;
  border-radius: 20px;
  width: 1.2em;
  padding: 0.1em;
}
.sm-txt {
  font-size: 0.8em;
}
</style>
