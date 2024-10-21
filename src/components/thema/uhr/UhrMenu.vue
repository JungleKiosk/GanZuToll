<script>
export default {
  name: "UhrMenu"
};
</script>

<template>

  <!-- Navbar -->
  <nav class="navbarstyle navbar navbar-expand-lg fw-bold">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/uhr">Uhr</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tagesablauf">Tagesablauf</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/activity"></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Contenuto principale -->
  <div class="row mt-4">
    <div class="col-12">
      <router-view />
    </div>
  </div>

</template>

<style scoped>
.nav-link {
  color: #12104b;
  text-decoration: none;
}

.nav-link:active, .nav-link:focus, .nav-link.router-link-active {
  color: #ffffff;
  text-decoration: underline;
}
</style>