<template>
  <div class="fire">
    <Catalog type="10"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Catalog from '@/components/Catalog.vue'
export default {
  name: 'PokemonsFire',
  components:{
    Catalog
  },
  mounted(){
    this.$store.dispatch("changeStyleStore", {type:'fire',color:'red'})
  }
}
</script>

<style>
 .my-card{
   background: radial-gradient(circle, #ffffff  0%, #f5afaf  100%) !important;
 } 


</style>
