<template>
  <center>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn large color="error" width="150pt" @click="vote(1)">
          {{ this.$store.state.quizValue['quizChoice1'] }}
          <div id="choice">:{{this.$store.state.quizValue['quizChoice1Odds']}}点</div>
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="primary" width="150pt" @click="vote(2)">
          {{ this.$store.state.quizValue['quizChoice2'] }}
          <div id="choice">:{{this.$store.state.quizValue['quizChoice2Odds']}}点</div>
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="success" width="150pt" @click="vote(3)">
          {{ this.$store.state.quizValue['quizChoice3'] }}
          <div id="choice">:{{this.$store.state.quizValue['quizChoice3Odds']}}点</div>
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="warning" width="150pt" @click="vote(4)">
          {{ this.$store.state.quizValue['quizChoice4'] }}
          <div id="choice">:{{this.$store.state.quizValue['quizChoice4Odds']}}点</div>
        </v-btn>
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
    vote: function(ans) {
      var update = {};
      update[this.$store.state.quizValue["quizID"]] = ans;
      firebase
        .database()
        .ref("vote/" + this.$store.state.userID)
        .update(update);
    }
  }
};
</script>

<style scoped>
#choice {
  margin: 0 0 0 auto;
  font-weight: bold;
}
</style>