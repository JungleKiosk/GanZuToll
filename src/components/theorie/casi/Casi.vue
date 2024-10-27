<script>
import SchemaCasi from './SchemaCasi.vue';
import Nom from './Nom.vue';
import Acc from './Acc.vue';

export default {
    name: "Casi",
    components: {
        SchemaCasi,
        Nom,
        Acc
    }
};
</script>

<template>
    <div class="container mt-5">
        <h1>I Casi</h1>
        <p>
            In tedesco, i casi servono per indicare la funzione che un <span class="dict">sostantivo</span>,
            un <span class="dict">pronome</span> o un <span class="dict">aggettivo</span> svolge
            all'interno della frase.
        <h3>Sostantivo</h3>
        Quando si fa riferimento ad un sostantivo, vi sono quattro diversi modi di presentarlo. Ecco i quattro casi del
        sostantivo:
        <ul>
            <li><span class="dict">Nominativo</span>: quando il sostantivo è il soggetto della frase.</li>
            <li><span class="dict">Accusativo</span>: quando il sostantivo è il complemento oggetto. Risponde alla
                domanda “Chi?” o “Che
                Cosa”</li>
            <li><span class="dict">Dativo</span>: quando il sostantivo è il complemento di termine. Risponde alla
                domanda “A chi?” o “A
                che cosa?”</li>
            <li><span class="dict">Genitivo</span>: quando il sostantivo è il complemento di specificazione. Risponde
                alla domanda “Di
                chi?” o “Di che cosa?”</li>
        </ul>
        In genere, è il verbo a determinare il caso del sostantivo e a seconda del caso, cambia la declinazione.
        <hr>
        La declinazione si applica soprattutto agli articoli e varia a seconda che il sostantivo sia singolare o
        plurale, maschile, femminile o neutro.
        <br>
        <br>
        Prima di capire la funzione di ogni caso, è importante conoscere come vengono declinati gli <span
            class="dict">articoli
            determinativi e indeterminativi</span> in ciascuno di essi.
        </p>

        <SchemaCasi></SchemaCasi>
        <Nom></Nom>
        <Acc></Acc>

        <div v-for="(caseItem, index) in cases" :key="index" class="case-section mt-4 text-dark">
            <h2>{{ caseItem.title }}</h2>
            <p>{{ caseItem.description }}</p>
            <blockquote class="example">{{ caseItem.example }}</blockquote>
            <p class="example-explanation">{{ caseItem.exampleExplanation }}</p>
            <p class="">{{ caseItem.text }}</p>
        </div>

    </div>
</template>

<style scoped>
.container {
    max-width: 800px;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.case-section {
    margin-top: 30px;
    padding: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #f9f9f9;
}

h2 {
    font-size: 1.5rem;
    color: #007bff;
}

.example {
    margin: 15px 0;
    padding: 10px;
    background-color: #e0f7fa;
    border-left: 4px solid #007bff;
    font-style: italic;
}

.example-explanation {
    font-style: italic;
    color: #555;
}

.summary {
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 8px;
}

.summary h3 {
    font-size: 1.6rem;
    color: #007bff;
}

ul {
    padding-left: 20px;
}

ul li {
    margin: 5px 0;
}
</style>
