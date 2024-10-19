<script>

</script>

<template>
  <div class="container-fluid">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/events">Eventi</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/food">Cibo</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/activity">Attività</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
  </div>
</template>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>
