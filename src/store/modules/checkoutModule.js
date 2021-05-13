const state = {
    showDrawerCart: false,
    pokemonsCart: [],
}

const getters = {

    getShowDrawerCart: state => {
        return state.showDrawerCart;
    },

    getPokemonsCart: state =>{
        return state.pokemonsCart;
    }
}

const mutations = {

    setDrawering(state, value){
        state.showDrawerCart = value;
    },

    setPokemonsInCart(state, list){
        state.pokemonsCart = list;
    }
}

const actions ={

    isShowDrawerCart({commit}, payload){
        commit("setDrawering", payload);
    },

    addPokemonToCart({commit}, listPokemons){
        
        commit("setPokemonsInCart", listPokemons);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}