<template>
  <center>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn large color="error" width="150pt" @click="vote(1)">
          {{ this.$store.state.quizValue["quizChoice1"] }}
          <div id="choice">
            :{{ this.$store.state.quizValue["quizChoice1Odds"] }}点
          </div>
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="primary" width="150pt" @click="vote(2)">
          {{ this.$store.state.quizValue["quizChoice2"] }}
          <div id="choice">
            :{{ this.$store.state.quizValue["quizChoice2Odds"] }}点
          </div>
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="success" width="150pt" @click="vote(3)">
          {{ this.$store.state.quizValue["quizChoice3"] }}
          <div id="choice">
            :{{ this.$store.state.quizValue["quizChoice3Odds"] }}点
          </div>
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="warning" width="150pt" @click="vote(4)">
          {{ this.$store.state.quizValue["quizChoice4"] }}
          <div id="choice">
            :{{ this.$store.state.quizValue["quizChoice4Odds"] }}点
          </div>
        </v-btn>
      </div>
    </v-col>

    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">{{ dialogTitle }}</v-card-title>
        <v-card-text>{{ dialogText }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </center>
</template>

<script>
import firebase from "firebase";
export default {
  name: "FourChoice",
  data: () => {
    return {
      dialogTitle: "投票が完了しました",
      dialogText: "再投票可能になるまで10秒ほどお待ち下さい",
      dialog: false
    };
  },
  created: function() {},
  methods: {
    vote: function(ans) {
      var that = this;
      var updateVote = {};
      var updateUser = {};
      updateVote[this.$store.state.userID] = ans;
      updateUser[this.$store.state.quizValue["quizID"]] = ans;
      firebase
        .database()
        .ref("vote/" + this.$store.state.quizValue["quizID"] + "/")
        .update(updateVote)
        .then(() => {
          firebase
            .database()
            .ref("user/" + this.$store.state.userID + "/")
            .update(updateUser);
        })
        .then(() => {
          this.dialog = true;
          setTimeout(function() {
            that.dialog = false;
          }, 10000);
        });
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
