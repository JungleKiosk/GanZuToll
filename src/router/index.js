import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import HomeThemaVue from "../components/thema/HomeThemaVue.vue";
import Urlaub from "../components/thema/urlaub/Urlaub.vue";
/* HERBST */
import Herbst from "../components/thema/herbst/Herbst.vue";
import food from "../components/thema/herbst/food.vue";
import activity from "../components/thema/herbst/activity.vue";
import events from "../components/thema/herbst/events.vue";
/* UHR */
import Uhr from "../components/thema/uhr/Uhr.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/thema",
      name: "thema",
      component: HomeThemaVue,
    },
    {
      path: "/urlaub",
      name: "Urlaub",
      component: Urlaub,
    },
    {
      path: "/herbst",
      name: "Herbst",
      component: Herbst,
    },
    {
      path: "/food",
      name: "food",
      component: food,
    },
    {
      path: "/activity",
      name: "activity",
      component: activity,
    },
    {
      path: "/events",
      name: "events",
      component: events,
    },
    {
      path: "/uhr",
      name: "uhr",
      component: Uhr,
    },
  ],
});

export default router;
