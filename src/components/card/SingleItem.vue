<template>
  <div class="white-style" >
        <b-row>
        <div class="col-md-6">
            <img :src="country.flag" class="img-fluid"/>
        </div>
        <div class="col-md-6">
            <b-card-body :title="country.name">
                <hr/>
                <div class="row">
                    <div class="col-6">
                        <p> Region:  <span class="font-weight-bold"> {{country.region}}</span> </p>
                        <p> Subregion: <span class="font-weight-bold"> {{country.subregion}} </span> </p> 
                    </div>
                     <div class="col-6">
                        <p> Population:  <span class="font-weight-bold"> {{country.population}}</span> people </p>
                        <p> Capital City: <span class="font-weight-bold"> {{country.capital}} </span> </p> 
                    </div>
                </div>

                <b-button v-show="showAddBtn" variant="danger" @click="pushToFav(country)">Add to Favorite </b-button>
            </b-card-body>
        </div>
         </b-row>
  </div>
</template>
<script>
    export default {

        name: 'Card',
        components: {},
        props:['country'],
        methods: {
            pushToFav(country)
            {
                this.$store.commit('pushToFavs', country);
            }

        },
        computed:{
            showAddBtn()
            {
                let items = this.$store.getters.favCountries;
                if(items.length === 0){return true;}
                let result = this.$store.getters.favCountries
                    .filter(c => c.name === this.country.name)
                    .length === 0;

                return result;
            }
        }
    }
</script>
<style>
.white-style {
     background-color: white;
     box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
     margin-top: 10px;
     padding: 5px;
}
</style>