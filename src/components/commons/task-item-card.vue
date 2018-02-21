<template lang="pug">
  div
    v-card(flat).elevation-1.mb-2
      v-card-text.pa-2
        small {{ item.title | morph-capitalize }}
        p 
          small {{ item.description | morph-capitalize }}
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
</template>

<script>
  export default {
    props: ['item']    
  }
</script>
