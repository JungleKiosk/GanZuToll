<script>
import Herbst from './Herbst.vue';

export default {
  name: "food",
  components: {
    Herbst
  }
};
</script>

<template>
  <div class="container">
    <Herbst></Herbst>
    <h2>Essen</h2>
    <p>Essen</p>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>
