<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
    
    <Footer />
  </div>
</template>

<script>
import Search from './components/search/Search'
import Navigation from './components/navigation/Navigation'
import Card from './components/card/Card'
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import favCountries from './components/favCountries/favCountries';

export default {
  name: 'app',
  components: {
    Home,
    Navigation,
    Search,
    Footer,
    Card, 
    favCountries
  }
}
</script>

<style>
#app {
  background-image: url('~@/assets/wall.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  
}
</style>
