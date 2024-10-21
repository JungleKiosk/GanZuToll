<script>
import Modal from '../../partials/ModHerbst.vue';
import UhrMenu from './UhrMenu.vue';

export default {
    name: "Kurz",
    components: {
        UhrMenu,
        Modal
    },
    data() {
        return {
            showModal: false,
            currentDescription: "",
            notaDescriptions: {
                kurz: " poco o breve"
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
                <h2>Kurz</h2>
                <p>
                    La parola <span class="nota" @click="openModal('kurz')">kurz</span> si usa spesso per indicare un
                    orario
                    appena prima o
                    dopo l'ora esatta, simile a "quasi" o "poco dopo" in italiano. <br><br>
                <h3>Kurz nach (poco dopo):</h3>
                Es ist <span class="dict">kurz nach</span> zwei. = Sono le due e qualche minuto (poco dopo le due). <br>
                Es ist <span class="dict">kurz nach</span> sieben. = Sono le sette e qualche minuto (poco dopo le sette). <br>
                Es ist <span class="dict">kurz nach</span> halb acht. = Sono le sette e trentacinque (poco dopo le sette e mezza) <br>
                Es ist <span class="dict">kurz nach</span> zehn. = Sono le dieci e pochi minuti
                <br><br>
                <h3>Kurz vor (poco prima):</h3>
                Es ist <span class="dict">kurz vor</span> drei. = Sono le tre meno qualche minuto (poco prima delle tre).<br>
                Es ist <span class="dict">kurz vor</span> fünf. = Sono le cinque meno qualche minuto (poco prima delle cinque).<br>
                Es ist <span class="dict">kurz vor</span> halb neun. = Sono le otto e venticinque (poco prima delle otto e mezza)<br>
                Es ist <span class="dict">kurz vor</span> Mitternacht. = È quasi mezzanotte<br>

                </p>
            </div>
        </div>

        <Modal v-if="showModal" :isVisible="showModal" :description="currentDescription" @close="showModal = false"
            @save="saveDescription" />
    </div>
</template>

<style scoped>
h2 {
    margin-top: 20px;
}
</style>