<script>
import VertiefungenCards from '../components/partials/SearchCards/VertiefungenCards.vue';

export default {
    components: {
        VertiefungenCards
    },
    data() {
    }
}
</script>

<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-8">
                <h1>Vertiefungen</h1>
                <p>Benvenuto nella sezione "Vertiefungen"! Qui troverai risorse per approfondire la tua conoscenza della
                    lingua tedesca.</p>
                

                <div>

                    <VertiefungenCards />
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
