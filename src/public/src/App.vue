<template>
  <v-app>
    <v-navigation-drawer
      clipped
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Sean Russell</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon><v-icon>exit_to_app</v-icon></v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>    
      <v-list class="pt-0" dense>
      <v-divider></v-divider>
        <v-list-tile
          v-for="(item, i) in navLinks"
          :key="i"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      clipped-left
      class="elevation-1"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{$route.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-bottom-nav
      v-if="$vuetify.breakpoint.smAndDown"
      app
      :value="true"
    >
      <v-btn
        v-for="(item, i) in navLinks"
        :key="i"
        :to="item.link"
        color="primary"
        flat
      >
        <span>{{item.title}}</span>
        <v-icon>{{item.icon}}</v-icon>
      </v-btn>      
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: this.$vuetify.breakpoint.mdAndUp,
      activeBtn: 1,
      navLinks: [
        {
          icon: 'dashboard',
          title: 'Status Board',
          link: '/'
        },
        {
          icon: 'settings',
          title: 'Settings',
          link: '/settings'
        },
      ],
    }
  },
  name: 'App'
}
</script>
