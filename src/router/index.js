import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import HomeThemaVue from "../components/thema/HomeThemaVue.vue";
import TheorieView from "../views/TheorieView.vue";
import VertiefungenView from "../views/VertiefungenView.vue";
import UbungView from "../views/UbungView.vue";
/* Ubung */
import ubung_cards from "../components/ubung/ubung_cards.vue";
import acc_aufgaben from "../components/ubung/acc_aufgaben.vue";



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
/* ARTIKEL */
import artikel from "../components/thema/artikel/artikel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/theorie",
      name: "theorie",
      component: TheorieView,
    },
    {
      path: "/vertiefungen",
      name: "vertiefungen",
      component: VertiefungenView,
    },
    {
      path: "/ubung",
      name: "ubung",
      component: UbungView,
    },
    {
      path: "/ubung_cards",
      name: "ubung_cards",
      component: ubung_cards,
    },
    {
      path: "/acc_aufgaben",
      name: "acc_aufgaben",
      component: acc_aufgaben,
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
    },
    /* ARTIKEL */
    {
      path: "/artikel",
      name: "artikel",
      component: artikel,
    },
  ],
});

export default router;
