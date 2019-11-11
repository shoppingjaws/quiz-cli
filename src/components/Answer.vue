<template>
  <div>
    <div v-if="this.$store.state.quizValue['quizMode']==='TwoChoice'">
      <TwoChoice />
    </div>
    <div v-else-if="this.$store.state.quizValue['quizMode']==='FourChoice'">
      <FourChoice />
    </div>
  </div>
</template>

<script>
import TwoChoice from "./TwoChoice";
import FourChoice from "./FourChoice";
export default {
  name: "Answer",
  data: () => {
    return {};
  },
  components: {
    TwoChoice,
    FourChoice
  },
  methods: {},
  created: function() {}
};
</script>

<style scoped>
</style>