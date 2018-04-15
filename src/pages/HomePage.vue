<template>
  <v-ons-page>

    <menu-toggle></menu-toggle>

    <div class="header">
      <img src="../assets/logo.png" class="header__logo" alt="vue-logo">
    </div>

    <stock-list 
      title="Stocks"
      :trades="activeTrades"
      @onGoToPage="onGoToPage"
    >
    </stock-list>

    <stock-list 
      title="History"
      :trades="activeTrades"
      @onGoToPage="onGoToPage"
    >
    </stock-list>

  </v-ons-page>
</template>

<script>
import StockList from '../blocks/stock-list'
import MenuToggle from '../components/menu-toggle'

export default {
  name: 'homePage',
  components: {
    StockList,
    MenuToggle
  },
  data () {
    return {
      activeTrades: [
        {
          id: 'kjbcpiuhnqjwq_dawda_111',
          ticket: 'AAPL',
          qty: 2
        },
        {
          id: 'kjbcpiuhnqjwq_dawda_112',
          ticket: 'KO',
          qty: 4
        },
        {
          id: 'kjbcpiuhnqjwq_dawda_113',
          ticket: 'NVDA',
          qty: 2
        },
        {
          id: 'kjbcpiuhnqjwq_dawda_114',
          ticket: 'BA',
          qty: 1
        }
      ]
    }
  },
  methods: {
    onGoToPage (page) {
      this.$store.commit('set-current-trade', page)
      this.$store.commit('page-push', 'StockDetailPage')
    }
  }
}
</script>

<style lang="scss">
.header {
  text-align: center;
  padding: 15px;
  padding-top: 50px;

  &__logo {
    width: 50%;
  }
}
</style>
