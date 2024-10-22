<script>
import Modal from '../../partials/ModHerbst.vue';
import ZahlenMenu from './ZahlenMenu.vue';

export default {
    name: "numeri",
    components: {
        Modal,
        ZahlenMenu
    },
    data() {
        return {
            showModal: false,
            currentDescription: "",
            notaDescriptions: {},
            currentNota: "",
            exercises: [
                {
                    question: "Wie schreibt man '21' in Worten?",
                    options: ["einundzwanzig", "zweiundzwanzig", "dreiundzwanzig"],
                    correctAnswer: "einundzwanzig",
                    checked: false,
                    correct: false,
                },
                {
                    question: "Wie schreibt man 'fünfunddreißig' in Zahlen?",
                    options: ["25", "35", "45"],
                    correctAnswer: "35",
                    checked: false,
                    correct: false,
                },
                {
                    question: "Was bedeutet 'achtzehn'?",
                    options: ["18", "28", "38"],
                    correctAnswer: "18",
                    checked: false,
                    correct: false,
                },
                {
                    question: "Wie schreibt man 'vierundfünfzig' in Zahlen?",
                    options: ["54", "45", "34"],
                    correctAnswer: "54",
                    checked: false,
                    correct: false,
                },
                {
                    question: "Wie schreibt man '76' in Worten?",
                    options: ["siebenundsechzig", "sechsundsiebzig", "achtundsiebzig"],
                    correctAnswer: "sechsundsiebzig",
                    checked: false,
                    correct: false,
                },
                {
                    question: "Was bedeutet 'zweiundvierzig'?",
                    options: ["24", "42", "34"],
                    correctAnswer: "42",
                    checked: false,
                    correct: false,
                },
                {
                    question: "Wie schreibt man 'neunundachtzig' in Zahlen?",
                    options: ["89", "98", "79"],
                    correctAnswer: "89",
                    checked: false,
                    correct: false,
                },
                {
                    question: "Wie schreibt man '100' in Worten?",
                    options: ["hundert", "einhundert", "tausend"],
                    correctAnswer: "hundert",
                    checked: false,
                    correct: false,
                },
                {
                    question: "Was bedeutet 'dreiundneunzig'?",
                    options: ["39", "93", "33"],
                    correctAnswer: "93",
                    checked: false,
                    correct: false,
                },
                {
                    question: "Wie schreibt man '52' in Worten?",
                    options: ["zweiundfünfzig", "fünfzigzwei", "fünfzehnzwei"],
                    correctAnswer: "zweiundfünfzig",
                    checked: false,
                    correct: false,
                }
            ],
            userAnswers: Array(10).fill(null), // Risposte utente inizializzate
        };
    },
    methods: {
        openModal(nota) {
            this.currentNota = nota;
            this.currentDescription = this.notaDescriptions[nota] || "";
            this.showModal = true;
        },
        checkAllAnswers() {
            this.exercises.forEach((exercise, index) => {
                const userAnswer = this.userAnswers[index];
                const correctAnswer = exercise.correctAnswer;
                exercise.checked = true;
                exercise.correct = userAnswer === correctAnswer;
            });
        },
        refreshExercises() {
            this.exercises.forEach(exercise => {
                exercise.checked = false;
                exercise.correct = false;
            });
            this.userAnswers = Array(10).fill(null); // Reset delle risposte utente
        }
    }
};
</script>

<template>
    <div class="container my-5">
        <ZahlenMenu></ZahlenMenu>
        <div class="row justify-content-center">
            <div class="col-12 col-lg-6">

                <!-- Ciclo per generare gli esercizi -->
                <div v-for="(exercise, index) in exercises" :key="index" class="exercise">
                    <h4>{{ exercise.question }}</h4>
                    
                    <div class="options">
                        <label v-for="(option, idx) in exercise.options" :key="idx">
                            <input
                                type="radio"
                                :name="'exercise-' + index"
                                :value="option"
                                v-model="userAnswers[index]"
                                :disabled="exercise.checked"
                            />
                            {{ option }}
                        </label>
                    </div>

                    <p v-if="exercise.checked">
                        <span :class="{'correct': exercise.correct, 'incorrect': !exercise.correct}">
                            {{ exercise.correct ? 'Richtige Antwort!🍺' : 'Falsche Antwort 😑' }}
                        </span>
                        Die richtige Antwort ist: <strong class="dict">{{ exercise.correctAnswer }}</strong>
                    </p>
                </div>

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

        <Modal v-if="showModal" :isVisible="showModal" :description="currentDescription" @close="showModal = false"
            @save="saveDescription" />
    </div>
</template>

<style scoped>
h2 {
  margin-top: 20px;
}

.exercise {
  margin-bottom: 20px;
}

.options {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.correct {
  color: green;
}

.incorrect {
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

.btn-secondary {
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
}
</style>
