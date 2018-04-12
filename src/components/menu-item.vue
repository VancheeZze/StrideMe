<template>
  <v-ons-list-item :modifier=" chevron ? 'chevron' : '' " tappable class='menu-list-item' @click="goTo(to)">
    <div class="left" v-if="icon"><v-ons-icon fixed-width :icon="icon"></v-ons-icon></div>
    <div class="center">{{ title }}</div>
  </v-ons-list-item>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    chevron: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    goTo (to) {
      console.log(`Go to ${to}`)
    }
  }
}
</script>

<style lang="scss" scoped>

// @import '../assets/styles/import-all';


</style>
