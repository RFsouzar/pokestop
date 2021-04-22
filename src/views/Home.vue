<template>
  <div class="home">
    <Catalog />
  </div>
</template>

<script>
// @ is an alias to /src
import Catalog from '@/components/Catalog.vue'
export default {
  name: 'Home',
  components:{
    Catalog
  }
}
</script>
