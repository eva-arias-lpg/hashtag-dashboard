import Vue from 'vue';
import Vuex from 'vuex';
import SourceData from '@/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { ...SourceData },
  mutations: {},
  actions: {},
  modules: {}
});
