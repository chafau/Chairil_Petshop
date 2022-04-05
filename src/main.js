import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import globalComponents from './plugins/globalComponent.js'
import VueImg from 'v-img';
import jQuery from 'jquery';
import {fb}   from './firebase'
import VueFirestore from 'vue-firestore'
require('firebase/firestore')

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})
Vue.use(VueFirestore)
Vue.use(globalComponents)
Vue.use(fb)
Vue.use(VueImg);

window.$ = window.jQuery = jQuery;

import 'popper.js';


import Swal from 'sweetalert2';
import vuetify from './plugins/vuetify'

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;


Vue.config.productionTip = false;


let app = '';

fb.auth().onAuthStateChanged(function(user) {
  // console.log("user", user);
  if(!app){
    new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
    
  }

});



// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import ResetInput from 'v-reset-input'
// import App from './App.vue'
// import router from './routes'
// // import firebase from "firebase/compat/app"
// import globalComponents from '../src/plugins/globalComponent.js'
// import jQuery from 'jquery';
// import {fb}   from './firebase'
// import VueFirestore from 'vue-firestore'
// require('firebase/firestore')

// Vue.use(VueFirestore, {
//   key: 'id',         // the name of the property. Default is '.key'.
//   enumerable: true  //  whether it is enumerable or not. Default is true.
// })

// Vue.use(VueFirestore)

// window.$ = window.jQuery = jQuery;

// import Swal from 'sweetalert2';
// import 'popper.js';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'

// window.Swal = Swal;

// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000
// });

// window.Toast = Toast;

// Vue.config.productionTip = false

// let app = '';

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
// Vue.use(globalComponents)
// Vue.use(ResetInput)

// fb.auth().onAuthStateChanged(function(user) {

//   if(!app){
//     new Vue({
//       router,
//       render: h => h(App)
//     }).$mount("#app");

//   }

// });