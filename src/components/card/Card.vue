<template>
    <div>
        <singleItem v-for="country in countries" :country="country"></singleItem>
        <pagination class="text-center"></pagination>
    </div>
</template>

<script>

import SingleItem from './SingleItem';
import Pagination from '../common/Pagination';

export default {
 
  name: 'Card',
  components: {singleItem: SingleItem, pagination: Pagination},
  props:['countries'],
  methods: {
      pushToFav(country)
      {
          this.$store.commit('pushToFavs', country);
      },
      showAddBtn(country)
      {
          let items = this.$store.favCountries;
          console.log(items);
          if(!items){return true;}

          return this.$store.favCountries
              .filter(c => c.name === country.name)
              .length > 0;
      }
  },
  computed:{

  }
}
</script>