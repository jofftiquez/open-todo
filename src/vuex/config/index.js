import { firebase, name, theme } from '../../../.config';

const state = {
  firebaseConfig: firebase,
  appName: name,
  theme: theme
}

const getters = {
  firebaseConfig: (s) => s.firebaseConfig,
  appName: (s) => s.appName,
  theme: (s) => s.theme
}

const actions = {
  
}

const mutations = {
  
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}