import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import {fb} from '../firebase'

import { fb } from "@/firebase"
import "firebase/auth";

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/about',
  name: 'About',
  component: () => import('../views/About.vue')
},
{
  path: '/admin',
  name: 'Admin',
  component: () => import('../views/admin/Admin.vue'),
  meta: {
    requiresAuth: true
  }
},
{
  path: '/products',
  name: 'Products',
  component: () => import('../views/Products.vue')
},
{
  path: '*',
  name: '404',
  // component: () => import('../views/404.vue')
}
]

// router.beforeEach((to, from, next) => {

//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//   const currentUser = fb.auth().currentUser

//   if (requiresAuth && !currentUser) {
//       next('/')
//   } else if (requiresAuth && currentUser) {
//       next()
//   } else {
//       next()
//   }
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
})

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   const isAuthenticated = fb.auth().currentUser;
//   // console.log("isauthenticated", isAuthenticated);
//   if (requiresAuth && !isAuthenticated) {
//     next("/login");
//   } else {
//     next();
//   }
// });


export default router