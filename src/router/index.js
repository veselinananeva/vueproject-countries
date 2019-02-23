import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/Home.vue';
import favCountries from '../components/favCountries/favCountries';

Vue.use(Router);

const routes = [
  {
      path:'/',
      name:'home',
      components:{
          default: Home
      }
  },
  {
    path:'/favCountries',
    name:'favCountries',
    components:{
        default: favCountries
    }
},

];

export default new Router({routes});
