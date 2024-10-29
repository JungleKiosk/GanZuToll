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
    <div class="container mt-5">
        <h1>Benvenuto nella Sezione Übung</h1>
        <p>Qui puoi esercitarti con vari argomenti di grammatica tedesca. Scegli un argomento per iniziare!</p>

        <div class="row mt-4">
            <div v-for="(topic, index) in topics" :key="index" class="col-md-4">
                <router-link :to="topic.route" class="text-decoration-none">
                    <div class="card shadow-sm topic-card">
                        <div class="card-body">
                            <h5 class="card-title">{{ topic.title }}</h5>
                            <p class="card-text">{{ topic.description }}</p>
                            <button class="btn btn-primary">Inizia Esercizio</button>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 900px;
}

h1 {
    font-size: 2.5rem;
    color: #007bff;
}

.topic-card {
    cursor: pointer;
    transition: transform 0.3s;
}

.topic-card:hover {
    transform: scale(1.05);
}

.card-title {
    font-size: 1.5rem;
    color: #333;
}

.btn-primary {
    background-color: #007bff;
    border: none;
}

.btn-primary:hover {
    background-color: #0056b3;
}
</style>
