/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
  },
  getters: {
    spyOnCounter(state) {
      return state.counter;
    },
  },
});
