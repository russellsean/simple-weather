// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { store } from './store'
import App from './App'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import { config } from '../../fbConfig'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// firebase packages
require("firebase/auth");
require("firebase/firestore");
require("firebase/messaging");

var firebaseApp = firebase.initializeApp(config);

var db = firebaseApp.firestore();

Vue.use(VueFire);
Vue.use(Vuetify);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue(
  {
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>',
    methods: {
    },
    mounted() {
      
    }
  },

)
