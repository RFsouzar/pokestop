<template>
  <div class="dragon">
    <Catalog type="16"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Catalog from '@/components/Catalog.vue'
export default {
  name: 'PokemonsDragon',
  components:{
    Catalog
  },
  mounted(){
    this.$store.dispatch("changeStyleStore", {type:'dragon',color:'dark'})
  }
}
</script>

<style>

 .my-card{
   background: radial-gradient(circle, #ffffff  0%, #333435  100%) !important;
 } 
  
</style>
