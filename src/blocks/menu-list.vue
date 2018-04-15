<template>
  <section class='menu-list'>
    <v-ons-list-title class='uppercase'>{{ title }}</v-ons-list-title>
    <v-ons-list>
      <menu-item
        v-for="item in menuItems" 
        :key="item.title"
        :title="item.title"
        :page="item.page"
        :chevron="item.chevron"
        @goTo="goTo"
      > 
      </menu-item>
    </v-ons-list>
  </section>
</template>

<script>
import MenuItem from '../components/menu-item'

export default {
  components: {
    MenuItem
  },
  props: {
    menuItems: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  },
  methods: {
    goTo (page) {
      this.$emit('goTo', page)
    }
  }
}
</script>

<style lang="scss" scoped>

// @import '../assets/styles/import-all';

</style>
