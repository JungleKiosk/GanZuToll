<script>
import Modal from '../../partials/ModHerbst.vue';
import UrlaubMenu from './UrlaubMenu.vue';

export default {
    name: "UrlaubCloze",
    components: {
        Modal,
        UrlaubMenu
    },
    data() {
        return {
            showModal: false,
            showText: false,
            currentDescription: "",
            timerActive: false,
            timerFinished: false,
            timer: null,
            countdown: 180,
            notaDescriptions: {},
            currentNota: "",
            exercises: [
                {
                    before: "Hallo Sven, wie",
                    after: "es dir? Unsere Weltreise hat gut angefangen.",
                    options: ["geht", "gehen", "gegangen"],
                    correctAnswer: "geht",
                    userAnswer: null,
                    checked: false,
                    correct: false,
                },
                {
                    before: "Wir",
                    after: "zuerst nach Bangkok geflogen – Bangkok ist wunderschön!",
                    options: ["sind", "war", "haben"],
                    correctAnswer: "sind",
                    userAnswer: null,
                    checked: false,
                    correct: false,
                },
                {
                    before: "Wir haben dort eine Stadtrundfahrt gemacht, die Tempel",
                    after: "und eine Vorstellung mit thailändischen Tänzen besucht - das war ganz toll!",
                    options: ["gesehen", "gegangen", "gesehen"],
                    correctAnswer: "gesehen",
                    userAnswer: null,
                    checked: false,
                    correct: false,
                },
                {
                    before: "Dann sind wir weiter nach Tokio",
                    after: ". In Tokio habe ich viele Souvenirs gekauft, auch ein nettes Souvenir für dich.",
                    options: ["wieder", "gekommen", "gereist"],
                    correctAnswer: "gereist",
                    userAnswer: null,
                    checked: false,
                    correct: false,
                },
                {
                    before: "Auf Hawaii",
                    after: "wir dann zwei Tage nur gefaulenzt. – Strand, Meer, Sonne, kühle Drinks – fantastisch!",
                    options: ["haben", "sind", "waren"],
                    correctAnswer: "haben",
                    userAnswer: null,
                    checked: false,
                    correct: false,
                },
                {
                    before: "Heute sind wir zum Grand Canyon",
                    after: "das war wirklich beeindruckend!",
                    options: ["gefahren", "gegangen", "gekommen"],
                    correctAnswer: "gefahren",
                    userAnswer: null,
                    checked: false,
                    correct: false,
                },
                {
                    before: "In Las Vegas sind wir natürlich ins Spielcasino gegangen, wir haben zwar ein bisschen Geld",
                    after: "aber wir haben auch viel Spaß gehabt.",
                    options: ["geloren", "vergeloren", "verloren"],
                    correctAnswer: "verloren",
                    userAnswer: null,
                    checked: false,
                    correct: false,
                },
                {
                    before: "Natürlich haben wir überall zu viel gegessen und sind zu dick",
                    after: "!",
                    options: ["gegangen", "geworden", "gekommen"],
                    correctAnswer: "geworden",
                    userAnswer: null,
                    checked: false,
                    correct: false,
                },
                {
                    before: "Wir haben immer in 3-Sterne-Hotels",
                    after: ",",
                    options: ["geschlafen", "übernachten", "übernachtet"],
                    correctAnswer: "geschlafen",
                    userAnswer: null,
                    checked: false,
                    correct: false,
                },
                {
                    before: "aber nicht alle sind gut",
                    after: ".",
                    options: ["wesen", "wäre", "gewesen"],
                    correctAnswer: "gewesen",
                    userAnswer: null,
                    checked: false,
                    correct: false,
                },
                {
                    before: "Normalerweise",
                    after: "ich nicht gut Englisch",
                    options: ["spricht", "sprache", "spreche"],
                    correctAnswer: "spreche",
                    userAnswer: null,
                    checked: false,
                    correct: false,
                },
                {
                    before: "aber auf unserer Reise habe ich fast jeden Tag Englisch",
                    after: ".",
                    options: ["gesprecht", "gesprochen", "gesprechen"],
                    correctAnswer: "gesprochen",
                    userAnswer: null,
                    checked: false,
                    correct: false,
                },
                {
                    before: "Ich habe viel fotografiert und wenn wir wieder nach Hause ",
                    after: ", zeige ich dir die Fotos.",
                    options: ["gekommen", "kommen", "kommt"],
                    correctAnswer: "kommen",
                    userAnswer: null,
                    checked: false,
                    correct: false,
                },
                {
                    before: "In zwei Wochen sind wir wieder zu Hause.",
                    after: "Dann rufe ich dich an. Arbeite nicht zu viel.",
                    options: ["gewieder", "wieder", "wiederen"],
                    correctAnswer: "wieder",
                    userAnswer: null,
                    checked: false,
                    correct: false,
                },
            ],
        };
    },
    computed: {
        // Verifica se tutti gli esercizi sono completati
        allExercisesCompleted() {
            return this.exercises.every((exercise) => exercise.checked && exercise.correct);
        },
        // Formatta il tempo in minuti e secondi
        formattedCountdown() {
            const minutes = Math.floor(this.countdown / 60);
            const seconds = this.countdown % 60;
            return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }
    },
    methods: {
        // Mostra o nasconde il testo e avvia il timer
        toggleText() {
            if (!this.showText) {
                this.showText = true;
                this.startTimer();
            }
        },
        // Avvia il timer di 3 minuti
        startTimer() {
            if (!this.timerActive) {
                this.timerActive = true;
                this.timer = setInterval(() => {
                    if (this.countdown > 0) {
                        this.countdown--;
                    } else {
                        this.timerFinished = true;
                        this.showText = false; // Nascondi il testo
                        clearInterval(this.timer);
                    }
                }, 1000);
            }
        },
        checkAllAnswers() {
            this.exercises.forEach((exercise) => {
                exercise.checked = true;
                exercise.correct = exercise.userAnswer === exercise.correctAnswer;
            });
            // Se tutti gli esercizi sono corretti, sblocca la riapertura del testo
            if (this.allExercisesCompleted) {
                this.timerFinished = false;
            }
        },
        refreshExercises() {
            this.exercises.forEach((exercise) => {
                exercise.userAnswer = null;
                exercise.checked = false;
                exercise.correct = false;
            });
        }
    },
};
</script>

