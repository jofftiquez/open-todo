<template lang="pug">
  main
    v-toolbar(dense).elevation-0
      v-toolbar-title 
        v-icon assignment
        | Tasks
    v-container
      v-layout(v-bind="binding").ma-1
        v-flex(xs12 md4).pa-1
          v-card
            v-footer.pa-1 
              strong Today
            v-card-text(style="height: 400px; overflow: auto;").pa-2
              task-item-card(v-for="(task, i) in tasks"  :key="i" :item="task")
        v-flex(xs12 md4).pa-1
          v-card
            v-footer.pa-1 
              strong Upcoming
            v-card-text
        v-flex(xs12 md4).pa-1
          v-footer.pa-1
            strong Done
          v-card
            v-card-text
    v-tooltip(top) 
      v-btn(
        color="primary"
        slot="activator"
        fab
        bottom
        right
        fixed
        @click.stop="addTaskDialog = true"
      )
        v-icon add
      | Add Task
    create-task(
      :dialog="addTaskDialog"
      @close="val => addTaskDialog = val"
    )
</template>

<script>
  import TaskItemCard from '../commons/task-item-card';
  import CreateTask from '../dialogs/create-task';
  export default {
    created() {
      this.$store.dispatch('tasks/streamTasks');
    },
    components: {
      TaskItemCard,
      CreateTask
    },
    data() {
      return {
        addTaskDialog: false
      }
    },
    computed: {
      binding () {
        const binding = {};
        if (this.$vuetify.breakpoint.mdAndUp) {
          binding.row = true;
        } else {
          binding.column = true;
        }
        return binding
      },
      tasks: {
        get() {
          return this.$store.getters['tasks/tasks'];
        }
      }
    }
  }
</script>