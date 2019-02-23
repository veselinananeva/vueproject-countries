<template>
    <div class="text-center mt-2"> 
        <b-pagination v-show="isPaginationVisible"
                  align="center"
                  :total-rows="totalRows"
                  v-model="currentPage"
                  :per-page="20"
                  @input="input">
    </b-pagination>
    </div>
    
</template>

<script>
    export default {
        name: 'pagination',
        data() {
            return {
                currentPage: 1,
            };
        },
        computed: {
            totalRows() {
                return this.$store.state.totalResults;
            },
            isPaginationVisible(){
                return this.$store.state.showPagination;
            }
        },
        methods: {
            input(value) {
                this.$store.commit('setCountries', value);
            },
        },
    };
</script>