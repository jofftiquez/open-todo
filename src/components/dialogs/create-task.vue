<template lang="pug">
  v-layout(row justify-center)
    v-dialog(v-model="dialog2" width="600px")
      form(@submit.prevent="saveTask")
        v-card
          v-card-title(class="grey lighten-4 py-4 title") Create a task
          v-container
            v-layout(row)
              v-flex(xs12)
                v-text-field(v-model="task.title" type="text" label="Title" required)
                v-text-field(v-model="task.description" type="text" label="Description" multi-line required)
          v-divider
          v-card-actions
            v-spacer
            v-btn(flat color="primary" @click="dialog2 = false") Cancel
            v-btn(type="submit" color="primary" @click="") Save
</template>

<script>
  export default {
    props: ['dialog'],
    data() {
      return {
        dialog2: this.dialog,
        task: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      async saveTask() {
        try {
          await this.$store.dispatch('tasks/createTask', this.task);
          this.task = {
            title: '',
            description: ''
          }
          this.dialog2 = false;
        } catch (e) {
          alert(e);
        }
      }
    },
    watch: {
      dialog(val) {
        this.dialog2 = val;
      },
      dialog2(val) {
        if (!val) {
          this.$emit('close', false);
        }
      },
    }
  }
</script>