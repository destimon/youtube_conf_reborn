import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {}
  },
  actions: {
    addNote({commit}) {
      axios.get('/api/user')
      .then((res) => {
        commit('UPD_USER', res.data)
      })
    }
  },
  mutations: {
    UPD_USER(state, user) {
      state.user = user
    }
  },
  getters: {
    user(state) {
      return state.notes
    }
  }
})