<template>
  <div class="navigation">
   <b-navbar toggleable="md" type="dark" variant="danger">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#"> Countries </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
            <router-link tag="b-nav-item" to="/">
                            <a>All countries</a>
                        </router-link>
        <router-link tag="b-nav-item" to="/favCountries">
                            <a>Favorite countries</a>
                        </router-link>
       
        </b-navbar-nav>

    </b-collapse>
</b-navbar>

<!-- navbar-1.vue -->
  </div>
</template>

<script>
export default {
  name: 'Navigation',
 
}
</script>

<style scoped>

   
    .navbar a
    {
        color: white !important;
    }
</style>
