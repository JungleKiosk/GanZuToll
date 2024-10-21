<script>
import Herbst from './Herbst.vue';
import Modal from '../../partials/ModHerbst.vue';

export default {
  name: "events",
  components: {
    Herbst,
    Modal
  },
  data() {
    return {
      showModal: false,
      showExplanationErntdankfest: false, // Variabile di stato per la prima sezione
      showExplanationToerggelen: false, // Variabile di stato per la seconda sezione
      currentDescription: "",
      notaDescriptions: {
        war: "Vergangenheitsform des Verbs sein (click on Mehr lesen⚡)",
        gab: "Vergangenheitsform des Verbs geben (click on Mehr lesen⚡)",
        Törggelen: "Das Törggelen ist ein Herbstfest in Südtirol",
        roter_hahn: "Qualitätslabel in Südtirol, das Betriebe (masi) kennzeichnet, die qualitativ hochwertige Produkte und Dienstleistungen anbieten.",
        übernachtet: "Pernottare",
        Führung: "Visita guidata",
        Traubenmost: "Mosto d'uva. Trauben = torchio (dal torchio della pigiatura dell'uva)",
        Räucherkammer: "Affumicatoio",
        der_Bauer: "il contadino"
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
    toggleExplanationErntdankfest() {
      this.showExplanationErntdankfest = !this.showExplanationErntdankfest; // Alterna la prima sezione
    },
    toggleExplanationToerggelen() {
      this.showExplanationToerggelen = !this.showExplanationToerggelen; // Alterna la seconda sezione
    }
  }
};
</script>

<template>
  <div class="container">
    <Herbst></Herbst>
    <div class="row justify-content-center">
      <h1>Event</h1>

      <!-- Sezione immagini -->
      <div class="col-8 event-images text-center my-4">
        <img src="../../../assets/img/herbst/Erntdankfest_1.jpg" alt="Erntedankfest" class="img-fluid mx-2" />
      </div>

      <!-- Sezione Erntdankfest -->
      <div class="col-12 col-lg-8 mt-2">
        <h2>Erntdankfest in Bozen</h2>
        <p>
          Dieses Wochenende <span class="nota" @click="openModal('war')">war</span> das Erntedankfest auf dem
          Walterplatz in Bozen. <br>
          Es <span class="nota" @click="openModal('gab')">gab</span> viele Stände mit typischen <span class="nota"
            @click="openModal('Törggelen')">Törggelen</span>-Speisen und Produkten.🍎🍏<br>
          Ich habe Kastanien🌰 und Glühwein🍷 gekauft und einen kleinen Snack gemacht.<br>
          Es gab auch Bauernhoftiere: Schafe🐑 und Ziegen🐐.<br>
          Es war ganz toll! Es gab auch eine Blaskapelle, die traditionelle Musik gespielt hat🎺🥁.
          <br><br>
          <button class="btn btn-info text-light fw-bold" @click="toggleExplanationErntdankfest">
            {{ showExplanationErntdankfest ? 'Schließen' : 'Mehr lesen' }}
          </button>
        </p>

        <hr>

        <!-- La sezione della spiegazione per Erntdankfest -->
        <div v-if="showExplanationErntdankfest">
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

      <!-- Sezione Törggelen -->
      <div class="col-8 event-images text-center my-4">
        <img src="../../../assets/img/herbst/Toerg_1.webp" alt="Törggelen" class="img-fluid mx-2" />
      </div>

      <div class="col-12 col-lg-8 mt-2">
        <h2>Ein Tag beim Törggelen</h2>
        <p>
          Letzten Samstag war ich mit meinen Freunden in einem Maso zum Törggelen. <br>
          Haben wir auf einem Bauernhof (maso) <span class="nota" @click="openModal('übernachtet')">übernachtet</span>,
          der die Kriterien des <span class="nota" @click="openModal('roter_hahn')">Roter Hahn</span> erfüllt.<br>
          Zuerst haben wir eine <span class="nota" @click="openModal('Führung')">Führung</span> durch die
          🌳🌰Kastanienwälder🌰🌳 gemacht. <br>
          Danach haben wir den neuen Wein probiert. Er war sehr lecker! <br>
          Natürlich haben wir auch Sußer probiert, das ist frischer <span class="nota"
            @click="openModal('Traubenmost')">Traubenmost</span>.<br>
          Zum Abendessen gab es Knödel mit Speck, die direkt in der hofeigenen <span class="nota"
            @click="openModal('Räucherkammer')">Räucherkammer</span> hergestellt wurden.<br>
          Am Ende hat <span class="nota" @click="openModal('der_Bauer')">der Bauer</span> ein Feuer gemacht und wir
          haben die ersten Kastanien der Saison geröstet. <br>
          Es war ein super Tag mit viel Spaß und gutem Essen!
          <br><br>
          <button class="btn btn-info text-light fw-bold" @click="toggleExplanationToerggelen">
            {{ showExplanationToerggelen ? 'Schließen' : 'Mehr lesen' }}
          </button>
        </p>
        <hr>

        <!-- La sezione della spiegazione per Törggelen -->
        <div v-if="showExplanationToerggelen">
          <h3>Die Nebensätze</h3>
          <a
            href="https://www.deutschesinstitut.it/das-gibt-es-nicht/#:~:text=es%20gibt%20si%20riferisce%20all,non%20ci%20sta%20es%20gibt.">
            Webressource</a>
          <p>
            Una frase secondaria <span class="dict">(Nebensätze)</span> è una frase introdotta da una congiunzione
            [p.es. quando, perché, che, se…] e può stare
            prima o dopo una frase principale. La congiunzione “spinge” il verbo coniugato: il verbo lascia la sua
            seconda posizione, sorpassa tutti gli altri elementi [come pronomi, avverbi, verbi all’nfinito, participi e
            perfino intere frasi secondarie] e si posa nell’ultima posizione. <br><br>
            La frase: <br>
            <span class="dict">Haben wir auf einem Bauernhof (maso) übernachtet, der die Kriterien des Roter Hahn
              erfüllt.</span>
            <br>
            ha una <span class="dict">frase secondaria</span> relativa che <span
              style="text-decoration: underline;">descrive meglio il sostantivo</span>
            Bauernhof (maso): <br><br>

            Frase principale: Haben wir auf einem Bauernhof übernachtet.
            <br>
            Qui il verbo haben è in posizione normale (seconda posizione).
            <br>
            <br>
            Frase secondaria relativa: der die Kriterien des Roter Hahn erfüllt.
            <br>
          <h4>Spiegazione della frase secondaria:</h4>
          La frase secondaria inizia con il <span class="dict"></span>pronome relativo "der", che si riferisce a
          Bauernhof. <br>
          Il <span class="dict">pronome relativo</span>
          (che cambia in base al genere e al caso del sostantivo che descrive) introduce la frase secondaria e si usa
          per fornire ulteriori dettagli su qualcosa già menzionato nella frase principale. <br><br>
          <span class="dict">der</span>: pronome relativo (genere maschile, Nominativo), poiché Bauernhof è maschile.
          <br>
          <span class="dict">die Kriterien des Roter Hahn erfüllt</span>: qui il verbo erfüllt (soddisfa) è posto alla
          fine della frase
          secondaria, come è normale nelle frasi secondarie tedesche.
          Nelle frasi secondarie <span class="dict">(Nebensätze)</span>, <span style="text-decoration: underline;">il
            verbo va sempre alla fine</span>.
          <br><br>
          Esempi: <br><br>
          Ich muss es machen. → Ich putze, weil ich es machen muss. [Faccio le pulizie perché devo farle.]<br><br>

          Es regnet. → Ich gehe nach draußen, obwohl es regnet. [Esco nonostante piova.]<br><br>

          Er hat mir ein Geschenk mitgebracht. → Ich habe mich gefreut, dass er mir ein Geschenk mitgebracht hat. [Sono
          stato contento che mi avesse portato un regalo.]
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

/* Stile per le immagini */
.event-images img {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}
</style>
