<template>
  <body>
    <link
      href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
      rel="stylesheet"
    />
    <v-app>
      <v-toolbar>
        <v-toolbar-title>
          <b>
            {{ this.$store.state.quizValue["title"] }}
            <br />
            <small>あなたの名前は{{ this.$store.state.userID }}です</small>
          </b>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text icon color="gray">
          <i class="fas fa-info-circle fa-2x" @click.stop="dialog = true"></i>
        </v-btn>
      </v-toolbar>
      <div class="bg">
        <div id="nicoview"></div>
        <div
          v-if="
            this.$store.state.userID === null ||
              this.$store.state.userID === undefined
          "
        >
          <UserNotFound />
        </div>
        <div v-else-if="this.$store.state.quizValue['quizStatus'] === 'quiz'">
          <Quiz />
        </div>
        <div
          v-else-if="this.$store.state.quizValue['quizStatus'] === 'standby'"
        >
          <StandBy />
        </div>
        <div v-else>
          <StatusNotFound />
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
import StatusNotFound from "@/components/StatusNotFound";
import StandBy from "@/components/StandBy";
import Info from "../private/Info";
import UserNotFound from "@/components/UserNotFound";
export default {
  name: "App",
  metaInfo: {
    title: "quiz-cli",
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  },
  components: {
    Quiz,
    Info,
    StatusNotFound,
    StandBy,
    UserNotFound
  },
  data: () => {
    return {
      dialog: false
    };
  },
  computed: {},
  created: function() {
    this.$store.dispatch("initUserID");
    this.$store.dispatch("updateState");
    //created のレンダリングが終わったあとに実行する必要があるので
  },
  mounted() {
    this.nico();
  },
  methods: {
    //これベース
    nico: function() {
      var comment1 = document.createTextNode("hello1");
      var comment2 = document.createTextNode("hello2");
      var nicoview = document.getElementById("nicoview");
      var nhNode1 = document.createElement("div");
      var nhNode2 = document.createElement("div");
      nhNode1.setAttribute("id", "nico"); //add <div id="nico">
      nhNode2.setAttribute("id", "nico"); //add <div id="nico">
      nhNode1.appendChild(comment1); //<div id=nicoview><nico>hello<nico/></nicoview>
      nhNode2.appendChild(comment2); //<div id=nicoview><nico>hello<nico/></nicoview>
      nicoview.appendChild(nhNode1);
      setTimeout(function() {
        nicoview.appendChild(nhNode2);
      }, 1000);

      console.log(nicoview);
    }
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
  background-color: #db0031;
  background-image: repeating-linear-gradient(
    -45deg,
    #e43751,
    #e43751 7.5px,
    transparent 0,
    transparent 15px
  );
}
#nico {
  font-size: 100px;
  position: absolute;
  mix-blend-mode: normal;
  z-index: 99;
  margin: 0;
  padding-left: 100%;
  display: inline-block;
  white-space: nowrap;
  animation-name: nico;
  animation-timing-function: linear;
  animation-duration: 10s;
  animation-iteration-count: １;
}
@keyframes nico {
  from {
    transform: translate(0%);
  }
  99%,
  to {
    transform: translate(-100%);
  }
}
</style>
