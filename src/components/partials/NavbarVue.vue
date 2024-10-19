<script>
import {RouterLink } from "vue-router";
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
      </div>
    </div>
  </nav>


</template>

<style></style>