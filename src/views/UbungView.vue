<script>
import UbungCards from '../components/partials/SearchCards/UbungCards.vue';

export default {
    components: {
        UbungCards
    },
    data() {
    }
}
</script>

<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-8">
                <h1>Ubung</h1>
                <p>Benvenuto nella sezione "Ubung"! Qui troverai risorse per approfondire la tua conoscenza della
                    lingua tedesca.</p>
                

                <div>

                    <UbungCards />
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
h1 {
    font-size: 2.5rem;
}
</style>
