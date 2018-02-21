import { 
  createTask,
  streamTasks
} from '../../firebase/tasks';

const state = {
  tasks: []
}

const getters = {
  tasks: (s) => s.tasks
}

const actions = {
  createTask: async ({commit}, task) => {
    await createTask(task);
  },
  streamTasks: ({commit, dispatch}) => {
    streamTasks().subscribe({
      next: data => commit('setTasks', data),
      error: e => console.error(e)
    });
  }
}

const mutations = {
  setTasks: (s, data) => s.tasks = data
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}