<template>
  <v-ons-page>
    
    <menu-toggle></menu-toggle>
    <new-trade-button></new-trade-button>
    
    <h3>{{ pageTitle }}</h3>

  </v-ons-page>
</template>

<script>
import MenuToggle from '../components/menu-toggle'
import NewTradeButton from '../components/new-trade-button'

export default {
  name: 'account',
  components: {
    MenuToggle,
    NewTradeButton
  },
  data () {
    return {
      pageTitle: 'Account Page'
    }
  },
  methods: {

  }
}
</script>


<style scoped>

</style>
