<script>
export default {
    name: "GrammarExercise",
    data() {
        return {
            // Dati per l'esercizio a scelta multipla
            multipleChoiceQuestions: [
                {
                    question: "Was ist der richtige Artikel für 'Frühling'?",
                    options: ["die", "der", "das"],
                    correctAnswer: "der",
                    userAnswer: null
                },
                {
                    question: "Was ist der richtige Artikel für 'Reise'?",
                    options: ["die", "der", "das"],
                    correctAnswer: "die",
                    userAnswer: null
                },
                {
                    question: "Was ist der richtige Artikel für 'Regen'?",
                    options: ["die", "der", "das"],
                    correctAnswer: "der",
                    userAnswer: null
                }
            ],
            // Dati per l'esercizio con testo e menu a discesa
            dropdownExerciseTexts: [
                {
                    textStart: "Im Winter ist die Heiz-",
                    word: "in Deutschland oft den ganzen Tag an.",
                    correctEnding: "-ung",
                    options: ["-keit", "-ung", "-schaft"],
                    textEnd: "è un fenomeno complesso."
                },
                {
                    textStart: "In der modernen Gesell-",
                    word: " spielt die Technologie eine immer wichtigere Rolle.",
                    correctEnding: "-schaft",
                    options: ["-keit", "-ion", "-schaft"],
                    textEnd: "è un fenomeno complesso.",
                    level:"schwierig 🔴"
                },
            ]
        };
    },
    methods: {
        checkAnswers() {
            this.multipleChoiceQuestions.forEach(question => {
                question.isCorrect = question.userAnswer === question.correctAnswer;
            });
        },
        resetMultipleChoice() {
            this.multipleChoiceQuestions.forEach(question => {
                question.userAnswer = null; // Solo resetta la risposta dell'utente
            });
        },
        checkDropdownAnswers() {
            this.dropdownExerciseTexts.forEach(text => {
                text.isCorrect = text.selectedEnding === text.correctEnding;
            });
        },
        resetDropdownExercise() {
            this.dropdownExerciseTexts.forEach(text => {
                text.selectedEnding = null; // Solo resetta la risposta dell'utente
            });
        }
    }
};
</script>

<template>
    <div class="container mt-5">
        <h2>Esercizi sui Generi e le Declinazioni dei Nomi</h2>
        
        <!-- Esercizio a scelta multipla -->
        <h3 class="mt-4">Esercizio 1: Scegli l'articolo corretto</h3>
        <div v-for="(question, index) in multipleChoiceQuestions" :key="index" class="mb-4">
            <p>{{ question.question }}</p>
            <div v-for="option in question.options" :key="option">
                <input
                    type="radio"
                    :name="'question-' + index"
                    :value="option"
                    v-model="question.userAnswer"
                />
                <label>{{ option }}</label>
            </div>
            <p v-if="question.isCorrect !== undefined">
                <span :class="question.isCorrect ? 'text-success' : 'text-danger'">
                    {{ question.isCorrect ? 'Corretto!' : 'Sbagliato!' }}
                </span>
            </p>
        </div>
        <button @click="checkAnswers" class="btn btn-primary">Controlla Risposte</button>
        <button @click="resetMultipleChoice" class="btn btn-secondary ms-2">Riprova</button>

        <!-- Esercizio con menu a discesa -->
        <h3 class="mt-5">Esercizio 2: Completa con la terminazione corretta</h3>
        <div v-for="(text, index) in dropdownExerciseTexts" :key="index" class="mb-4">
            <p>
                {{ text.level }}
                <br>
                {{ text.textStart }}
                <select v-model="text.selectedEnding" class="form-select d-inline-block w-auto ms-2">
                    <option disabled value=""></option>
                    <option v-for="option in text.options" :key="option" :value="option">
                        {{ option }}
                    </option>
                </select>
                {{ text.word }}
                {{ text.textEnd }}
                
            </p>
            <p v-if="text.isCorrect !== undefined">
                <span :class="text.isCorrect ? 'text-success' : 'text-danger'">
                    {{ text.isCorrect ? 'Corretto!' : 'Sbagliato!' }}
                </span>
            </p>
        </div>
        <button @click="checkDropdownAnswers" class="btn btn-primary">Verifica Terminazioni</button>
        <button @click="resetDropdownExercise" class="btn btn-secondary ms-2">Riprova</button>
    </div>
</template>

<style scoped>
.container {
    max-width: 800px;
}

.text-success {
    color: #28a745;
}

.text-danger {
    color: #dc3545;
}
</style>
