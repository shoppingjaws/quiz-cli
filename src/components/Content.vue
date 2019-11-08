<template>
  <div>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-card-text>
        <v-card-title>Q{{this.$store.state.quizID}}</v-card-title>
        <p class="display-1 text--primary">{{ this.$store.state.quizTitle }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Content",
  data: () => {
    return {
      questionTitle: "",
      questionId: ""
    };
  },
  components: {},
  created: function() {}
};
</script>

<style>
</style>