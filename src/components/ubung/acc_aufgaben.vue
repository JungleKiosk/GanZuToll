<script>
export default {
    name: "AccusativeExercises",
    data() {
        return {
            // Esercizi sugli articoli determinativi
            determinativeExercises: [
                {
                    sentence: "Ich kenne ___ Film schon.",
                    options: ["den", "der", "die"],
                    correctAnswer: "den",
                    userAnswer: null,
                    checked: false
                },
                {
                    sentence: "Suchst du ___ Zeitung?",
                    options: ["die", "der", "das"],
                    correctAnswer: "die",
                    userAnswer: null,
                    checked: false
                },
                {
                    sentence: "Wer hat ___ Wasser getrunken?",
                    options: ["das", "den", "die"],
                    correctAnswer: "das",
                    userAnswer: null,
                    checked: false
                },
                {
                    sentence: "Ich verstehe ___ Satz nicht.",
                    options: ["den", "das", "die"],
                    correctAnswer: "den",
                    userAnswer: null,
                    checked: false
                },
                {
                    sentence: "Er lernt ___ Vokabeln.",
                    options: ["die", "der", "das"],
                    correctAnswer: "die",
                    userAnswer: null,
                    checked: false
                }
            ],
            // Esercizi sugli articoli indeterminativi
            indeterminateExercises: [
                {
                    sentence: "Ich kaufe ___ Eis.",
                    options: ["ein", "eine", "einen"],
                    correctAnswer: "ein",
                    userAnswer: null,
                    checked: false
                },
                {
                    sentence: "Wir haben ___ Schmetterling gesehen.",
                    options: ["einen", "ein", "eine"],
                    correctAnswer: "einen",
                    userAnswer: null,
                    checked: false
                },
                {
                    sentence: "Verena hat ___ Kette gefunden.",
                    options: ["eine", "einen", "ein"],
                    correctAnswer: "eine",
                    userAnswer: null,
                    checked: false
                },
                {
                    sentence: "Der Mann liest ___ Buch.",
                    options: ["ein", "eine", "einen"],
                    correctAnswer: "ein",
                    userAnswer: null,
                    checked: false
                },
                {
                    sentence: "Das Mädchen schreibt ___ Brief.",
                    options: ["einen", "ein", "eine"],
                    correctAnswer: "einen",
                    userAnswer: null,
                    checked: false
                }
            ],
            // Seleziona il nome all'accusativo
            accusativeSelection: [
                {
                    sentence: "Der Student kauft einen Hut.",
                    options: ["der Student", "einen Hut"],
                    correctAnswer: "einen Hut",
                    userAnswer: null,
                    checked: false
                },
                {
                    sentence: "Die Rechnung hat der Mann bezahlt.",
                    options: ["die Rechnung", "der Mann"],
                    correctAnswer: "die Rechnung",
                    userAnswer: null,
                    checked: false
                },
                {
                    sentence: "Die Kellnerin bringt das Essen.",
                    options: ["die Kellnerin", "das Essen"],
                    correctAnswer: "das Essen",
                    userAnswer: null,
                    checked: false
                },
                {
                    sentence: "Das Kind trägt eine Tasche.",
                    options: ["das Kind", "eine Tasche"],
                    correctAnswer: "eine Tasche",
                    userAnswer: null,
                    checked: false
                },
                {
                    sentence: "Das Gedicht hat Irina geschrieben.",
                    options: ["das Gedicht", "Irina"],
                    correctAnswer: "das Gedicht",
                    userAnswer: null,
                    checked: false
                }
            ],
            showResults: false
        };
    },
    methods: {
        checkAnswers(exerciseType) {
            this[exerciseType].forEach(exercise => {
                exercise.checked = true;
                exercise.correct = exercise.userAnswer === exercise.correctAnswer;
            });
            this.showResults = true;
        },
        resetExercise(exerciseType) {
            this[exerciseType].forEach(exercise => {
                exercise.userAnswer = null;
                exercise.checked = false;
            });
            this.showResults = false;
        }
    }
};
</script>

