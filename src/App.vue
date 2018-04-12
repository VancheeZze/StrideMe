<template>
  <v-ons-page id="app">

    <v-ons-splitter>
      <v-ons-splitter-side swipeable collapse width="250px"
        :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'"
        :open.sync="menuIsOpen">

        <menu-page></menu-page>

      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <v-ons-navigator swipeable
            :page-stack="$store.state.pageStack.stack"
        ></v-ons-navigator>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'

export default {
  name: 'app',
  computed: {
    menuIsOpen: {
      get () {
        return this.$store.state.splitter.open
      },
      set (newValue) {
        this.$store.commit('splitter/toggle', newValue)
      }
    }
  },
  beforeCreate () {
    this.$store.commit('page-push', 'HomePage')
  },
  components: {
    HomePage,
    MenuPage
  }
}
</script>

<style lang="scss">
@import './assets/styles/import-all';

ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}

.uppercase {
  text-transform: uppercase !important;
}

.menuIcon {
  position: absolute;
  top: space(2);
  left: space(2);
  color: $primary;
}
</style>
