import Vue from 'vue';
import VueRouter from 'vue-router';
import inicio from '../views/Inicio.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: inicio
  },
  {
    path: '/configuracion',
    name: 'configUsuario',
    component: () =>
      import(
        /* webpackChunkName: "configUsuario" */ '../views/ConfigUsuario.vue'
      )
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: () =>
      import(/* webpackChunkName: "pedidos" */ '../views/Pedidos.vue')
  },
  {
    path: '/ofertas',
    name: 'ofertas',
    component: () =>
      import(/* webpackChunkName: "ofertas" */ '../views/Ofertas.vue')
  },
  {
    path: '/contactos',
    name: 'contactos',
    component: () =>
      import(/* webpackChunkName: "contactos" */ '../views/Contactos.vue')
  },
  {
    path: '/nueva-solicitud',
    component: () =>
      import(
        /* webpackChunkName: "nuevaSolicitud" */ '../views/NuevaSolicitud.vue'
      ),
    children: [
      {
        path: '',
        name: 'nuevaSolicitudTipoSeleccion',
        component: () =>
          import(
            /* webpackChunkName: "nuevaSolicitudTipoSeleccion" */ '../views/NuevaSolicitudTipoSeleccion.vue'
          )
      },
      {
        path: ':tipo',
        name: 'nuevaSolicitudFormulario',
        component: () =>
          import(
            /* webpackChunkName: "nuevaSolicitudFormulario" */ '../views/NuevaSolicitudFormulario.vue'
          )
      }
    ]
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
