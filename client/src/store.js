import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {},
    questionList: [],

    nowQList: [],
    nowQStatus: {},
    nowAList: [],

    designQList: [],
    designQStatus: {},
    designAList: []

  },
  mutations: {},
  actions: {}
});
