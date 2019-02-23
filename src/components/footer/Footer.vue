<template>
    <div>
        <div class="row">
        <div class="col mt-5">
        <b-col class="footer">
            &copy; Countries {{year}}
        </b-col>
    </div>
  </div>
    </div>
</template>

<script>
    export default {
        name: 'footer',
        data(){
            return {
              year: new Date().getFullYear()
            };
        }
    }
</script>

<style scoped>
    .footer{
        background-color: #343a40;
        text-align: center;
        color: white;
        padding: 12px 16px;
        overflow-x: hidden !important;
        position: fixed;
        bottom: 0;
         width: 100%;
    }
</style>