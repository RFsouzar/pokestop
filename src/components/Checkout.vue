<template>
    <div>
        <q-drawer show-if-above v-model="right" :width="450" side="right" bordered>
        <!-- drawer content -->
            <!-- <span class="text-h3">Carrinho</span> -->
            <div id="titleCheckout">
                <q-icon color="grey-7" name="local_mall" style="font-size: 3em;"/>
            </div>
            
            <q-separator />
            <q-item v-for="(pokemons, index) in getListOfPokemonsInCart" :key="index" >
                <q-item-section side>
                    <q-avatar rounded size="48px">
                    <img :src="pokemons.image" />
                    <q-badge floating color="teal">{{inCart(pokemons)}}</q-badge>
                    </q-avatar>
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{pokemons.name}}</q-item-label>
                    <q-item-label caption>{{pokemons.price | formatPrice}}</q-item-label>
                </q-item-section>
                <q-item-section side>
                </q-item-section>
            </q-item>

            <q-separator />
            <q-btn >Finalizar</q-btn>
            <q-footer class="bg-grey-8 text-white">
                <q-toolbar>
                    <q-toolbar-title>
                        Total
                    </q-toolbar-title>
                    {{totalPriceCheckout(getListOfPokemonsInCart) | formatPrice}}
                </q-toolbar>
            </q-footer>
        </q-drawer>
    </div>
</template>

<script>
export default {
    data(){
        return{
            right: false
        }
    },

    computed:{
        getListOfPokemonsInCart(){
            return this.$store.getters.getPokemonsCart;
        }
    },
    filters:{
        formatPrice: function(price){
            if(!price) return ''
            return new Intl.NumberFormat('pt-br', {style:'currency', currency:'BRL'}).format(price);
        }
    },

    methods:{
        inCart(list){
            
            let repeat = [];
            this.getListOfPokemonsInCart.forEach(element => {
                if(element.name == list.name){
                    repeat.push(element);
                }
            });
            return repeat.length;
        },

        totalPriceCheckout(itensCart){
            let total=0;
            itensCart.forEach(element => {
                total += parseInt(element.price);
            });
            return total;
        }
    }
    
}
</script>

<style >
#titleCheckout {
    display: flex;
    text-align: center;
    justify-content: center;
}
    
</style>