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

  state:{
    style: { type: '', color:''}
  },

  getters:{
    getStyle: state => {
      return state.style;
    }
  },

  actions:{
    changeStyleStore({commit}, payload){
      console.log(payload)
      commit("setStyle", payload);
    }
  },
  mutations:{
    setStyle(state, value){
      state.style = value;
    }
  },
 
  modules: {
    checkoutModule,
    catalogModule
  }
  /* plugins:[createPersistedState({
    paths: ['checkoutModule.product', 'catalogModule.user']
  })], */
})
