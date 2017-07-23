import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueFire);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

var vue = new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
