<script setup>
import { links_footer } from '../../data/link_footer.js';
</script>


<template>
  <div id="footer" class="container-fluid bg-dark text-light pt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-3">
        <h5>nützliche Links</h5>
        <p v-for="(link_footer, index) in links_footer" :key="index">
          <a :href="link_footer.url" target="_blank" class="btn btn-dark">{{ link_footer.name }}</a>
        </p>
      </div>
      <div class="col-12 col-lg-3">
        <h5>Kontakte</h5>
        <p>eso.fra24@gmail.com</p>
        <p> 331 1874661</p>
      </div>
      <div class="col-12 col-lg-3">
        <h5>Lizenzen</h5>
        <ul>
          <li><a
              href="https://it.freepik.com/vettori-gratuito/insieme-di-persone-multietniche-attive-allenamento-in-palestra_4530318.htm#fromView=search&page=1&position=1&uuid=293afba9-4a39-4d37-a3af-3fac4350a403">Immagine
              di katemangostar su Freepik</a> </li>
          <li><a
              href="https://it.freepik.com/vettori-gratuito/piccolo-libro-di-lettura-per-clienti-femminili-con-un-buon-feedback-ricerca-e-analisi-del-servizio-di-libro-da-illustrazione-vettoriale-piatto-ragazza-valutazione-della-qualita-della-letteratura-soddisfazione-concetto-di-recensione-dei-consumatori_21683496.htm#fromView=search&page=1&position=6&uuid=dfde713d-fe3d-4ced-9281-eb392355a77d">Immagine
              di pch.vector su Freepik</a></li>
          <li> <a
              href="https://it.freepik.com/vettori-gratuito/persone-concentrate-che-studiano-nella-scuola-online_8609144.htm#fromView=search&page=1&position=4&uuid=0b6be722-0290-4abd-86f9-ff9506ec6fcc">Immagine
              di pch.vector su Freepik</a></li>
        </ul>
      </div>
    </div>

  </div>

</template>

<style scoped>


ul li {
  list-style: none;
}

#footer {
  height: 600px;
}

@media (max-width: 786px) {
  .icon_social {
    width: 20%;
  }
}
</style>