import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import HomeThemaVue from "../components/thema/HomeThemaVue.vue";
/* HERBST */
import Herbst from "../components/thema/herbst/Herbst.vue";
import food from "../components/thema/herbst/food.vue";
import activity from "../components/thema/herbst/activity.vue";
import events from "../components/thema/herbst/events.vue";
/* UHR */
import Uhr from "../components/thema/uhr/Uhr.vue";
import kurz from "../components/thema/uhr/kurz.vue";
import uhraufgaben from "../components/thema/uhr/uhraufgaben.vue";
/* ZAHLEN */
import Zahlen from "../components/thema/zahlen/Zahlen.vue";
import zahlenaufgaben from "../components/thema/zahlen/zahlenaufgaben.vue";
import massnahmen from "../components/thema/zahlen/massnahmen.vue";
/* URLAUB */
import Urlaub from "../components/thema/urlaub/Urlaub.vue";
import urlaubaufgaben from "../components/thema/urlaub/urlaubaufgaben.vue";

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
    /* UHR */
    {
      path: "/uhr",
      name: "uhr",
      component: Uhr,
    },
    {
      path: "/kurz",
      name: "kurz",
      component: kurz,
    },
    {
      path: "/uhraufgaben",
      name: "uhraufgaben",
      component: uhraufgaben,
    },
    /* ZAHLEN */
    {
      path: "/zahlen",
      name: "zahlen",
      component: Zahlen,
    },
    {
      path: "/zahlenaufgaben",
      name: "zahlenaufgaben",
      component: zahlenaufgaben,
    },
    {
      path: "/massnahmen",
      name: "massnahmen",
      component: massnahmen,
    },
    /* URLAUB */
    {
      path: "/urlaub",
      name: "urlaub",
      component: Urlaub,
    },
    {
      path: "/urlaubaufgaben",
      name: "urlaubaufgaben",
      component: urlaubaufgaben,
    }
  ],
});

export default router;
