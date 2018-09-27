// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// firebase packages
require("firebase/auth");
require("firebase/firestore");
require("firebase/messaging");
var config = {
  apiKey: "AIzaSyDIHoi4FrsicHFufkt5OK15rRPgbCgzE-w",
  authDomain: "simple-weather-d3c84.firebaseapp.com",
  databaseURL: "https://simple-weather-d3c84.firebaseio.com",
  projectId: "simple-weather-d3c84",
  storageBucket: "simple-weather-d3c84.appspot.com",
  messagingSenderId: "621597924177"
}
var firebaseApp = firebase.initializeApp(config);

var db = firebaseApp.firestore();

Vue.use(VueFire);
Vue.use(Vuetify);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
