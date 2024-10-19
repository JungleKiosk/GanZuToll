<script>
import Herbst from './Herbst.vue';

export default {
  name: "events",
  components: {
    Herbst
  }
};
</script>

<template>
  <div class="container">
    <Herbst></Herbst>
    <div class="row">
      <div class="col-12">
        <h1>Event</h1>
        <ul>
          <li>
            <h2>Bozen 19.10.2024 - Erntdankfest</h2>
            <p>Dieses Wochenende <span class="nota">gab es</span> auf dem Waltherplatz das Erntedankfest. <br>
              Es gab viele Stände <span class="nota">mit typischen</span> Südtiroler Speisen und Produkten.🍎🍏
            
            </p>
          </li>
        </ul>
      </div>
    </div>


  </div>
</template>

<style scoped>

.nota{
  color:brown;
  font-weight: bold;
}


</style>
