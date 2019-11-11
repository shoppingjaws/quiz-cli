<template>
<body>
  <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet" />
  <v-app>
    <v-toolbar>
      <v-toolbar-title>
        <b>{{this.$store.state.quizValue['title']}}</b>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text icon color="gray">
        <i class="fas fa-info-circle fa-2x" @click.stop="dialog = true"></i>
      </v-btn>
    </v-toolbar>
    <div class="bg">
      <div v-if="true">
        <div v-if="true">
          <Quiz />
        </div>
        <div v-else-if="false">
          <StandBy />
        </div>
        <div v-else>
          <StatusNotFound />
        </div>
      </div>
      <div v-else-if="this.$store.state.userIdExist === false">
        <UserNotFound />
      </div>
      <v-dialog v-model="dialog" max-width="90%">
        <Info />
      </v-dialog>
    </div>
  </v-app>
</body>
</template>

<script>
import Quiz from "@/components/Quiz";
import UserNotFound from "@/components/UserNotFound";
import StatusNotFound from "@/components/StatusNotFound";
import StandBy from "@/components/StandBy";
import Info from "../private/Info";
//import firebase from "firebase";
export default {
  name: "App",
  metaInfo: {
    title: "quiz-cli",
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  },
  components: {
    Quiz,
    UserNotFound,
    StatusNotFound,
    StandBy,
    Info
  },
  data: () => {
    return {
      dialog: false
    };
  },
  computed: {},
  created: function() {
    this.$store.dispatch("asyncUpdateState");
  }
};
</script>

<style>
html {
  height: 100vh;
  overflow: hidden;
}

body {
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.bg {
  width: 100%;
  height: 100vh;
  background-color: #fc693b;
  background-image: repeating-linear-gradient(
    -45deg,
    #ff5722,
    #ff5722 7.5px,
    transparent 0,
    transparent 15px
  );
}
</style>
