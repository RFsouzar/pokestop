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
  }
}
</script>
