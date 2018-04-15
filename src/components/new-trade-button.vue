<template>
  <v-ons-button @click="onClick" class="new-trade-button">
      <v-ons-icon icon="fa-plus" size="25px"></v-ons-icon>
  </v-ons-button>
</template>

<script>
  export default {
    methods: {
      onClick () {
        this.hasListner
          ? this.$emit('onClick')
          : this.$store.commit('page-push', 'NewTradePage')
      }
    },
    computed: {
      hasListner () {
        return this.$listeners && this.$listeners.onClick
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/import-all';

.new-trade-button {
  position: absolute;
  top: space(3);
  right: space(3);
  color: $primary;
}

</style>
