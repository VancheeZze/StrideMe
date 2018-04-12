<template>
  <v-ons-list-item :modifier=" chevron ? 'chevron' : '' " tappable class='stock-list-item' @click="goToPage()">
    <div class="center">
      <span class="list-item__title uppercase">{{ ticket }}</span>
      <span class="list-item__subtitle uppercase">{{ amount }} Shares</span>
    </div>
  </v-ons-list-item>
</template>

<script>
export default {
  props: {
    ticket: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    chevron: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    goToPage () {
      this.$emit('onGoToPage', this.ticket)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import '../assets/styles/import-all';

.stock-list-item {
  background-color: transparent; 
}

.list-item {
  &__title {
    color: $primary;
  }
}

</style>
