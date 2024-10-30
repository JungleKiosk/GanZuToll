<script>
import VertiefungenData from '../../../data/vertiefungen.js';

export default {
    name: "TheorieCards",
    data() {
        return {
            searchQuery: '',
            links: VertiefungenData,
            filteredLinks: VertiefungenData
        };
    },
    methods: {
        onSearchInput() {
            this.filterLinks();
        },
        filterLinks() {
            const query = this.searchQuery.toLowerCase();
            this.filteredLinks = this.links.filter(link =>
                link.title.toLowerCase().includes(query) ||
                link.tags.some(tag => tag.toLowerCase().includes(query))
            );
        },
        getImagePath(name) {
            return new URL(`../../../assets/img/vertiefungen/${name}`, import.meta.url).href;
        }
    }
};
</script>




<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <input class="search_bar rounded-pill p-2" type="text" v-model="searchQuery" placeholder="Enter a key word..."
                    @input="onSearchInput" />
            </div>
        </div>
        <div class="row">
            <div v-for="link in filteredLinks" :key="link.id" class="col-12 col-md-6 col-lg-4 my-5">
                <div class="card p-3 text-dark mb-3">
                    <h3>{{ link.title }}</h3>
                    <span>Type: {{ link.type }}</span>
                    <br>
                    <p>{{ link.description }}</p>
                    <div v-if="link.images">
                        <img v-for="(image, idx) in link.images" :key="idx" :src="getImagePath(image)" alt="image"
                            class="mt-2">
                    </div>
                    <a :href="link.url" target="_blank" class="btn_index text-center my-3">Zum Link gehen</a>
                    <!-- Ciclo per mostrare le immagini -->
                </div>
            </div>
        </div>
    </div>
</template>




<style scoped>


</style>
