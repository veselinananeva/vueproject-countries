<template>
  <div id="home">
  
    <div class="row"> 
           <div class="col m-3">
              <b-input-group  prepend="Countries" class="mt-3 mb-3">
              <b-form-input   v-model="search" />
                <b-input-group-append>
                  <b-button variant="danger" >Search</b-button>
                </b-input-group-append>
            </b-input-group>
        </div>
           
    </div>
        <div class="row m-3">
                    <div class="container">
                        <div class="row">
                                <card   :countries="countriesResults"></card>
                        </div>
                    </div>
        </div>
 
  </div>
</template>

<script>
import Search from '../search/Search'

import Card from '../card/Card';

export default {
  name: 'home',
  components: {
    Search,
    card: Card
  },

    //my-pp
    

        data(){
        return {
              countries: [],
              search: ''
            };
        },
        created() {
            this.$store.dispatch('getCountries');
            this.$store.commit('changeShowPagination', true);
        },
        computed: {
            countriesResults() {
                return this.$store
                        .getters
                        .countries
                        .filter((country) =>
                        {
                            return country.name
                                .toLowerCase()
                                .indexOf(this.search.toLowerCase()) > -1;
                        });
            }
        }

    //my-app
}
</script>
