<script>
export default {
    name: "Acc",
    data() {
        return {
            accusativeForms: [
                {
                    definite: "den Mann",
                    indefinite: "einen Mann",
                    adjectiveDefinite: "den guten Mann",
                    adjectiveIndefinite: "einen guten Mann"
                },
                {
                    definite: "die Frau",
                    indefinite: "eine Frau",
                    adjectiveDefinite: "die schöne Frau",
                    adjectiveIndefinite: "eine schöne Frau"
                },
                {
                    definite: "das Kind",
                    indefinite: "ein Kind",
                    adjectiveDefinite: "das junge Kind",
                    adjectiveIndefinite: "ein junges Kind"
                },
                {
                    definite: "die Leute",
                    indefinite: "Leute",
                    adjectiveDefinite: "die alten Leute",
                    adjectiveIndefinite: "alte Leute"
                }
            ],
            examples: [
                { german: "Ich sehe den Hund.", italian: "Vedo il cane" },
                { german: "Sie isst einen Apfel.", italian: "Lei mangia una mela" },
                { german: "Wir kaufen die Bücher.", italian: "Noi compriamo i libri" },
                { german: "Ich trinke den Saft.", italian: "Bevo il succo" },
                { german: "Ich gehe in den Park.", italian: "Vado nel parco" },
                { german: "Sie rennt durch die Straße.", italian: "Lei corre per la strada" },
                { german: "Wir fliegen über die Berge.", italian: "Noi voliamo sopra le montagne" },
                { german: "Er geht um den See.", italian: "Lui gira intorno al lago" },
                { german: "Ich fahre auf die Insel.", italian: "Vado sull'isola" }
            ]
        };
    }
};
</script>

<template>

    <h2>Accusativo</h2>
    <p>Il caso accusativo svolge la funzione di indicare il complemento oggetto, cioè l’elemento all'interno di una
        frase che subisce l'azione da parte del soggetto. Risponde alla domanda <strong class="dict">Wen / Was?</strong>
        = Chi / che
        cosa?</p>

    <p class="note mt-3">
        <strong>Nota:</strong> Il femminile e il neutro rimangono invariati rispetto al nominativo.
    </p>

    <h2>Uso del Caso Accusativo</h2>
    <ul>
        <li>Dopo le preposizioni di movimento: für, gegen, ohne, durch, um, bis, entlang.</li>
        <li>Dopo le preposizioni miste solo se l'azione coinvolge un movimento e non è statica: auf, an, in, über,
            unter, hinter, vor, neben, zwischen.</li>
        <li>Con i verbi che reggono l’accusativo e i verbi di movimento.</li>
    </ul>

    <h3>Esempi del Caso Accusativo</h3>
    <ul>
        <li v-for="(example, index) in examples" :key="index">
            <strong>{{ example.german }}</strong> — {{ example.italian }}
        </li>
    </ul>

    <h2>Forme dell'Accusativo</h2>
    <div class="table-responsive">
        <table class="table table-bordered text-center">
            <thead>
                <tr>
                    <th>Maschile</th>
                    <th>Femminile</th>
                    <th>Neutro</th>
                    <th>Plurale</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(form, index) in accusativeForms" :key="index">
                    <td>{{ form.definite }}</td>
                    <td>{{ form.indefinite }}</td>
                    <td>{{ form.adjectiveDefinite }}</td>
                    <td>{{ form.adjectiveIndefinite }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<style scoped></style>
