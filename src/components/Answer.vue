<template>
  <div>
    <FourChoice />
    <TwoChoice />
  </div>
</template>

<script>
import FourChoice from "./FourChoice.vue";
import TwoChoice from "./TwoChoice";
export default {
  name: "Quiz",
  components: {
    FourChoice,
    TwoChoice
  },
  data: () => ({})
};
</script>

<style scoped>
</style>