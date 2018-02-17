<template lang="pug">
  v-app#inspire
    v-navigation-drawer(
      fixed
      :clipped="$vuetify.breakpoint.mdAndUp"
      app
      v-model="drawer"
    )
      v-list(dense)
        template(v-for="item in items")
          v-layout(
            row
            v-if="item.heading"
            align-center
            :key="item.heading"
          )
            v-flex(xs6)
              v-subheader(v-if="item.heading") {{ item.heading }}
            v-flex(xs6 class="text-xs-center")
              a(href="#!" class="body-2 black--text") EDIT
          v-list-group(
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          )
            v-list-tile(slot="activator")
              v-list-tile-content
                v-list-tile-title {{ item.text }}
            v-list-tile(
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            )
              v-list-tile-action(v-if="child.icon")
                v-icon {{ child.icon }}
              v-list-tile-content
                v-list-tile-title {{ child.text }}
          v-list-tile(v-else :key="item.text" :to="{name: item.to}")
            v-list-tile-action
              v-icon {{ item.icon }}
            v-list-tile-content
              v-list-tile-title {{ item.text }}
    v-toolbar(
      light
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed
      color="white"
    ).elevation-1
      v-toolbar-title
        v-toolbar-side-icon(@click.stop="drawer = !drawer").primary--text
        span(class="hidden-sm-and-down") {{ appName }}
      //- v-text-field
      //-   flat
      //-   solo-inverted
      //-   prepend-icon="search"
      //-   label="Search"
      //-   class="hidden-sm-and-down"
      //- ></v-text-field>
      v-spacer
      v-btn(icon)
        v-icon(apps)
      v-btn(icon)
        v-icon notifications
      v-btn(icon large)
        v-avatar(size="32px" tile)
          img(
            src="https://vuetifyjs.com/static/doc-images/logo.svg"
            alt="Vuetify"
          )
    v-content
      router-view
    v-tooltip(top) 
      v-btn(
        color="primary"
        slot="activator"
        fab
        bottom
        right
        fixed
        @click.stop="addTaskDialog = !addTaskDialog"
      )
        v-icon add
      | Add Task
    v-dialog(
      v-model="addTaskDialog" width="800px"
    )
      v-card
        v-card-title(class="grey lighten-4 py-4 title") Create contact
        v-container(grid-list-sm class="pa-4")
          v-layout(row wrap)
        v-card-actions
          v-spacer
          v-btn(flat color="primary" @click="addTaskDialog = false") Save
</template>

<script>
  export default {
    props: {
      source: String
    },
    data: () => ({
      addTaskDialog: false,
      drawer: null,
      items: [
        { icon: 'assignment', text: 'Tasks', to: 'Tasks' },
        { icon: 'people', text: 'Teams', to: 'Teams' },
        // { icon: 'history', text: 'Frequently contacted' },
        // { icon: 'content_copy', text: 'Duplicates' },
        // {
        //   icon: 'keyboard_arrow_up',
        //   'icon-alt': 'keyboard_arrow_down',
        //   text: 'Labels',
        //   model: true,
        //   children: [
        //     { icon: 'add', text: 'Create label' }
        //   ]
        // },
        // {
        //   icon: 'keyboard_arrow_up',
        //   'icon-alt': 'keyboard_arrow_down',
        //   text: 'More',
        //   model: false,
        //   children: [
        //     { text: 'Import' },
        //     { text: 'Export' },
        //     { text: 'Print' },
        //     { text: 'Undo changes' },
        //     { text: 'Other contacts' }
        //   ]
        // },
        // { icon: 'settings', text: 'Settings' },
        // { icon: 'chat_bubble', text: 'Send feedback' },
        // { icon: 'help', text: 'Help' },
        // { icon: 'phonelink', text: 'App downloads' },
        // { icon: 'keyboard', text: 'Go to the old version' }
      ]
    }),
    computed: {
      appName: {
        get() { return this.$store.getters['config/appName'] }
      }
    }
  }
</script>