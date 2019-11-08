<template>
<body>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>
        <b>チキチキ</b>
        忘年会
        <b>大</b>
        クイズ大会
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text icon color="red">
        <v-icon large @click.stop="dialog = true">mdi-info</v-icon>
      </v-btn>
    </v-toolbar>
    <div class="bg">
      <div v-if="this.$store.state.userIdExist === true">
        <div v-if="this.$store.state.status === 'quiz'">
          <Quiz />
        </div>
        <div v-else-if="this.$store.state.status === 'standby'">
          <StandBy />
        </div>
        <div v-else>
          <StatusNotFound />
        </div>
      </div>
      <div v-else-if="this.$store.state.userIdExist === false">
        <UserNotFound />
      </div>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">新人紹介</v-card-title>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        </v-card>
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
    StandBy
  },
  data: () => {
    return {
      dialog: false
    };
  },
  computed: {},
  created: function() {
    this.$store.dispatch("updateState");
    this.$store.dispatch("checkUserID");
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
