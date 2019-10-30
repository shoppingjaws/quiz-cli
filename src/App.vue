<template>
<body>
  <v-app>
    <div class="bg">
      <Quiz></Quiz>
    </div>
  </v-app>
</body>
</template>

<script>
import Quiz from "@/components/Quiz";
export default {
  name: "App",
  components: {
    // Home
    Quiz
  },
  data: () => {
    return {
      userId: "hoge"
    };
  },
  methods: {},
  created: function() {
    console.debug("accessed url is", location.href);
  }
};
</script>
<style >
/* TODO: Upgrade CSS https://deshinon.com/2019/03/06/background-oshare-kopipe/ */

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
