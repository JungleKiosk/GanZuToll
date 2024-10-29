<script>
export default {
    name: "UbungWelcome",
    data() {
        return {
            topics: [
                {
                    title: "Accusativo",
                    description: "Esercitati con il caso accusativo e impara a riconoscere l'oggetto diretto in una frase.",
                    route: "/acc_aufgaben" // Rotta verso il componente dell'esercizio
                },
                // Aggiungi altre card con argomenti diversi
            ]
        };
    }
};
</script>

<template>
    <div class="container my-5">
        <h1 class="dict">Übung</h1>
        <p>Qui puoi esercitarti con vari argomenti di grammatica tedesca. Scegli un argomento per iniziare!</p>

        <div class="row mt-4">
            <div v-for="(topic, index) in topics" :key="index" class="col-12 col-lg-3">
                <div class="text-decoration-none">
                    <div class="card shadow-sm topic-card">
                        <div class="card-body">
                            <h5 class="card-title">{{ topic.title }}</h5>
                            <p class="card-text">{{ topic.description }}</p>
                            <router-link :to="topic.route" class="btn_index">Inizia Esercizio</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>





</style>
