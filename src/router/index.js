import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/settings',
    name: 'user-settings',
    component: () =>
      import(
        /* webpackChunkName: "user-settings" */ '../views/UserSettings.vue'
      )
  },
  {
    path: '/requests',
    name: 'requests',
    component: () =>
      import(/* webpackChunkName: "requests" */ '../views/Requests.vue')
  },
  {
    path: '/offers',
    name: 'offers',
    component: () =>
      import(/* webpackChunkName: "offers" */ '../views/Offers.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () =>
      import(/* webpackChunkName: "offers" */ '../views/Contacts.vue')
  }
  // {
  //   path: "/"
  // }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
