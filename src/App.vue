<template>
  <v-app>
    <div class="bg">
      <Quiz></Quiz>
    </div>
  </v-app>
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
<style scoped>
/* TODO: Upgrade CSS https://deshinon.com/2019/03/06/background-oshare-kopipe/ */

.bg {
  width: 100%;
  height: 3150px;
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
