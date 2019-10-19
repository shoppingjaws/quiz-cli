<template>
  <div>
    <Question />
    <Answer />
  </div>
</template>

<script>
import Question from "./Question";
import Answer from "./Answer.vue";
export default {
  name: "Quiz",
  components: {
    Question,
    Answer
  },
  data: () => ({})
};
</script>

<style scoped>
</style>