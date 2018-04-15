<template>
  <section class='stock-list'>
    <v-ons-list-title class='uppercase'>{{ title }}</v-ons-list-title>
    <v-ons-list>
      <stock-list-item 
        v-for="trade in trades" 
        :ticket="trade.ticket" 
        :amount="trade.qty" 
        :key="trade.id"
        :chevron="hasChevrons"
        @onClick="onClick"
      >
      </stock-list-item>
    </v-ons-list>
  </section>
</template>

<script>
import StockListItem from '../components/stock-list-item'

export default {
  components: {
    StockListItem
  },
  props: {
    trades: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    hasChevrons: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    onClick (page) {
      this.$emit('onClick', page)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import '../assets/styles/import-all';

.stock-list {
  .list {
    background-color: transparent;
  }
  .list-title {
    padding-top: space(5);
    padding-bottom: space();
  }
}


</style>
