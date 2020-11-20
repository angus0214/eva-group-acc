import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import NewPin from '../views/NewPin.vue';
import MyPins from '../views/MyPins.vue';
import AllPins from '../views/AllPins.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    props:true,
    children: [
      {
        path: 'newpin',
        name: 'NewPin',
        component: NewPin,
      },
      {
        path: 'mypins',
        name: 'MyPins',
        component: MyPins,
      },
      {
        path: 'allpins',
        name: 'AllPins',
        component: AllPins,
      },
    ],
  },
  // {
  // path: '/about',
  // name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes,
});

export default router;
