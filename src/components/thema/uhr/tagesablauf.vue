<script>
import UhrMenu from './UhrMenu.vue';

export default {
  name: "tagesablauf",
  components: {
    UhrMenu
  }
};
</script>

<template>
  <div class="container">
    <UhrMenu></UhrMenu>
    <h2>Tagesablauf</h2>
    <p>tagesablauf</p>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>