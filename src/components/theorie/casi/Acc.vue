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

    <h3>Uso del Caso Accusativo</h3>
    <ul>
        <li>Con i verbi che reggono l’accusativo e i verbi di movimento.
            <ul>
                <li>haben = avere</li>
                <li>hören = ascoltare</li>
                <li>essen = mangiare</li>
                <li>lesen = leggere</li>
                <li>suchen = cercare</li>
                <li>verstehen = capire</li>
                <li>schreiben = scrivere</li>
                <li>trinken = bere</li>
                <li>essen = mangiare</li>
                <li>lernen = imparare</li>
                <li>fragen = domandare</li>
                <li>kaufen = comprare</li>
                <li>finden = trovare</li>
                <li>lernen = imparare/studiare</li>
                <li>bezahlen = pagare</li>
                <li>anrufen = chiamare (per telefono)</li>
                <li>es gibt = c'è</li>
            </ul>
        </li>
        <li>Dopo le <span class="dict">preposizioni di movimento</span>:
            <ul>
                <li>für</li>
                <li>gegen</li>
                <li>ohne</li>
                <li>durch</li>
                <li>um</li>
                <li>bis</li>
                <li>entlang</li>
            </ul>
        </li>
        <li>Dopo le preposizioni miste solo se l'azione coinvolge un movimento e NON è statica:
            <ul>
                <li>auf</li>
                <li>an</li>
                <li>in</li>
                <li>über</li>
                <li>unter</li>
                <li>hinter</li>
                <li>vor</li>
                <li>neben</li>
                <li>zwischen</li>
            </ul>
        </li>
    </ul>

    <h3>Esempi del Caso Accusativo</h3>
    <ul>
        <li>Ich<span class="dict"> sehe</span> de<span class="dict">n</span> Hund — Vedo il cane</li>
        <li>Sie<span class="dict"> isst</span> eine<span class="dict">n</span> Apfel — Lei mangia una mela</li>
        <li>Wir<span class="dict"> kaufen</span> die Bücher — Noi compriamo i libri</li>
        <li>Ich<span class="dict"> trinke</span> de<span class="dict">n</span> Saft — Bevo il succo</li>
        <li>Ich<span class="dict"> gehe</span> in de<span class="dict">n</span> Park — Vado nel parco</li>
        <li>Sie<span class="dict"> rennt</span> durch die Straße — Lei corre per la strada</li>
        <li>Wir<span class="dict"> fliegen</span> über die Berge — Noi voliamo sopra le montagne</li>
        <li>Er<span class="dict"> geht</span> um de<span class="dict">n</span> See — Lui gira intorno al lago</li>
        <li>Ich<span class="dict"> fahre</span> auf die Insel — Vado sull'isola</li>
        <li>Ich<span class="dict"> fahre</span> in de<span class="dict">n</span> Berg — Vado in montagna</li>
    </ul>

    <h4>Forme dell'Accusativo</h4>
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
