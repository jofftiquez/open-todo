import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Dashboard from '@/components/dashboard/dashboard';
import Tasks from '@/components/dashboard/tasks';
import Teams from '@/components/dashboard/teams';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      redirect: 'Tasks',
      component: Dashboard,
      children: [
        {
          path: '',
          name: 'Tasks',
          component: Tasks,
          meta: {
            title: 'Console'
          }
        },
        {
          path: '/teams',
          name: 'Teams',
          component: Teams,
          meta: {
            title: 'Teams'
          }
        },
      ]
    }
  ]
})
