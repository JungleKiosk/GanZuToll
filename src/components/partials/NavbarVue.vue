<script>
export default {
  props: {
    themeClass: {
      type: String,
      required: true
    },
    isDarkMode: {
      type: Boolean,
      required: true
    },
    toggleTheme: {
      type: Function,
      required: true
    }
  }
};
</script>

<template>
  <div :class="themeClass">
    <nav class="navbarstyle navbar navbar-expand-lg fixed-top custom-navbar">
      <div class="container-fluid">
        <RouterLink class="navbar-brand px-5" to="/">🥨</RouterLink>
        <div class="navbar-content" id="navbarNav">
          <RouterLink style="text-decoration: none;" class="navlinkstyle navlink me-2" to="/thema">Themen</RouterLink> <!-- Assicurati di usare "navlink" -->
          <span @click="toggleTheme" class="theme-toggle">
            {{ isDarkMode ? '☀️' : '🌙' }}
          </span>
        </div>
      </div>
    </nav>
  </div>
</template>


<style>
 
</style>

