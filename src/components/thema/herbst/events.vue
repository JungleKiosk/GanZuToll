<script>
import Herbst from './Herbst.vue';
import Modal from './modals/ModHerbst.vue';

export default {
  name: "events",
  components: {
    Herbst,
    Modal
  },
  data() {
    return {
      showModal: false,
      showExplanation: false,  // Aggiungi lo stato per gestire la visualizzazione della spiegazione
      currentDescription: "",
      notaDescriptions: {
        war: "Das Fest fand am Wochenende statt.",
        gab: "Es gab viele Stände mit Törggelen-Speisen.",
        Törggelen: "Törggelen ist eine südtiroler Tradition im Herbst."
      },
      currentNota: ""
    };
  },
  methods: {
    openModal(nota) {
      this.currentNota = nota;
      this.currentDescription = this.notaDescriptions[nota] || "";
      this.showModal = true;
    },
    saveDescription(newDescription) {
      this.$set(this.notaDescriptions, this.currentNota, newDescription);
    },
    toggleExplanation() {
      this.showExplanation = !this.showExplanation;  // Alterna la visualizzazione della spiegazione
    }
  }
};
</script>

<template>
  <div class="container">
    <Herbst></Herbst>
    <div class="row justify-content-center">
      <h1>Event</h1>

      <div class="col-12 col-lg-6">

        <h2>Bozen 19.10.2024 - Erntdankfest</h2>
        <p>
          Dieses Wochenende <span class="nota" @click="openModal('war')">war</span> das Erntedankfest auf dem
          Walterplatz in Bozen. <br>
          Es <span class="nota" @click="openModal('gab')">gab</span> viele Stände mit typischen <span class="nota"
            @click="openModal('Törggelen')">Törggelen</span>-Speisen und Produkten.🍎🍏<br>
          Ich habe Kastanien🌰 und Glühwein🍷 gekauft und einen kleinen Snack gemacht.<br>
          Es gab auch Bauernhoftiere: Schafe🐑 und Ziegen🐐.<br>
          Es war ganz toll! Es gab auch eine Blaskapelle, die traditionelle Musik gespielt hat🎺🥁.
          <br><br>
          <button class="btn btn-info text-light fw-bold" @click="toggleExplanation">
            {{ showExplanation ? 'Schließen' : 'Mehr lesen' }}
          </button>
        </p>

        <hr>

        <!-- La sezione della spiegazione è visibile solo se showExplanation è true -->
        <div v-if="showExplanation">
          <h3>gibt und sind</h3>
          <a
            href="https://www.deutschesinstitut.it/das-gibt-es-nicht/#:~:text=es%20gibt%20si%20riferisce%20all,non%20ci%20sta%20es%20gibt.">
            Webressource</a>
          <p>
            <span class="dict">Es gibt</span> e <span class="dict">da ist/sind</span> in italiano si traducono entrambi
            con “c’è/ci sono”. <br><br>

            Generalmente in tedesco <span class="dict">es gibt</span> si riferisce all’esistenza di qualcosa.
            <span class="dict">da ist/sind</span> alla presenza di qualcuno o qualcosa. <br><br>

            <span class="dict">Es gibt</span> <br>
            "Es gibt" significa che qualcosa esiste, che è disponibile o letteralmente che qualcosa “è dato”. Per questo
            con una persona (che esiste) normalmente non ci sta es gibt.
            <br>
            Esempi:
          <ol>
            <li>Es gibt keine Gespenster. (I fantasmi non esistono.)</li>
            <li> In der Welt gibt es viele Probleme. (Ci sono tanti problemi nel mondo.)</li>
            <li>Hier gibt es viele gute Restaurants. (Qua ci sono tanti ristoranti buoni.)</li>
            <li>In der Gartenstraße gibt es eine Bäckerei und einen Gemüsehändler. (Nella Gartenstraße ci sono (sono
              disponibili) un forno e un ortolano.)</li>
            <li>Heute gibt es Lasagne zum Mittagessen. (Oggi ci sono le lasagne a pranzo.)</li>
          </ol>
          <br>

          <span class="dict">da ist/sind</span> <br>
          "Da ist/da sind" significa che qualcosa o qualcuno è presente, a volte si riferisce anche alla posizione. <br>
          Con le persone si usa quasi sempre "da ist/da sind". <br>
          Esempi:
          <br>
          <ol>
            <li>Ist Lisa da? (Lisa c’è?)</li>
            <li>Da sind fünf Personen vor der Tür. (Ci sono cinque persone alla porta.)</li>
            <li>Da hinten sind Freunde von mir! (Laggiù ci sono degli amici miei!)</li>
          </ol>
          A volte entrambe le forme sono possibili, a seconda di quello che si vuole sottinendere:
          <ol>
            <li>Gibt es hier eine Bank? – C’è una banca qua vicino? È disponibile?</li>
            <li>Ist hier eine Bank? – C’è una banca qua vicino? Dove si trova?</li>
          </ol>
          </p>
          <hr>
        </div>
      </div>
    </div>

    <Modal v-if="showModal" :isVisible="showModal" :description="currentDescription" @close="showModal = false"
      @save="saveDescription" />
  </div>
</template>

<style scoped>
.nota {
  color: brown;
  font-weight: bold;
}

.dict {
  color: rgb(255, 140, 0);
  font-weight: bold;
}
</style>
