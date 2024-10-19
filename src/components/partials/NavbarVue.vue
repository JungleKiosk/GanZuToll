<script>
export default {
  data() {
    return {
      isDarkMode: true
    };
  },
  mounted() {
    if (localStorage.getItem('theme') === 'light') {
      this.isDarkMode = false;
      document.body.classList.add('light_mode');
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('light_mode');

      const theme = this.isDarkMode ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    }
  }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand px-5" href="/"><img src="./assets/img/logo/logo_completo.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto gap-3">
                    <li class="nav-item">
                        <RouterLink exact-active-class="active" class="navlink" to="/1">1</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink exact-active-class="active" class="navlink" to="/2">2</RouterLink>
                    </li>
                </ul>
                <span class="btn btn-info" @click="toggleDarkMode">
                    <span v-if="isDarkMode">☀️</span>
                    <span v-else>🌙</span> Switch Mode
                </span>
            </div>

        </div>
    </nav>


</template>

<style></style>