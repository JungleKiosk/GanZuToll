<script>
import Modal from '../../partials/ModHerbst.vue';
import UhrMenu from './UhrMenu.vue';

export default {
  name: "Kurz",
  components: {
    UhrMenu,
    Modal
  },
  data() {
    return {
      showModal: false,
      currentDescription: "",
      notaDescriptions: {
        war: "Vergangenheitsform des Verbs sein",
        gab: "Vergangenheitsform des Verbs geben",
        Törggelen: "Das Törggelen ist ein Herbstfest in Südtirol"
      },
      currentNota: "",
      exercises: [
        {
          question: "Es ist 14:30 🕝",
          options: ["Viertel vor drei", "halb zwei", "halb drei"],
          correctAnswer: "halb drei",
          checked: false,
          correct: false,
        },
        {
          question: "Es ist Viertel vor vier",
          options: ["3:15", "4:15", "15:45"],
          correctAnswer: "15:45",
          checked: false,
          correct: false,
        },
        {
          question: "Es ist kurz nach fünf",
          options: ["16:55", "17:05", "17:30"],
          correctAnswer: "17:05",
          checked: false,
          correct: false,
        },
        {
          question: "Es ist halb siben🕡",
          options: ["7:30", "19:30", "18:30"],
          correctAnswer: "18:30",
          checked: false,
          correct: false,
        },
        {
          question: "Es ist 12:30 🕧",
          options: ["halb zwolf", "halb vor ein", "halb ein"],
          correctAnswer: "halb ein",
          checked: false,
          correct: false,
        },
        {
          question: "Es ist fünf vor neun",
          options: ["9:55", "8:55", "9:05"],
          correctAnswer: "8:55",
          checked: false,
          correct: false,
        },
        {
          question: "Es ist halb zehn",
          options: ["9:30", "10:30", "8:30"],
          correctAnswer: "9:30",
          checked: false,
          correct: false,
        },
        {
          question: "Es ist 21:30 🕤",
          options: ["halb neun", "Viertel vor zehn","halb zehn" ],
          correctAnswer: "halb zehn",
          checked: false,
          correct: false,
        },
        {
          question: "Es ist zwanzig vor elf",
          options: ["10:20", "10:40", "10:45"],
          correctAnswer: "10:40",
          checked: false,
          correct: false,
        },
        {
          question: "Es ist kurz nach zwölf",
          options: ["11:05", "12:05", "13:05"],
          correctAnswer: "12:05",
          checked: false,
          correct: false,
        }
      ],
      userAnswers: {}
    };
  },
  methods: {
    openModal(nota) {
      this.currentNota = nota;
      this.currentDescription = this.notaDescriptions[nota] || "";
      this.showModal = true;
    },
    saveDescription(newDescription) {
      this.$set(this.notaDescriptions, this.currentNota, newDescription);
    },
    checkAllAnswers() {
      this.exercises.forEach((exercise, index) => {
        const userAnswer = this.userAnswers[index];
        const correctAnswer = exercise.correctAnswer;
        exercise.checked = true;
        exercise.correct = userAnswer === correctAnswer;
      });
    }
  }
};
</script>

<template>
  <div class="container my-5">
    <UhrMenu></UhrMenu>
    <div class="row justify-content-center">
      <div class="col-12 col-lg-6">
        <h2>Aufgaben</h2>

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
        <button @click="checkAllAnswers" class="btn btn-primary">
          Alles korrigieren
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
</style>
