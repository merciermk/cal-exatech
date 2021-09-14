import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    calendar: [
      {title :"Informatique", start:"2021-09-15T15:00:00", end:"2021-09-15T20:50:00", color: '', affichage: {candidats:"656", concours:"MP"}},
      {title :"Anglais", start:"2021-09-15T15:00:00", end:"2021-09-15T20:50:00", color:'', affichage: {candidats:"653645", concours:"MP"}},
      {title :"Allemand", start:"2021-09-15T15:00:00", end:"2021-09-15T20:50:00", color: '', affichage: {candidats:"3611", concours:"MP"}},
      {title :"Informatique", start:"2021-09-14T15:00:00", end:"2021-09-14T15:50:00", color:'', affichage: {candidats:"256", concours:"MP"}},
      {title :"Anglais", start:"2021-09-13T13:00:00", end:"2021-09-13T15:50:00", color:'', affichage: {candidats:"653645", concours:"MP"}},
      {title :"Informatique", start:"2021-09-17T15:00:00", end:"2021-09-17T15:50:00", color:'', affichage: {candidats:"2512", concours:"MP"}},
      {title :"Mathématique2", start:"2021-09-17T08:00:00", end:"2021-09-17T13:50:00", color:'', affichage: {candidats:"2512", concours:"MP,PC"}},
  ]

  },
  mutations: {},
  actions: {},
  modules: {},
});
