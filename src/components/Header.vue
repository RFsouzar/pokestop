<template>
    <q-header elevated class="bg-red text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="@/assets/pokebola-eva.png">
          </q-avatar>
          PokeStop
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>

      <q-tabs align="left" inline-label>
          
        <!-- <q-btn icon="local_fire_department"></q-btn> -->
        <q-route-tab to="/fire" label="Fogo" icon="img:img/icons/fire.png"/>
        <q-route-tab to="/water" label="Agua" icon="img:img/icons/water.png"/>
        <q-route-tab to="/flying" label="Voadores" icon="img:img/icons/wind.png"/>
        <q-route-tab to="/dragon" label="Dragão" icon="img:img/icons/dragon.png"/>
      </q-tabs>
    </q-header>
</template>

<script>
export default {
    
}
</script>

<style lang="">
    
</style>