<script>
import Herbst from './Herbst.vue';

export default {
  name: "activity",
  components: {
    Herbst
  }
};
</script>

<template>
  <div class="container">
    <Herbst></Herbst>
    <h2>Aktivitäten</h2>
    <p>Aktivitäten</p>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>
