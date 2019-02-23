import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        allCountries: [],
        countryComponent: {
            countries: [],
        },
        favComponent: {
            countries: []
        },
        showAddBtn: true,
        totalResults: 1,
        showPagination: true
    },
    mutations: {
        setAllCountries(state, countries)
        {
            state.allCountries = countries;
        }
        ,
        setCountries(state, page)
        {
            state.countryComponent.countries = state.allCountries
                .splice((1-page)*10, 10);
            //state.countryComponent.countries = countries;
        },
        setTotalResults(state, length)
        {
          state.totalResults = length;
        },
        pushToFavs(state, country)
        {
            state.favComponent.countries.push(country);
        },
        changeShowPagination(state, val)
        {
            state.showPagination = val;
        }
    },
    actions: {
        getCountries({commit}){
             Vue.http
                .get('all')
                .then(response => {
                    commit('setAllCountries', response.body);
                    commit('setCountries', 1);
                    commit('setTotalResults', response.body.length);
                });
        }
    },
    getters: {
        countries: state => state.countryComponent.countries,
        favCountries: state => state.favComponent.countries
    }
});

export default store;