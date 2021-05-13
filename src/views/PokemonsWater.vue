<template>
  <div class="water">
    <Catalog type="11"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Catalog from '@/components/Catalog.vue'
export default {
  name: 'PokemonsWater',
  components:{
    Catalog
  },

  mounted(){
    this.$store.dispatch("changeStyleStore", {type:'water',color:'blue'})
  }
}
</script>

<style>
 .my-card{
   background: radial-gradient(circle, #ffffff  0%, #DEF3FD  100%) !important;
 } 


</style>
