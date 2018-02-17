import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import tasks from './tasks';
import config from './config';

Vue.use(Vuex);

const modules = {
  tasks, config
}

export default new Vuex.Store({
  modules, 
  plugins:[
    createPersistedState({ storage: window.sessionStorage })
  ]
});