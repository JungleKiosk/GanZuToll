<script>
import Modal from '../../partials/ModHerbst.vue';
import ZahlenMenu from './ZahlenMenu.vue';

export default {
    name: "NumberPractice",
    components: {
        ZahlenMenu,
        Modal
    },
    data() {
        return {
            dialogues: [
                {
                    scenario: "auf dem Gemüsemarkt",
                    dialogue: [
                        { speaker: "Kunde", text: "Guten Tag! Ich hätte gerne ein Kilo Äpfel und fünfhundert Gramm Trauben." },
                        { speaker: "Gemüsehändler", text: "Natürlich! Das macht insgesamt drei Euro und fünfzig Cent." },
                        { speaker: "Kunde", text: "Hier sind vier Euro." },
                        { speaker: "Gemüsehändler", text: "Danke, und hier sind fünfzig Cent zurück." },
                    ],
                    explanation: "In diesem Dialog bestellt der Kunde Obst. Das Wort 'Gemüsehändler' bedeutet 'venditore di verdura'. Beachte, wie der Preis gesagt wird: 'drei Euro und fünfzig Cent', indicando prima l'importo in euro e poi i centesimi. "
                    ,
                    words: {
                        "Kunde": "cliente",
                        "Gemüsehändler": "venditore di verdura",
                        "Euro": "euro",
                        "Cent": "centesimo"
                    }
                },
                {
                    scenario: "Die Cafeteria",
                    dialogue: [
                        { speaker: "Kellner", text: "Was möchten Sie bestellen?" },
                        { speaker: "Kunde", text: "Einen Kaffee und ein Stück Kuchen, bitte." },
                        { speaker: "Kellner", text: "Das macht vier Euro und zwanzig Cent." },
                        { speaker: "Kunde", text: "Hier sind fünf Euro." },
                        { speaker: "Kellner", text: "Danke, hier ist Ihr Wechselgeld: achtzig Cent." },
                    ],
                    explanation: "In dieser Szene bestellt der Kunde in einer Cafeteria. Das Wort 'Kellner' bedeutet 'cameriere'. Beim Zahlen sagt man 'vier Euro und zwanzig Cent' für il prezzo. Der Kunde gibt fünf Euro und bekommt Wechselgeld.",
                    words: {
                        "Kellner": "cameriere",
                        "Kunde": "cliente",
                        "Wechselgeld": "resto"
                    }
                },
                {
                    scenario: "Die Messe",
                    dialogue: [
                        { speaker: "Besucher", text: "Wie viel kostet der Eintritt?" },
                        { speaker: "Verkäufer", text: "Der Eintritt kostet acht Euro pro Person." },
                        { speaker: "Besucher", text: "Wir sind zu dritt. Hier sind vierundzwanzig Euro." },
                        { speaker: "Verkäufer", text: "Danke schön, viel Spaß auf der Messe!" },
                    ],
                    explanation: "In diesem Dialog fragt der Besucher nach dem Preis des Eintritts. Das Wort 'Verkäufer' bedeutet 'venditore'. Er zahlt für drei Personen, und sagt 'vierundzwanzig Euro', combinando numeri composti.",
                    words: {
                        "Besucher": "visitatore",
                        "Verkäufer": "venditore",
                        "Eintritt": "ingresso"
                    }
                }
            ]
        };
    }
};
</script>

<template>
    <div class="container my-5">
        <ZahlenMenu></ZahlenMenu>
        <h1>Zahlen im Alltagslebena</h1>
        <p>In questa sezione, puoi esercitarti con i numeri in situazioni quotidiane. Leggi i dialoghi qui sotto e fai attenzione a come vengono usati i numeri.</p>

        <div v-for="(dialogue, index) in dialogues" :key="index" class="dialogue-section my-4 text-dark">
            <h2>{{ dialogue.scenario }}</h2>

            <!-- Box del dialogo -->
            <div class="dialogue-box">
                <div v-for="(line, idx) in dialogue.dialogue" :key="idx" class="dialogue-line">
                    <strong>{{ line.speaker }}:</strong> {{ line.text }}
                </div>
            </div>

            <!-- Spiegazione sotto la box -->
            <div class="explanation mt-3">
                <h4>Spiegazione</h4>
                <p>{{ dialogue.explanation }}</p>
                <h5>Parole chiave:</h5>
                <ul>
                    <li v-for="(meaning, word) in dialogue.words" :key="word"><strong>{{ word }}</strong>: {{ meaning }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.dialogue-section {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
}

.dialogue-box {
    padding: 15px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.dialogue-line {
    margin-bottom: 10px;
}

.dialogue-line strong {
    color: #007bff;
}

.explanation {
    background-color: #fff5e6;
    padding: 10px;
    border-left: 4px solid #ffcc00;
}

.explanation h5 {
    margin-top: 10px;
}
</style>
