<template>
  <div id="favCountries">

    <card :countries="favCountries"></card>

  </div>
</template>

<script>

import Card from '../card/Card';

export default {
  name: 'favCountries',
  components: {
    card: Card
  },
  created(){
    this.$store.commit('changeShowPagination', false);
  },
  computed:{
    favCountries(){
      return this.$store.getters.favCountries;
    }
  }
}
</script>
