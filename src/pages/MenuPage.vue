<template>
  <v-ons-page>
    <v-ons-list-title>Portfolio Value</v-ons-list-title>
    <v-ons-list>
      <v-ons-list-item>
        <div class="center">{{ $store.state.account.portfolioValue | currency }}</div>
      </v-ons-list-item>
    </v-ons-list>

    <menu-list
      :menu-items="essentialLinks"
      title="Navigation"
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
      essentialLinks: [
        {
          title: 'Docs',
          to: 'https://onsen.io/v2/docs/guide/vue/',
          icon: 'fa-book'
        },
        {
          title: 'Gitter Chat',
          to: 'https://gitter.im/OnsenUI/OnsenUI',
          icon: 'fa-commenting'
        },
        {
          title: 'Forum',
          to: 'https://community.onsen.io',
          icon: 'fa-comments'
        },
        {
          title: 'Twitter',
          to: 'https://twitter.com/Onsen_UI',
          icon: 'fa-twitter'
        },
        {
          title: 'Playground',
          to: 'https://tutorial.onsen.io/',
          icon: 'fa-graduation-cap'
        }
      ]
    }
  },
  methods: {
    goTo (url) {
      const newWindow = window.open(url, '_blank')
      newWindow.opener = null
      newWindow.location = url
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
