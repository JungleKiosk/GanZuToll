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
                        masculine: "der",
                        feminine: "die",
                        neuter: "das",
                        plural: "die"
                    }
                },
                {
                    name: "Accusativo",
                    description: "L'accusativo viene usato per l'oggetto diretto della frase.",
                    articles: {
                        masculine: "den",
                        feminine: "die",
                        neuter: "das",
                        plural: "die"
                    }
                },
                {
                    name: "Dativo",
                    description: "Il dativo viene usato per l'oggetto indiretto della frase.",
                    articles: {
                        masculine: "dem",
                        feminine: "der",
                        neuter: "dem",
                        plural: "den"
                    }
                },
                {
                    name: "Genitivo",
                    description: "Il genitivo indica il possesso o appartenenza.",
                    articles: {
                        masculine: "des",
                        feminine: "der",
                        neuter: "des",
                        plural: "der"
                    }
                }
            ]
        };
    }
};
</script>

<template>
    <div class="container mt-5">
        <h1>Spiegazione degli Articoli nei Casi</h1>
        <p>
            In tedesco, gli articoli cambiano in base al caso: nominativo, accusativo, dativo o genitivo.
            Ogni caso ha la propria funzione nella frase, e gli articoli concordano in base al <span class="dict">genere e al numero</span>.
        </p>

        <div v-for="(caseItem, index) in cases" :key="index" class="case-section mt-4">
            <h2>{{ caseItem.name }}</h2>
            <p>{{ caseItem.description }}</p>

            <div class="article-cards">
                <div class="article-card" v-for="(article, gender) in caseItem.articles" :key="gender">
                    <h3>{{ gender === 'masculine' ? 'Maschile' : gender === 'feminine' ? 'Femminile' : gender === 'neuter' ? 'Neutro' : 'Plurale' }}</h3>
                    <p class="article">{{ article }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 800px;
}

h1 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.case-section {
    margin-top: 30px;
}

/* Stile per i box degli articoli */
.article-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.article-card {
    flex: 1 1 calc(50% - 10px); /* Adattamento per schermi piccoli */
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.article-card h3 {
    font-size: 1.2em;
    color: #007bff;
    margin-bottom: 5px;
}

.article {
    font-size: 1.1em;
    font-weight: bold;
    color: #333;
}
</style>
