<template>
  <v-ons-page>
    
    <close-button @onClick="goBack"></close-button>
    <h3>{{ pageTitle }}</h3>

  </v-ons-page>
</template>

<script>
import CloseButton from '../components/close-button'

export default {
  name: 'new-trade',
  components: {
    CloseButton
  },
  data () {
    return {
      pageTitle: 'New Trade Page'
    }
  },
  methods: {
    goBack () {
      this.$store.commit('page-pop')
    }
  }
}
</script>


<style scoped>

</style>
