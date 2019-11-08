<template>
  <center>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn
          large
          color="error"
          width="150pt"
          @click="vote(1)"
        >{{ this.$store.state.quizChoice[0] }}</v-btn>
      </div>
      <div class="my-2">
        <v-btn
          large
          color="primary"
          width="150pt"
          @click="vote(2)"
        >{{ this.$store.state.quizChoice[1] }}</v-btn>
      </div>
      <div class="my-2">
        <v-btn
          large
          color="success"
          width="150pt"
          @click="vote(3)"
        >{{ this.$store.state.quizChoice[2] }}</v-btn>
      </div>
      <div class="my-2">
        <v-btn
          large
          color="warning"
          width="150pt"
          @click="vote(4)"
        >{{ this.$store.state.quizChoice[3] }}</v-btn>
      </div>
    </v-col>
    <v-snackbar v-model="snackbar" :multi-line="true">
      {{ text }}
      <v-btn color="red" :timeout="10" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </center>
</template>

<script>
import firebase from "firebase";
export default {
  name: "FourChoice",
  data: () => {
    return {
      snackbar: false,
      text: "投票が完了しました"
    };
  },
  created: function() {},
  methods: {
    vote: function(value) {
      firebase
        .database()
        .ref(
          "vote/" + this.$store.state.userID + "/" + this.$store.state.quizID
        )
        .set(value);
      this.snackbar = true;
    }
  }
};
</script>

<style>
</style>