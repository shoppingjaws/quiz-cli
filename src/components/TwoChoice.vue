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
  </center>
</template>
<script>
import firebase from "firebase";
export default {
  name: "TwoChoice",
  components: {},
  methods: {
    vote: function(value) {
      firebase
        .database()
        .ref(
          "vote/" + this.$store.state.userID + "/" + this.$store.state.quizID
        )
        .set(value);
    }
  }
};
</script>

<style/>
