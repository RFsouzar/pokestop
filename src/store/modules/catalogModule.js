import {HTTP, HTTPDefault} from '@/config/http-common'
const state = {
    listPokemons: []
}

const getters = {

    getListPokemon: state =>{
        return state.listPokemons;
    }
}

const mutations = {
    setListPokemons(state, payload){
        state.listPokemons = payload;
    }

}

const actions ={

    async getListOfPokemons({dispatch}, type){
        const response = await HTTP.get(`/type/${type}`)
        let pokemonsDetail = [];
        if(response.data.pokemon){
            // let pokemons = await dispatch("getPokemonDetails", response.data.pokemon.url);
            response.data.pokemon.forEach(element => {
                pokemonsDetail.push({name: element.pokemon.name, url: element.pokemon.url})
            });
            await dispatch("getDetailsPokemon", pokemonsDetail);
        }

        // commit("setListPokemons", response.data);
    },

    async getDetailsPokemon({commit}, payload){

        const generatePokemonPromises = () => Array(payload.length).fill().map((_, index) => 
            HTTPDefault.get(payload[index].url).then(response => {
                response.data.price = Math.floor(Math.random() * 500) + 20;
                return response.data;
            }))

        const pokemonPromises = generatePokemonPromises();

        Promise.all(pokemonPromises).then(pokemons => {
            console.log(pokemons)
            commit("setListPokemons", pokemons);
        })

    }

 }

export default {
    state,
    getters,
    mutations,
    actions
}