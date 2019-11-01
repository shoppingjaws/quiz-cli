<template>
  <div>
    <Modal v-if="showModalInfo" @close="showModalInfo = false"></Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  name: "Info",
  components: {
    Modal
  },
  data: () => {
    return {
      showModalInfo: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>