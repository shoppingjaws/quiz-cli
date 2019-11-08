<template>
  <center>
    <br />
    <div class="text-center">
      <v-content>
        <v-container>
          <v-layout>
            <v-flex>
              <v-btn class="pa-2" fab dark large color="blue" @click="vote(true)">
                <v-icon dark>mdi-thumb-up</v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn class="pa-2" fab dark large color="pink" @click="vote(false)">
                <v-icon dark>mdi-thumb-down</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </div>
    <v-snackbar v-model="snackbar" :multi-line="true">
      {{ text }}
      <v-btn color="red" :timeout="10" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </center>
</template>
<script>
import firebase from "firebase";
export default {
  name: "TwoChoice",
  data: () => {
    return {
      snackbar: false,
      text: "投票が完了しました"
    };
  },
  components: {},
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

<style/>
