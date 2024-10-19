<script>
import { RouterView, useRoute } from "vue-router";
import FooterVue from './components/partials/FooterVue.vue';
import NavbarVue from './components/partials/NavbarVue.vue';

export default {
  name: 'App',
  components: {
    FooterVue,
    NavbarVue
  },
  setup() {
    const route = useRoute();
    return { route };
  }
};
</script>

<template>
  <NavbarVue></NavbarVue>

  <div class="content mt-5 pt-5">
    <router-view />
  </div>

  <FooterVue/>

</template>

<style></style>