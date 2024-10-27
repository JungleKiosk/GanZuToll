<script>
export default {
    name: "ArticlesExplanation",
    data() {
        return {
            cases: [
                {
                    name: "Nominativo",
                    description: "Il nominativo viene usato per il soggetto della frase.",
                    articles: {
                        masculine: "der / ein",
                        feminine: "die / eine",
                        neuter: "das / ein",
                        plural: "die"
                    }
                },
                {
                    name: "Accusativo",
                    description: "L'accusativo viene usato per l'oggetto diretto della frase.",
                    articles: {
                        masculine: "den / einen",
                        feminine: "die / eine",
                        neuter: "das / ein",
                        plural: "die"
                    }
                },
                {
                    name: "Dativo",
                    description: "Il dativo viene usato per l'oggetto indiretto della frase.",
                    articles: {
                        masculine: "dem / einem",
                        feminine: "der / einer",
                        neuter: "dem / einem",
                        plural: "den (-n)"
                    }
                },
                {
                    name: "Genitivo",
                    description: "Il genitivo indica il possesso o appartenenza.",
                    articles: {
                        masculine: "des / eines (-s)",
                        feminine: "der / einer",
                        neuter: "des / eines (-s)",
                        plural: "der"
                    }
                }
            ]
        };
    }
};
</script>

<template>
    <div class="table-responsive">
        <table class="table table-bordered text-center small-table">
            <thead>
                <tr>
                    <th>Caso</th>
                    <th>Maschile</th>
                    <th>Femminile</th>
                    <th>Neutro</th>
                    <th>Plurale</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(caseItem, index) in cases" :key="index">
                    <td><strong>{{ caseItem.name }}</strong></td>
                    <td>{{ caseItem.articles.masculine }}</td>
                    <td>{{ caseItem.articles.feminine }}</td>
                    <td>{{ caseItem.articles.neuter }}</td>
                    <td>{{ caseItem.articles.plural }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <p class="mt-4 bg-light text-dark p-1">
        <strong>Nota:</strong> Le lettere "-s" o "-m" indicano che alla parola che precederà va aggiunta la relativa lettera.
    </p>

</template>

<style scoped>
.container {
    max-width: 800px;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.table-responsive {
    overflow-x: auto;
    width: 100%;
}

.small-table {
    font-size: 0.9rem;
    /* Riduce la dimensione del testo della tabella */
    width: 100%;
    max-width: 600px;
    /* Limita la larghezza massima */
    margin: 0 auto;
    /* Centra la tabella */
}

.small-table th,
.small-table td {
    padding: 8px;
    /* Riduce il padding delle celle */
}

.small-table th {
    font-weight: 600;
}

.note {
    font-size: 0.9rem;
    color: #555;
    font-style: italic;
}
</style>
