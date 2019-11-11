<template>
  <div>
    <v-card class="mx-auto" max-width="90%" outlined>
      <v-card-text>
        <v-card-title>Q{{this.$store.state.quizValue['quizNum']}}</v-card-title>
        <p class="display-1 text--primary">{{ this.$store.state.quizValue['quizTitle'] }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Content",
  data: () => {
    return {};
  },
  components: {},
  created: function() {}
};
</script>

<style>
</style>