<template>
    <div class="container my-5">
        <div class="row">
            <h1>Mach alle drei Übungen!</h1>
            <br>
            <div class="col-12 col-lg-4 my-5">
                <hr>
                <h2>1. Gli articoli determinativi</h2>
                <p>Setzen Sie die richtigen Artikel im Akkusativ ein.</p>
                <div v-for="(exercise, index) in determinativeExercises" :key="'determinative-' + index"
                    class="question-section">
                    <p>{{ exercise.sentence.replace("___", "____") }}</p>
                    <div v-for="(option, optIndex) in exercise.options" :key="optIndex" class="option">
                        <input type="radio" :name="'determinative-' + index" :value="option"
                            v-model="exercise.userAnswer" :disabled="exercise.checked" />
                        <label>{{ option }}</label>
                    </div>
                    <p v-if="exercise.checked">
                        <span :class="{ correct: exercise.correct, incorrect: !exercise.correct }">{{ exercise.correct ?
                            'Corretto!' : 'Sbagliato!' }}</span>
                        <span v-if="!exercise.correct">Risposta giusta: {{ exercise.correctAnswer }}</span>
                    </p>
                </div>
                <button @click="checkAnswers('determinativeExercises')"
                    class="btn btn-primary mx-3">korrigieren</button>
                <button @click="resetExercise('determinativeExercises')" class="btn btn-light mx-3">🔃</button>
            </div>
            <div class="col-12 col-lg-4 my-5">
                <hr>
                <h2>2. Gli articoli indeterminativi</h2>
                <p>Setzen Sie die richtigen Artikel im Akkusativ ein.</p>
                <div v-for="(exercise, index) in indeterminateExercises" :key="'indeterminate-' + index"
                    class="question-section">
                    <p>{{ exercise.sentence.replace("___", "____") }}</p>
                    <div v-for="(option, optIndex) in exercise.options" :key="optIndex" class="option">
                        <input type="radio" :name="'indeterminate-' + index" :value="option"
                            v-model="exercise.userAnswer" :disabled="exercise.checked" />
                        <label>{{ option }}</label>
                    </div>
                    <p v-if="exercise.checked">
                        <span :class="{ correct: exercise.correct, incorrect: !exercise.correct }">{{ exercise.correct ?
                            'Corretto!' : 'Sbagliato!' }}</span>
                        <span v-if="!exercise.correct">Risposta giusta: {{ exercise.correctAnswer }}</span>
                    </p>
                </div>
                <button @click="checkAnswers('indeterminateExercises')"
                    class="btn btn-primary mx-3">korrigieren</button>
                <button @click="resetExercise('indeterminateExercises')" class="btn btn-light mx-3">🔃</button>

            </div>
            <div class="col-12 col-lg-4 my-5">
                <hr>
                <h2>3. Quale dei nomi sta all'accusativo?</h2>
                <div v-for="(exercise, index) in accusativeSelection" :key="'selection-' + index"
                    class="question-section">
                    <p>{{ exercise.sentence }}</p>
                    <div v-for="(option, optIndex) in exercise.options" :key="optIndex" class="option">
                        <input type="radio" :name="'selection-' + index" :value="option" v-model="exercise.userAnswer"
                            :disabled="exercise.checked" />
                        <label>{{ option }}</label>
                    </div>
                    <p v-if="exercise.checked">
                        <span :class="{ correct: exercise.correct, incorrect: !exercise.correct }">{{ exercise.correct ?
                            'Corretto!' : 'Sbagliato!' }}</span>
                        <span v-if="!exercise.correct">Risposta giusta: {{ exercise.correctAnswer }}</span>
                    </p>
                </div>
                <button @click="checkAnswers('accusativeSelection')" class="btn btn-primary mx-3">korrigieren</button>
                <button @click="resetExercise('accusativeSelection')" class="btn btn-light mx-3">🔃</button>
            </div>
        </div>
        <!-- Esercizi sugli articoli determinativi -->

        <!-- Esercizi sugli articoli indeterminativi -->

        <!-- Seleziona il nome all'accusativo -->

    </div>
</template>

<style scoped>
.exercise-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
}


.question-section {
    margin-bottom: 20px;
}

.option {
    display: flex;
    align-items: center;
    margin: 5px 0;
}

label {
    margin-left: 8px;
}

.correct {
    color: green;
}

.incorrect{
    color: red;
}
</style>
