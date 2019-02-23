<template>
  <div class="search">
     <div class="container">
          <div class="row"> 
           <div class="col">
              <b-input-group  prepend="Receipts" class="mt-3 mb-3">
              <b-form-input   v-model="search" />
                <b-input-group-append>
                  <b-button variant="danger" >Search</b-button>
                </b-input-group-append>
            </b-input-group>
        </div>
           
        </div>
      </div>
     </div>
  </div>
</template>

<script>


export default {
  name: 'Search',
  components: {
    
  
  }, 
   
}
</script>