<script>
import TheorieCards from '../components/partials/SearchCards/TheorieCards.vue';
import Artikel from './../components/theorie/artikel/Artikel.vue';
import ArtikelCasi from './../components/theorie/artikel/ArtikelCasi.vue';
import Casi from './../components/theorie/casi/Casi.vue';

export default {
    components: {
        TheorieCards,
        Artikel,
        ArtikelCasi,
        Casi
    }
};
</script>

<template>
    <div class="container mt-5">

        <div class="row justify-content-center">
            <div class="col-12 col-lg-8">
                <h1>Theorie</h1>
                
                <TheorieCards />
                <Casi></Casi>
                <ArtikelCasi></ArtikelCasi>
                <Artikel></Artikel>


            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
