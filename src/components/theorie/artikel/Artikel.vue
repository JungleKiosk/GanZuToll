<script>
import Modal from '../../partials/ModHerbst.vue';


export default {
    name: "Artikel",
    components: {
        Modal
    },
    data() {
        return {
            showModal: false,
            currentDescription: "",
            notaDescriptions: {
                Mädchen: "ragazza",
                Dutzend: "Decina"
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
    <div class="container my-5">
        <h1>Trick ⚡</h1>

        <p>
            Qui troverai alcune
            regole di base per capire meglio
            quando usare gli articoli <strong>DER</strong>, <strong>DIE</strong>, e <strong>DAS</strong>.
        </p>

        <!-- Regole Generali -->
        <div class="section mt-4 text-dark">
            <h3>Regole Generali</h3>
            <ul>
                <li><strong>DIE</strong> - Per le parole di genere femminile. (Esempio: die Blume)</li>
                <li><strong>DER</strong> - Per le parole di genere maschile. (Esempio: der Mann)</li>
                <li><strong>DAS</strong> - Per le parole di genere neutro. (Esempio: das Buch)</li>
            </ul>
        </div>

        <!-- Regole Speciali -->
        <div class="section mt-4 text-dark">
            <h3>Regole Speciali e Eccezioni</h3>
            <ul>
                <li>
                    Normalmente le parole di genere femminile hanno l'articolo <strong>DIE</strong>, ma la parola
                    <span class="nota" @click="openModal('Mädchen')">Mädchen</span>
                    è un'eccezione e ha come articolo <strong>DAS</strong>.
                </li>
                <li>
                    I momenti della giornata hanno tutti l'articolo <strong>DER</strong>, a parte la notte, che usa
                    <strong>DIE</strong>.
                </li>
                <li>
                    Tutti i metalli hanno l'articolo <strong>DAS</strong>, eccetto il bronzo che usa
                    <strong>DIE</strong> (die Bronze).
                </li>
            </ul>
        </div>

        <!-- Articolo DIE -->
        <div class="section mt-4 text-dark">
            <h3>Quando usare DIE</h3>
            <ul>
                <li>Tutti i numeri (Esempio: die Eins, die Zwei)</li>
                <li>Tutte le marche di moto (Esempio: die Harley)</li>
                <li>Tutte le lettere dell'alfabeto (Esempio: das A, das B)</li>
                <li>Parole che terminano in <strong>-heit</strong> (Esempio: die Freiheit)</li>
                <li>Parole che terminano in <strong>-keit</strong> (Esempio: die Höflichkeit)</li>
                <li>
                    Parole che terminano in <strong>-ik</strong> (Esempio: die Mathematik)
                </li>
            </ul>
        </div>

        <!-- Articolo DER -->
        <div class="section mt-4 text-dark">
            <h3>Quando usare DER</h3>
            <ul>
                <li>Tutte le stagioni (Esempio: der Sommer, der Winter)</li>
                <li>Tutte le marche delle auto (Esempio: der BMW, der Audi)</li>
                <li>Tutte le condizioni meteo (Esempio: der Regen, der Wind)</li>
                <li>I punti cardinali (Esempio: der Norden, der Süden)</li>
                <li>Quasi tutte le bevande alcoliche, eccetto la birra (das Bier)</li>
                <li>
                    Parole che terminano in <strong>-ist</strong> (Esempio: der Journalist)
                </li>
                <li>
                    Parole che terminano in <strong>-er</strong> (Esempio: der Computer)
                </li>
            </ul>
        </div>

        <!-- Articolo DAS -->
        <div class="section mt-4 text-dark">
            <h3>Quando usare DAS</h3>
            <ul>
                <li>Tutte le lettere dell'alfabeto (Esempio: das A, das B)</li>
                <li>
                    Parole che terminano in <strong>-o</strong> tendono ad avere DAS come articolo (Esempio: das Radio)
                </li>
            </ul>
        </div>
    </div>

    <Modal v-if="showModal" :isVisible="showModal" :description="currentDescription" @close="showModal = false"
        @save="saveDescription" />
</template>

<style scoped>
.section {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    margin-bottom: 20px;
}

ul {
    list-style-type: disc;
    margin-left: 20px;
}

ul li {
    margin-bottom: 8px;
}
</style>
