<template lang="pug">
  main
    v-toolbar(dense).elevation-0
      v-toolbar-title 
        v-icon people
        | Teams
      v-spacer
      v-tooltip(bottom)
        v-btn(icon slot="activator") 
          v-icon group_add
        | Join a team
      v-tooltip(bottom)
        v-btn(icon slot="activator") 
          v-icon add
        | Create a team
    v-container
      v-layout(v-bind="binding").ma-1
        v-flex(xs12 md4).pa-1
          v-card
            v-card-text Team 1
            
</template>

<script>
  export default {
    computed: {
      binding () {
        const binding = {};

        if (this.$vuetify.breakpoint.mdAndUp) {
          binding.row = true;
        } else {
          binding.column = true;
        }
        return binding
      }
    }
  }
</script>