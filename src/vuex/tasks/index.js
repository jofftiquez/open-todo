// import { 
//   streamTasks
// } from '../../firebase/signup-history';

const state = {
  tasks: []
}

const getters = {
  tasks: (s) => s.tasks
}

const actions = {
  // streamSignupHistory: ({commit, dispatch}) => {
  //   streamSignupHistory().subscribe({
  //     next: data => commit('setSignupHistory', data),
  //     error: e => console.error(e)
  //   });
  // }
}

const mutations = {
  setTasks: (s, data) => s.setTasks = data
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}