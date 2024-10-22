<script>
import Modal from '../../partials/ModHerbst.vue';
import ZahlenMenu from './ZahlenMenu.vue';

export default {
    name: "numeri",
    components: {
        Modal,
        ZahlenMenu
    },
    data() {
        return {
            showModal: false,
            currentDescription: "",
            notaDescriptions: {
                Einheit: "Unità",
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
    <div class="container">
        <ZahlenMenu></ZahlenMenu>
        <div class="row justify-content-center">
            <div class="col-12 col-lg-6">
                <img src="../../../assets/img/numbers/numbers.jpg" alt="Numeri tedeschi">
                <h1>Die Zahlen 🧮</h1>

                <h2>Zahlen von 0 bis 12</h2>
                <p>
                    Qui ci sono i numeri da zero a dodici:
                <ul>
                    <li><span>null</span> = zero</li>
                    <li><span>eins</span> = uno</li>
                    <li><span>zwei</span> = due</li>
                    <li><span>drei</span> = tre</li>
                    <li><span>vier</span> = quattro</li>
                    <li><span>fünf</span> = cinque</li>
                    <li><span>sechs</span> = sei</li>
                    <li><span>sieben</span> = sette</li>
                    <li><span>acht</span> = otto</li>
                    <li><span>neun</span> = nove</li>
                    <li><span class="dict" @click="openModal('')">zehn</span> = dieci</li>
                    <li><span>elf</span> = undici</li>
                    <li><span>zwölf</span> = dodici</li>
                </ul>
                </p>

                <h2>die Dutzenden von 13 bis 20</h2>
                <p>
                    Dopo il dodici (zwölf), i numeri dal tredici al diciannove hanno struttura regolare:
                    <br>
                <h5 class="text-bg-light">Zahlen + <span class="dict">zehn</span></h5>
                <ul>
                    <li>drei<span class="dict">zehn</span> = tredici</li>
                    <li>vier<span class="dict">zehn</span> = quattordici</li>
                    <li>fünf<span class="dict">zehn</span> = quindici</li>
                    <li>sechs<span class="dict">zehn</span> = sedici</li>
                    <li>sieben<span class="dict">zehn</span> = diciassette</li>
                    <li>acht<span class="dict">zehn</span> = diciotto</li>
                    <li>neun<span class="dict">zehn</span> = diciannove</li>
                </ul>

                </p>

                <h2>die Dutzenden von 30 bis 90</h2>
                <p>
                <ul>
                    <li><span>zwan<span class="dict">zig</span></span> = venti</li>
                    <li><span>drei<span class="text-danger">ßig</span></span> = trenta</li>
                    <li><span>vier<span class="dict">zig</span></span> = quaranta</li>
                    <li><span>fünf<span class="dict">zig</span></span> = cinquanta</li>
                    <li><span>sech<span class="dict">zig</span></span> = sessanta</li>
                    <li><span>sieb<span class="dict">zig</span></span> = settanta</li>
                    <li><span>acht<span class="dict">zig</span></span> = ottanta</li>
                    <li><span>neun<span class="dict">zig</span></span> = novanta</li>

                </ul>
                </p>

                <h2>Zweistellige Zahlen (ab 21)</h2>
                <p>
                    In tedesco, i numeri a due cifre dal 21 in poi si dicono "al contrario" rispetto
                    all'italiano:<br><br>

                <h5 class="text-bg-light"><span class="nota" @click="openModal('Einheit')">Einheit</span> + <span
                        class="dict">und</span> + <span class="nota" @click="openModal('Dutzend')">Dutzend</span></h5>
                <ul>
                    <li>ein<span class="dict">und</span>zwanzig = ventuno 21 ("uno e
                        venti")</li>
                    <li>zwei<span class="dict">und</span>dreißig = trentadue 32 ("due
                        e trenta")</li>
                    <li>drei<span class="dict">und</span>vierzig = quarantatré 43
                        ("tre e quaranta")</li>
                    <li>drei<span class="dict">und</span>dreißig = trentatré 33
                        ("tre e trenta")</li>
                </ul>
                Questo schema si applica a tutti i numeri dal 21 al 99.
                </p>

                <h2>Hunderte</h2>
                <p>
                    ein<span class="dict">hundert</span> = cento <br>
                    In tedesco, le centinaia si formano così:
                    <br>
                    <br>
                <h5 class="text-bg-light"><span class="nota" @click="openModal('Einheit')">Einheit</span> + <span
                        class="dict">hundert</span></h5>
                <br>
                200 = zwei<span class="dict">hundert</span> (due cento) <br>
                300 = drei<span class="dict">hundert</span> (tre cento)<br>
                400 = vier<span class="dict">hundert</span> (quattro cento)<br>
                500 = fünf<span class="dict">hundert</span> (cinque cento)<br>
                600 = sechs<span class="dict">hundert</span> (sei cento)<br>
                700 = sieben<span class="dict">hundert</span> (sette cento)<br>
                800 = acht<span class="dict">hundert</span> (otto cento)<br>
                900 = neun<span class="dict">hundert</span> (nove cento)<br><br>

                Quando vuoi formare un numero composto da centinaia e altre cifre, come centoventuno 121 o
                trecentosessantotto 361, la struttura è:
                <br>
                <br>
                <h5 class="text-bg-light"><span class="nota" @click="openModal('Einheit')">Einheit</span> + <span
                        class="dict">hundert</span> + <span class="nota" @click="openModal('Einheit')">Einheit</span> +
                    <span class="dict">und</span> + <span class="nota" @click="openModal('Dutzend')">Dutzend</span>
                </h5>
                <br>
                121 = ein<span class="dict">hundert</span>ein<span class="dict">und</span>zwanzig (cento uno e
                venti)<br>
                368 = drei<span class="dict">hundert</span>acht<span class="dict">und</span>sechzig (tre cento otto e
                sessanta)<br>
                547 = fünf<span class="dict">hundert</span>sieben<span class="dict">und</span>vierzig (cinque cento
                sette e quaranta)<br>
                999 = neun<span class="dict">hundert</span>neun<span class="dict">und</span>neunzig (nove cento nove e
                novanta)<br><br>
                </p>
                <h2>Tausende</h2>
                <p>
                    <span class="dict">tausend</span> = mille
                <h5 class="text-bg-light"><span class="nota" @click="openModal('Einheit')">Einheit</span> + <span
                        class="dict">tausend</span>
                </h5>
                2000 = zwei tausend (duemila)<br>
                3000 = drei tausend (tremila)<br>
                4000 = vier tausend (quattromila)<br>
                5000 = fünf tausend (cinquemila)<br>
                6000 = sechs tausend (seimila)<br>
                7000 = sieben tausend (settemila)<br>
                8000 = acht tausend (ottomila)<br>
                9000 = neun tausend (novemila)<br><br>
                Quando vuoi formare numeri composti con migliaia, centinaia, decine e unità, la struttura è:
                <h5 class="text-bg-light"><span class="nota" @click="openModal('Einheit')">Einheit</span> + <span
                        class="dict">tausend</span> + <span class="nota" @click="openModal('Einheit')">Einheit</span> +
                    <span class="dict">hundert</span> + <span class="nota" @click="openModal('Einheit')">Einheit</span>
                    +
                    <span class="dict">und</span> + <span class="nota" @click="openModal('Dutzend')">Dutzend</span>
                </h5><br>
                1234 = ein<span class="dict">tausend</span>zwei<span class="dict">hundert</span> vier<span
                    class="dict">und</span>dreißig (mille duecentotrentaquattro)
                <br>
                5678 = fünf <span class="dict">tausend</span>sechs<span class="dict">hundert</span>acht<span
                    class="dict">und</span>siebzig (cinquemila
                seicentosettantotto)<br>
                9123 = neun<span class="dict">tausend</span>ein<span class="dict">hundert</span>drei<span
                    class="dict">und</span>zwanzig (novemila centoventitré)<br>
                </p>
            </div>
        </div>

        <Modal v-if="showModal" :isVisible="showModal" :description="currentDescription" @close="showModal = false"
            @save="saveDescription" />
    </div>
</template>

<style scoped>
h1,
h2 {
    margin-top: 20px;
}

ul {
    margin-left: 20px;
}

.nota {
    color: brown;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}

img {
    max-width: 100%;
    height: auto;
}
</style>
