<template>
  <div id="msg">
    新人を応援しよう！
    <v-text-field
      autofocus
      filled
      class="mx-2"
      single-line
      label="コメント"
      v-model="messageBox"
      required
      hint="15字以内"
      counter
      clearable
    ></v-text-field>
    <v-btn v-on:keyup.enter="sendMsg" @click="sendMsg" color="primary">Send!</v-btn>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Info",
  data: () => {
    return {
      messageBox: ""
    };
  },
  methods: {
    sendMsg: function() {
      if (this.messageBox.length > 15 || this.messageBox === "") {
        this.messageBox = "";
      } else {
        firebase
          .database()
          .ref("comment")
          .push(this.messageBox);
        this.messageBox = "";
      }
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#msg {
  padding: 10pt;
  text-align: center;
  background-color: white;
  border-radius: 10pt;
  top: 3px;
}
</style>