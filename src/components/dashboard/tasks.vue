<template lang="pug">
  main
    v-toolbar(dense color="green-50").elevation-0
    v-container
      v-layout(v-bind="binding").ma-1
        v-flex(xs12 md4).pa-1
          v-card
            v-card-text(style="height: 400px; overflow: auto;").pa-2
              v-card(flat v-for="x in [0,1,2,3,4,5,6]").elevation-1.mb-2
                v-card-text.pa-2
                  small Title
                  p 
                    small Description
                  small 10 Subtasks
                v-divider
                v-card-actions
                  v-tooltip(bottom)
                    v-btn(icon slot="activator").primary--text 
                      v-icon done
                    | Mark as done
                  v-tooltip(bottom)
                    v-btn(icon slot="activator").primary--text 
                      v-icon remove_red_eye
                    | View
                  v-tooltip(bottom)
                    v-btn(icon slot="activator").primary--text 
                      v-icon color_lens
                    | Change Color
                  v-spacer
                  v-tooltip(bottom)
                    v-btn(icon slot="activator").primary--text 
                      v-icon archive
                    | Archive

            v-footer.pa-1 
              strong Today
        v-flex(xs12 md4).pa-1
          v-card
            v-card-text
            v-footer.pa-1 
              strong Upcoming
        v-flex(xs12 md4).pa-1
          v-card
            v-card-text
            v-footer.pa-1
              strong Done
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