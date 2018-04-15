<template>
  <v-ons-page>
    <v-ons-list-title>Portfolio Value</v-ons-list-title>
    <v-ons-list>
      <v-ons-list-item>
        <div class="center">{{ $store.state.account.portfolioValue | currency }}</div>
      </v-ons-list-item>
    </v-ons-list>

    <menu-list
      :menu-items="pages"
      title="Navigation"
      @goTo="goTo"
    >
    </menu-list>
  </v-ons-page>
</template>

<script>
import MenuList from '../blocks/menu-list'

export default {
  name: 'side-menu',
  components: {
    MenuList
  },
  data () {
    return {
      pages: this.$store.getters.getMenuPages
    }
  },
  methods: {
    goTo (page) {
      this.$store.commit('splitter/toggle')
      this.$store.commit('page-replace', page)
    }
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}
</style>
