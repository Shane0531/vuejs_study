import Vue from 'vue';
import CreateItem from './components/CreateItem.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [
  {
        name: 'CreateItem',
        path: '/',
        component: CreateItem
    }
];

const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
