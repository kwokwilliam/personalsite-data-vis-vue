import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import Home from './components/Home.vue'
import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBJCJ5AivGAldYdv9IYyhGeOEWskuaBE8k",
    authDomain: "personalsite-visitcounter.firebaseapp.com",
    databaseURL: "https://personalsite-visitcounter.firebaseio.com",
    projectId: "personalsite-visitcounter",
    storageBucket: "personalsite-visitcounter.appspot.com",
    messagingSenderId: "300262936321"
};
firebase.initializeApp(config);

Vue.use(VueRouter, Vuex);

const routes = [
    { path: '/', component: Home },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    router, render: h => h(App)
}).$mount('#app')
