<script>
import Herbst from './Herbst.vue';

export default {
  name: "events",
  components: {
    Herbst
  }
};
</script>

<template>
  <div class="container">
    <Herbst></Herbst>
    <h2>Veranstaltungen</h2>
    <p>Entedankfest</p>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>
