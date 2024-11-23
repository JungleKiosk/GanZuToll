<script>
export default {
    name: "Dativo",
    data() {
        return {
            dativeForms: [
                {
                    category: "Maskulinum",
                    definite: "dem",
                    indefinite: "einem",
                    note: "(m)"
                },
                {
                    category: "Femininum",
                    definite: "der",
                    indefinite: "einer",
                    note: "(r)"
                },
                {
                    category: "Neutrum",
                    definite: "dem",
                    indefinite: "einem",
                    note: "(m)"
                },
                {
                    category: "Plural",
                    definite: "den",
                    indefinite: "-",
                    note: "+ n alla fine del sostantivo"
                }
            ],
            usageRules: [
                {
                    category: "Preposizioni fisse",
                    rules: [
                        "mit (con)",
                        "zu (a, verso)",
                        "nach (dopo, verso - per città/paesi)",
                        "bei (presso)",
                        "aus (da - per indicare provenienza)",
                        "von (di, da)",
                        "seit (da - temporale)"
                    ]
                },
                {
                    category: "Preposizioni miste (statiche)",
                    description: "Si utilizzano con verbi di posizione per esprimere uno stato statico:",
                    rules: [
                        "auf (su)",
                        "an (a, su, alla)",
                        "in (in, dentro)",
                        "über (sopra, riguardo a)",
                        "unter (sotto)",
                        "hinter (dietro)",
                        "vor (davanti)",
                        "neben (vicino a)",
                        "zwischen (tra)"
                    ]
                },
                {
                    category: "Verbi legati al dativo",
                    description: "Questi verbi richiedono il dativo:",
                    rules: [
                        "liegen (essere sdraiato)",
                        "stehen (stare in piedi)",
                        "sitzen (essere seduto)",
                        "hängen (essere appeso)",
                        "stecken (essere infilato)",
                        "helfen (aiutare)",
                        "danken (ringraziare)",
                        "glauben (credere)"
                    ]
                }
            ],
            examples: [
                { german: "Ich gebe der Frau einen Apfel.", italian: "Do a alla donna una mela" },
                { german: "Ich gebe dem Mädchen einen Apfel.", italian: "Do alla ragazza una mela" },
                { german: "Ich gebe dem Kind einen Apfel.", italian: "Do al bambino una mela." },
                { german: "Ich spreche nicht mit dir.", italian: "Non parlo con te." },
                { german: "Ich fahre zum (zu dem) Park.", italian: "Vado al parco." },
                { german: "Das Buch liegt auf dem Tisch.", italian: "Il libro è sul tavolo." },
                { german: "Das Bild hängt an der Wand.", italian: "Il quadro è appeso alla parete." },
                { german: "Was ist der Unterschied zwischen diesem und jenem?", italian: "Qual'è la differenza tra questo e quello?" },
                { german: "Wir helfen den Studenten bei den Hausaufgaben.", italian: "Aiutiamo gli studenti con i compiti." }
            ]
        };
    }
};
</script>

<template>
    <div id="dativo" style="height: 50px;" class="m-5"></div>
    <h2>Dativo</h2>
    <p> Il dativo in tedesco è richiesto:
    <ul>
        <li>Dopo determinate preposizioni (mit, zu, bei, ecc... vedi sotto).</li>
        <li>Da determinati verbi che reggono il dativo (helfen, danken, ecc... vedi sotto).</li>
        <li>Quando un sostantivo o pronome risponde alla domanda <strong class="dict">"a chi/che cosa?"</strong>.</li>
    </ul>
    </p>
    <p>Il dativo tedesco corrisponde al complemento di termine italiano. Oltre a esprimere il complemento di
        termine, è richiesto dopo la maggioranza delle <a target="_blank"
            href="https://www.deutschesinstitut.it/preposizioni-e-casi-tutti-tutti/">preposizioni</a>.

        <br>
        <br>
        Quasi sempre, le risposte alle seguenti domande stanno al dativo e iniziano con una preposizione:
    <ul>
        <li><strong class="dict">Wo? (Dove?)</strong></li>
        <li><strong class="dict">Wann? (Quando?)</strong></li>
        <li><strong class="dict">Womit? (Con cosa?)</strong></li>
        <li><strong class="dict">Wie? (Come?)</strong></li>
    </ul>
    </p>
    <h4>Forme al Dativo:</h4>
    <span>l’articolo determinativo (corrispondono ad “al, alla” ecc.)</span>
    <br>
    <span> l’articolo indeterminativo (corrisponde ad “a un, a una” ecc.)</span>
    <div id="dativo" class="mt-2">
        <div class="table-responsive">
            <table class="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Determinativo</th>
                        <th>Indeterminativo</th>
                        <th>Declinazione</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(form, index) in dativeForms" :key="index">
                        <td>{{ form.category }}</td>
                        <td>{{ form.definite }}</td>
                        <td>{{ form.indefinite }}</td>
                        <td>{{ form.note }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p class="note mt-3">
            <strong>Nota:</strong> Il dativo può essere solo “de<strong class="dict">m</strong>” o “de<strong class="dict">r</strong>” per
            il singolare e “de<strong class="dict">n</strong>” per il plurale.
            <br>
            <strong>Nota:</strong> Il plurale richiede l'aggiunta di <code>-n</code> alla fine del sostantivo, se non è
            già presente.
        </p>

        <div v-for="(ruleSet, index) in usageRules" :key="index" class="mb-4">
            <h3>{{ ruleSet.category }}</h3>
            <p v-if="ruleSet.description">{{ ruleSet.description }}</p>
            <ul>
                <li v-for="rule in ruleSet.rules" :key="rule">{{ rule }}</li>
            </ul>
        </div>

        <h3>Esempi del Caso Dativo</h3>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Tedesco</th>
                    <th>Italiano</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(example, index) in examples" :key="index">
                    <td>{{ example.german }}</td>
                    <td>{{ example.italian }}</td>
                </tr>
            </tbody>
        </table>
        <p class="note mt-3">
            <strong>Nota:</strong> le parole di genere femminile, al NOMINATIVO, hanno l'articolo al
            <strong>DIE</strong>, ma la
            parola
            <span class="nota" @click="openModal('Mädchen')">Mädchen</span>
            è un'eccezione e ha come articolo <strong>DAS</strong>, quindi al dativo <strong>DEM</strong>.
        </p>
    </div>



</template>

<style scoped></style>
