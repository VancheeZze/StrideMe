<template>
  <section class='menu-list'>
    <v-ons-list-title class='uppercase'>{{ title }}</v-ons-list-title>
    <v-ons-list>
      <menu-item
        v-for="item in menuItems" 
        :key="item.title"
        :title="item.title"
        :to="item.to"
        :chevron="item.chevron"
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

// @import '../assets/styles/import-all';

</style>
