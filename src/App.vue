<template>
  <q-layout view="hHh lpR fFf">

    <Header />

    <Checkout />

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer />
  </q-layout>
    
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Checkout from '@/components/Checkout'

export default {
  name: 'LayoutDefault',
  components:{
    Header,
    Footer,
    Checkout
  },
}
</script>

<style>
</style>
