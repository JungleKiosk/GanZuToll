<script>
export default {
  name: "Home"
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-12 mb-5">
        <h1 class="display-1"><strong>Willkommen in <span class="dict">GanZuToll</span><img class="logo" src="../assets/img/logo/prezelogo.png" alt=""></strong></h1>
        <br>
        <br>
        <p class="display-5">
          Willkommen auf meiner Website!
          <br>
          Hier finden Sie interessante Informationen, Tipps und vieles mehr zum Erlernen der deutschen Sprache.
          <br>
          Viel Spaß beim Erkunden!
        </p>
      </div>
      <!-- Sezione Theorie -->
      <div class="col-12 col-lg-4 my-5">
        <h2 class="display-3">Theorie</h2>
        <p class="lead">
          Sie finden hier einige wichtige Regeln und Konzepte, um die deutsche Sprache besser zu verstehen. Lernen Sie
          die Theorie, um eine solide Grundlage zu schaffen.
        </p>
        <router-link class="btn_index" to="/theorie">Theorie</router-link>
      </div>
      <div class="col-12 col-lg-8 my-5">
        <img src="../assets/img/home/home_1.png" alt="">
      </div>

      <!-- Sezione Vertiefungen -->
      <div class="col-12 col-lg-4 my-5">
        <h2 class="display-3">Vertiefungen</h2>
        <p class="lead">
          Vertiefen Sie Ihre Kenntnisse und erweitern Sie Ihr Verständnis für die Sprache.
        </p>
        <router-link class="btn_index" to="/vertiefungen">Vertiefungen</router-link>
      </div>
      <div class="col-12 col-lg-8 my-5">
        <img style="width: 100%;" src="../assets/img/home/home_2.png" alt="">
      </div>
      <!-- Übung -->
      <div class="col-12 col-lg-4 my-5">
        <h2 class="display-3">Übung</h2>
        <p class="lead">
          Nach der Lektüre der Theorie und der Erkenntnisse können Sie Ihr Wissen in der Praxis testen!
        </p>
        <router-link class="btn_index" to="/ubung">Vertiefungen</router-link>

      </div>
      <div class="col-12 col-lg-8">
        <img src="../assets/img/home/home_3.png" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>

.logo{
  width:20%;
}

</style>
