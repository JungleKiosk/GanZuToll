<script>
import Modal from '../../partials/ModHerbst.vue';

export default {
    name: "uhr",
    components: {
        Modal
    },
    data() {
        return {
            showModal: false,
            showExplanationErntdankfest: false, // Variabile di stato per la prima sezione
            showExplanationToerggelen: false, // Variabile di stato per la seconda sezione
            currentDescription: "",
            notaDescriptions: {
                Bahnhof: "der Bahnhof",
                Flughafen: "der Flughafen",
                Zeitungen: "die Zeitungen",
                Radio: "das Radio"
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
        <div class="row justify-content-center">
            <div class="col-12 col-lg-8">
                <h1>Wie spät ist es? ⌚</h1>
                <p>
                    Ci sono due modi principali per chiedere l'orario:
                <ul>
                    <li> - Wie spät ist es? Che ora è? letteralmente: Quanto tardi è?</li>
                    <li>- Wie viel Uhr ist es? Che ora è?</li>
                </ul>
                Entrambe le frasi sono molto comuni e si usano in situazioni formali e informali. <br>
                Per indicare ore esatte, si usa semplicemente <span class="dict">Es ist</span> seguito dall'ora.
                </p>
                <h2>Informelle und formelle Stunde</h2>
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
