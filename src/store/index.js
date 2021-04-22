import Vue from 'vue'
import Vuex from 'vuex'

import checkoutModule from './modules/checkoutModule'
import catalogModule from './modules/catalogModule'

Vue.use(Vuex)

/* if(module.hot){
  module.hot.accept(['./modules/checkoutModule'],['./modules/catalogModule'], () =>{

    this.$store.hotUpdate({
      modules:{
        checkoutModule,
        catalogModule
      }
    })
  })
} */

export default new Vuex.Store({
 
  modules: {
    checkoutModule,
    catalogModule
  }
  /* plugins:[createPersistedState({
    paths: ['checkoutModule.product', 'catalogModule.user']
  })], */
})
