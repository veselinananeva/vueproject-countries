import Vue from 'vue'
import App from './App.vue'
import Router from './router/index';
import VueBootstrap from 'bootstrap-vue';
import VueResource from 'vue-resource';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueBootstrap);
Vue.use(VueResource);


Vue.config.productionTip = false

Vue.http.options.root = 'https://restcountries.eu/rest/v2/';

export default new Vue({
  render: h => h(App),
  store: store,
  router: Router,
}).$mount('#app')
