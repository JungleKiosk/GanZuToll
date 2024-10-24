<script>
import Modal from '../../partials/ModHerbst.vue';
import UrlaubMenu from './UrlaubMenu.vue';

export default {
    name: "numeri",
    components: {
        Modal,
        UrlaubMenu
    },
    data() {
        return {
            showModal: false,
            currentDescription: "",
            notaDescriptions: {

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
        <UrlaubMenu></UrlaubMenu>
        <div class="row justify-content-center">
            <div class="col-12 col-lg-6">
                <h1>Urlaub</h1>
                

            </div>
        </div>

        <Modal v-if="showModal" :isVisible="showModal" :description="currentDescription" @close="showModal = false"
            @save="saveDescription" />
    </div>
</template>

<style scoped>

</style>
