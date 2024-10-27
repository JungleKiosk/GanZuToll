<script>
import { themen } from './../../data/thema.js';
import { useRouter } from 'vue-router';

export default {
  name: 'ThemenList',
  data() {
    return {
      themenList: themen
    };
  },
  setup() {
    const router = useRouter();

    const goToThemePage = (route) => {
      router.push(route);
    };

    return { goToThemePage };
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Themen</h1>
        <p>Wählen Sie ein Thema, lesen Sie und lernen Sie!!!</p>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-4" v-for="thema in themenList" :key="thema.id">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">{{ thema.name }}</h5>
            <p class="card-text">{{ thema.description }}</p>
            <button @click="goToThemePage(thema.route)" class="btn_index">
              Gehe zu {{ thema.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(109, 32, 32, 0.1);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px rgb(255, 140, 0);
}

.card-body {
  text-align: center;
}
</style>
