<script>
import VertiefungenData from '../../../data/vertiefungen.js';

export default {
    name: "TheorieCards",
    data() {
        return {
            searchQuery: '',
            links: VertiefungenData, // Caricamento dati da theorie.js
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
                link.description.toLowerCase().includes(query) ||
                link.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }
    }
}
</script>

<template>
    <div class="container">
        <input class="search_bar rounded-pill p-2" type="text" v-model="searchQuery"
               placeholder="Enter a key word..." @input="onSearchInput" />

        <div class="links-container mt-4">
            <div v-for="link in filteredLinks" :key="link.id" class="card card_link p-3 text-dark mb-3">
                <h3>{{ link.title }}</h3>
                <p>{{ link.description }}</p>
                <a :href="link.url" target="_blank" class="text-primary">View</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.search_bar {
    width: 100%;
}
.links-container {
    display: flex;
    flex-direction: column;
}
.card_link {
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
