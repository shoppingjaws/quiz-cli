<template>
  <center>
    <br />
    <div class="text-center">
      <v-content>
        <v-container>
          <v-layout>
            <v-flex>
              <v-btn large color="error" width="150pt" @click="vote(1)">
                {{ this.$store.state.quizValue["quizChoice1"] }}
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn large color="primary" width="150pt" @click="vote(2)">
                {{ this.$store.state.quizValue["quizChoice2"] }}
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </div>
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
  name: "TwoChoice",
  data: () => {
    return {
      dialogTitle: "投票が完了しました",
      dialogText: "再投票可能になるまで10秒ほどお待ち下さい",
      dialog: false
    };
  },
  components: {},
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

<style />
