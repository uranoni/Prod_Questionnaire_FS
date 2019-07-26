import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {},
    questionList: [],

    nowListID: "",
    nowList: {},
    nowQList: [],
    nowAList: [],
    nowPath: [],
  },
  mutations: {
    // setProfile(state, profile) {
    //   state.userProfile = profile;
    // },
    setProfile(state, profile) {
      state.userProfile = profile;
    },
    setNowListID(state, payload) {
      state.nowListID = payload;
    },
    setNowList(state, list) {
      state.nowList = list;
    },
    addPath(state, payload) {
      state.nowPath.push(payload);
    }
  },
  actions: {
    fetchProfile({ commit }) {
      console.log(localStorage.getItem("authorization"));
      axios
        .get("user/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("Authorization")
          }
        })
        .then(response => {
          const profile = response.data;
          commit("setProfile", profile);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    fetchNowList({ commit, state }) {
      // console.log(`${state.nowListID}`);
      axios
        .get(`list/allItem/${state.nowListID}`)
        .then(response => {
          const list = response.data;
          commit("setNowList", list);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
});
