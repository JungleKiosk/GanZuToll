<script>
export default {
    name: "NominativeLesson",
    data() {
        return {
            nominativForm: [
                {
                    definite: "der Mann",
                    indefinite: "ein Mann",
                    adjectiveDefinite: "der gute Mann",
                    adjectiveIndefinite: "einen guter Mann"
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
                { german: "Der Hund ist schön.", italian: "Il cane è bello" },
                { german: "Der Kaffee bleibt heiß.", italian: "Il caffè rimane caldo" },
                { german: "Der Himmel wird dunkel.", italian: "Il cielo diventa scuro" },
                { german: "Der Film sieht lustig aus.", italian: "Il film sembra divertente" },
                { german: "Die Aufgabe scheint einfach.", italian: "Il compito sembra facile" }
            ]
        };
    }
};
</script>

<template>
    <div id="nominativo" style="height: 50px;" class="m-5"></div>
    <h2 class="mt-5">Nominativo</h2>
    <p>Il caso nominativo in tedesco svolge la funzione di indicare il soggetto della frase, rispondendo alla domanda
        <strong class="dict">Wer / Was?</strong> = Chi / cosa compie l'azione?
    </p>
    <h3>Uso del Nominativo con i Verbi di Stato</h3>
    <p>Il caso nominativo viene utilizzato con i verbi di stato come:
    <ul>
        <li><strong class="dict">sein</strong> (essere)</li>
        <li><strong class="dict">werden</strong> (diventare)</li>
        <li><strong class="dict">bleiben</strong> (rimanere)</li>
        <li><strong class="dict">(aus)sehen</strong> (sembrare, apparire)</li>
        <li><strong class="dict">scheinen</strong> (sembrare, parere)</li>
    </ul>
    Con questi verbi si usa il nominativo in quanto essi
    reggono l'attributo del soggetto.
    </p>
    <ul>
        <li>Der Hund <span class="dict">ist</span> schön. — Il cane è bello</li>
        <li>Der Kaffee <span class="dict">bleibt</span> heiß. — Il caffè rimane caldo</li>
        <li>Der Himmel <span class="dict">wird</span> dunkel. — Il cielo diventa scuro</li>
        <li>Der Film <span class="dict">sieht</span> lustig <span class="dict">aus</span>. — Il film sembra divertente
        </li>
        <li>Die Aufgabe <span class="dict">scheint</span> einfach. — Il compito sembra facile</li>
    </ul>

    <h4>Forme del Nominativo</h4>
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
                <tr v-for="(form, index) in nominativForm" :key="index">
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
