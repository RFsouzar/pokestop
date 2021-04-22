<template>
    <div>
            <div class="row q-gutter-md q-pa-md">
                <div class="col-auto" v-for="pokemon in getPokemons" :key="pokemon.id" v-show="pokemon.sprites.other['official-artwork']['front_default']">
                    <q-card bordered class="my-card" >
                        <q-img :src="pokemon.sprites.other['official-artwork']['front_default']">
                            <div class="absolute-bottom">
                            <div class="text-h6">{{pokemon.name}}</div>
                            <div class="text-subtitle2">{{pokemon.price | formatPrice}}</div>
                            </div>
                        </q-img>
                        <q-card-actions>
                            <q-btn id="catchPokemon" @click="buyPokemon(pokemon)" color="red" icon="catching_pokemon" label="Eu escolho você" />
                        </q-card-actions>
                    </q-card>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            bag:[],
        }
    },
    props:["type"],

    computed:{
        getPokemons(){
            return this.$store.getters.getListPokemon;
        }
    },

    filters:{
        formatPrice: function(price){
            if(!price) return ''
            return new Intl.NumberFormat('pt-br', {style:'currency', currency:'BRL'}).format(price);
        }
    },

    methods:{

        buyPokemon(pokemon){
            const {id ,name, price} = pokemon;
            let purchasedPokemon ={
                id,
                name,
                price,
                image: pokemon.sprites.other['official-artwork']['front_default']
            }
            this.bag.push(purchasedPokemon);

            this.$store.dispatch("addPokemonToCart", this.bag);
            
        }
    },
    
    async mounted(){
        await this.$store.dispatch("getListOfPokemons", this.type);
    }
    
}
</script>   

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
  border-radius: 40px

#catchPokemon
  width: 100%
  height: 100%
  min-height: 52px
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
</style>