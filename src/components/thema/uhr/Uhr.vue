<script>
import Modal from '../../partials/ModHerbst.vue';
import UhrMenu from './UhrMenu.vue';

export default {
    name: "uhr",
    components: {
        Modal,
        UhrMenu
    },
    data() {
        return {
            showModal: false,
            currentDescription: "",
            notaDescriptions: {
                spät:"tardi",
                Bahnhof: "der Bahnhof",
                Flughafen: "der Flughafen",
                Zeitungen: "die Zeitungen",
                Radio: "das Radio",
                Zum_Beispiel: "Ad esempio",
                z_B: "abbreviazione spesso usata per Zum Beispiel",
                Stunde: "orario"
            },
            currentNota: ""
        };
    },
    methods: {
        openModal(nota) {
            this.currentNota = nota;
            this.currentDescription = this.notaDescriptions[nota] || "";
            this.showModal = true;
        }
    }
};
</script>


<template>
    <div class="container">
        <UhrMenu></UhrMenu>
        <div class="row justify-content-center">
            <div class="col-12 col-lg-6">
                <h1>Wie spät ist es? ⌚</h1>
                <img src="../../../assets/img/uhr/marienplazt.webp" alt="">
                <p class="mt-4">
                    Ci sono due modi principali per chiedere l'orario:
                <ul>
                    <li> - Wie <span class="nota" @click="openModal('spät')">spät</span> ist es? Che ora è?</li>
                    <li>- Wie viel Uhr ist es? Che ora è?</li>
                </ul>
                Entrambe le frasi sono molto comuni e si usano in situazioni formali e informali. 
                <br>
                <br>
                <img src="../../../assets/img/uhr/uhr.jpg" alt="">

                </p>
                <h2>Informelle <span class="nota" @click="openModal('Stunde')">Stunde</span></h2>
                <p>

                </p>
                Nel parlato di tutti i giorni, le ore sono espresse attraverso la seguente logica:
                <h3>Ore esatte</h3>
                <p>
                    🕐Es ist eins. = È l'una. <br>
                    🕑Es ist zwei. = Sono le due. <br>
                    🕒Es ist drei. = Sono le tre.<br>
                    🕙Es ist zehn Uhr. = Sono le dieci.<br>
                    Per indicare ore esatte, si usa semplicemente <span class="dict">Es ist</span> seguito dall'ora.
                </p>
                <h3>Minuti</h3>
                <p>
                    Per esprimere i minuti, ci sono alcune regole fondamentali da ricordare. <br>
                    Nella <span style="text-decoration: underline;">prima mezz'ora</span> 🌓la struttura è: <br>
                <h4 class="text-bg-light">Minuti + <span class="dict">nach</span> + ora <br></h4>
                <span class="nota" @click="openModal('Zum_Beispiel')">Zum Beispiel</span>: <br>
                Es ist fünf <span class="dict">nach</span> zwei. = Sono le due e cinque.<br>
                Es ist zehn <span class="dict">nach</span> drei. = Sono le tre e dieci.<br>
                Es ist zwanzig <span class="dict">nach</span> vier. = Sono le quattro e venti.
                <br>
                <br>
                Nella <span style="text-decoration: underline;">seconda mezz'ora</span> 🌗 la struttura è: <br>
                <h4 class="text-bg-light">Minuti + <span class="dict">vor</span> + ora <br></h4>
                <span class="nota" @click="openModal('Zum_Beispiel')">Zum Beispiel</span>: <br>
                Es ist fünf <span class="dict">vor</span> drei. = Sono le tre meno cinque. <br>
                Es ist zehn <span class="dict">vor</span> vier. = Sono le quattro meno dieci. <br>
                Es ist zwanzig <span class="dict">vor</span> fünf. = Sono le cinque meno venti.
                </p>
                <h3>Mezze</h3>
                <p>
                    In tedesco si esprime la "mezza ora" con la seguente struttura: <br>
                <h4 class="text-bg-light"><span class="dict">halb</span> + ora successiva l'ora corrente <br></h4>
                quindi <span class="nota" @click="openModal('z_B')">z.B.</span>: <br>
                🕝halb drei = due e mezza🕝. <br>
                🕧halb eine = dodici e mezza🕧
                </p>
                <h3>Quarti</h3>
                <p>
                    In tedesco si esprime il "quarto d'ora" con la seguente struttura: <br>
                <h4 class="text-bg-light"><span class="dict">Viertel</span> + <span class="dict">nach</span>/<span
                        class="dict">vor</span> + ora<br></h4>
                quindi <span class="nota" @click="openModal('z_B')">z.B.</span>: <br>
                Es ist <span class="dict">Viertel</span> nach zwei. = Sono le due e un quarto.<br>
                Es ist <span class="dict">Viertel</span> vor drei. = Sono le tre meno un quarto
                </p>
                <p>
                    Con <span class="dict">nach</span> significa "dopo" l'ora corrente, mentre <span
                        class="dict">vor</span>
                    significa
                    "prima" dell'ora successiva.
                </p>
                <hr>
                <img src="../../../assets/img/uhr/uhr.jpg" alt="">
                <hr>
















                <!--              <p>
                    In contesti ufficiali, come in <span class="nota" @click="openModal('Bahnhof')">stazione</span>,
                    <span class="nota" @click="openModal('Flughafen')">aereoporto</span>, in <span class="nota"
                        @click="openModal('Radio')">radio</span> e al<span class="nota"
                        @click="openModal('Zeitungen')">telegiornale</span> si usa spesso l'orario a
                    24 ore, come in italiano: <br>
                <ul>
                    <li>Es ist fünfzehn Uhr. = Sono le 15 (le tre del pomeriggio).</li>
                    <li>Es ist zwanzig Uhr. = Sono le 20 (le otto di sera).</li>
                </ul>
                </p> -->
            </div>
        </div>

        <!--         <img src="../../../assets/img/uhr/uhr.jpg" alt="">
        <img src="../../../assets/img/uhr/uhr_2.png" alt=""> -->

        <Modal v-if="showModal" :isVisible="showModal" :description="currentDescription" @close="showModal = false"
            @save="saveDescription" />
    </div>
</template>

<style></style>
