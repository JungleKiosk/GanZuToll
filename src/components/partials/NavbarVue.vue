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
  <nav :class="['navbar', themeClass]" class=" navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand px-5" href="/">🥨</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      </button>
      <div class="collapse navbar-collapse fw-bold" id="navbarNav">
        <ul class="navbar-nav ms-auto gap-3">
          <li class="nav-item">
            <RouterLink exact-active-class="active" class="navlink" to="/thema">Thema</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink exact-active-class="active" class="navlink" to="/2">S</RouterLink>
          </li>
        </ul>
        <button @click="toggleTheme" class="btn btn-info">
          {{ isDarkMode ? '☀️' : '🌙' }}
        </button>
      </div>

    </div>
  </nav>


</template>

<style></style>