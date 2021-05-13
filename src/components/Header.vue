<template>
    <q-header elevated :class="'bg-'+theme.color" height-hint="98">
     <!--  <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="@/assets/pokebola-eva.png">
          </q-avatar>
          PokeStop
        </q-toolbar-title>
         
         <q-input outlined densev-model="text" label="Outlined" />
      </q-toolbar> -->

  

      <div class="row q-pa-sm q-gutter-md">
        <div class="col-auto">
           <q-avatar>
            <img src="@/assets/pokebola-eva.png">
          </q-avatar>
          
        </div>
        <div class="col-auto self-center">
          <q-toolbar-title>
            PokeStop
          </q-toolbar-title>
        </div>
        <div class="col-6 self-center">
          <q-input dark dense standout style="width: 500px" color="red" label="Pesquise aqui o seu Pokemon" v-model="filter" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="filter === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="filter = ''" />
          </template>
        </q-input>
        </div>
      </div>

      <q-tabs align="left" inline-label>
          
        <!-- <q-btn icon="local_fire_department"></q-btn> -->
        <q-route-tab to="/fire"  label="Fogo" />
        <q-route-tab to="/water"  label="Agua" />
        <q-route-tab to="/flying"  label="Voadores" />
        <q-route-tab to="/dragon" label="Dragão" />
      </q-tabs>
    </q-header>
</template>

<script>
export default {
    computed:{
      theme(){
        return this.$store.getters.getStyle;
      },

      getPokemons(){
            return this.$store.getters.getListPokemon;
        },
    },

    data(){
      return{
        filter:''
      }
    },

    methods:{
      changeTab(style){
       this.$store.dispatch("changeStyleStore", style)
      },

      filterPokemon(){

      }
    }
}
</script>

<style lang="">
    
</style>