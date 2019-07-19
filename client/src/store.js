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
  mutations: {
    setProfile(state, profile) {
      state.userProfile = profile;
    }
  },
  actions: {
    fetchProfile({ commit }) {
      axios
        .get("/api/user/ownerList/5d312e9c96be4146f02bdb8d", {})
        .then(response => {
          // console.log(response.data[0]);
          const profile = response.data[0];
          commit("setProfile", profile);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});