<template>
    <div class="container my-5">
        <UrlaubMenu></UrlaubMenu>
        <div class="row justify-content-center">
            <div class="col-1">
                <p v-if="timerActive && showText" class="text-danger timer ">
                     {{ formattedCountdown }}
                </p>
            </div>

            <div class="col-12 col-lg-8">
                <h1>Ergänzen Sie</h1>
                <h4>Eine Postkarte aus dem Urlaub - Weltreise</h4>
                <p>Du hast noch 3 Minuten, um den Text zu lesen.</p>
                <button @click="toggleText" class="btn btn-info mb-3"
                    :disabled="timerFinished && !allExercisesCompleted">
                    {{ showText ? 'Text verbergen' : 'Text anzeigen' }}
                </button>


                <p v-if="showText">
                    Hallo Sven, wie geht es dir?
                    Unsere Weltreise hat gut angefangen.
                    <br>
                    <br>
                    Wir sind zuerst nach Bangkok geflogen
                    – Bangkok ist wunderschön!
                    <br>
                    <br>
                    Wir haben dort eine Stadtrundfahrt gemacht, die Tempel gesehen
                    und eine Vorstellung mit thailändischen Tänzen besucht – das war ganz toll!
                    <br>
                    <br>
                    Dann sind wir weiter nach Tokio gereist. In Tokio habe ich viele Souvenirs gekauft, auch ein
                    nettes Souvenir für dich.
                    <br>
                    <br>
                    Auf Hawaii haben wir dann zwei Tage nur gefaulenzt – Strand, Meer, Sonne, kühle Drinks –
                    fantastisch!
                    <br>
                    <br>
                    Heute sind wir zum Grand Canyon gefahren, das war wirklich beeindruckend!
                    <br>
                    <br>
                    In Las Vegas sind wir natürlich ins Spielcasino gegangen, wir haben zwar ein bisschen Geld
                    verloren, aber wir haben auch viel Spaß gehabt.
                    <br>
                    <br>
                    Natürlich haben wir überall zu viel gegessen und sind zu dick geworden!
                    <br>
                    <br>
                    Wir haben immer in
                    3 – Sterne – Hotels geschlafen,
                    <br>
                    <br>
                    aber nicht alle sind gut gewesen.
                    <br>
                    <br>
                    Normalerweise spreche ich
                    nicht gut Englisch, aber auf unserer Reise habe ich fast jeden Tag Englisch gesprochen.
                    <br>
                    <br>
                    Ich habe viel fotografiert und wenn wir wieder nach Hause kommen, zeige ich dir die Fotos.
                    <br>
                    <br>
                    In zwei Wochen sind wir wieder zu Hause.
                    Dann rufe ich dich an.
                    Arbeite nicht zu viel.
                    <br>
                    <br>
                    Bis bald.
                    Ralf
                </p>
                <hr>
                <div v-for="(exercise, index) in exercises" :key="index" class="exercise mb-4">
                    <p>
                        {{ exercise.before }}
                        <select v-model="exercise.userAnswer" :disabled="exercise.checked" class="form-select-inline">
                            <option disabled value=""></option>
                            <option v-for="option in exercise.options" :key="option" :value="option">{{ option }}
                            </option>
                        </select>
                        {{ exercise.after }}
                    </p>

                    <p v-if="exercise.checked">
                        <span :class="{ 'text-success': exercise.correct, 'text-danger': !exercise.correct }">
                            {{ exercise.correct ? 'Richtige Antwort!🍺' : 'Falsche Antwort 😑' }}
                        </span>
                        Die richtige Antwort ist: <strong>{{ exercise.correctAnswer }}</strong>
                    </p>
                </div>
                <p>
                    Bis bald.
                    Ralf
                </p>
                <!-- Pulsante per verificare tutte le risposte -->
                <button @click="checkAllAnswers" class="btn btn-primary mx-3">
                    Alles korrigieren
                </button>

                <!-- Pulsante per il refresh degli esercizi -->
                <button @click="refreshExercises" class="btn btn-link text-dark">
                    🔃Erneut versuchen
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.exercise {
    margin-bottom: 20px;
}

select.form-select-inline {
    display: inline;
    width: auto;
    margin-left: 5px;
    margin-right: 5px;
}

.text-success {
    color: green;
}

.text-danger {
    color: red;
}

.btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 20px;
}

.btn-info {
    background-color: #17a2b8;
    color: white;
}

.btn-link {
    color: #007bff;
    text-decoration: none;
}

.timer {
    position: fixed;
    top: 200px;
    left: 300px;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    z-index: 1000; /* Mantiene il timer al di sopra di altri elementi della pagina */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

</style>
