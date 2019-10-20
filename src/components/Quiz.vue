<template>
  <div>
    <Content />
    <Answer />
  </div>
</template>

<script>
import Content from "./Content";
import Answer from "./Answer.vue";
export default {
  name: "Quiz",
  components: {
    Content,
    Answer
  },
  data: () => {
    return {
      databaseRef: null
    };
  },
  methods: {},
  created: function() {}
};
</script>

<style scoped>
</style>
