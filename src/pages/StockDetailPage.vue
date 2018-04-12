<template>
  <v-ons-page>

    <div class="header">
      <back-button></back-button>
      <h3>{{ $store.state.currentTrade.ticket }}</h3>
    </div>

  </v-ons-page>
</template>

<script>
import BackButton from '../components/back-button'

export default {
  name: 'stockDetails',
  components: {
    BackButton
  },
  data () {
    return {
      pageTitle: 'iTrade Detail Page'
    }
  },
  methods: {

  }
}
</script>


<style scoped>

</style>
