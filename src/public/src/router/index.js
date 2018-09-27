import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Status Board',
      component: Board
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
  ],
  mode: 'history'
})
