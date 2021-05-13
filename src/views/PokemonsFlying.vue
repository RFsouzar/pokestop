<template>
  <div class="flying">
    <Catalog type="3"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Catalog from '@/components/Catalog.vue'
export default {
  name: 'PokemonsFlying',
  components:{
    Catalog
  },
  mounted(){
    this.$store.dispatch("changeStyleStore", {type:'flying',color:'brown-6'})
  }
}
</script>

<style>
   .my-card{
   background: radial-gradient(circle, #ffffff  0%, #66523d  100%) !important;
 } 
</style>
