<template>
  <v-ons-page>

    <back-button></back-button>
    <h3>{{ pageTitle }}</h3>

  </v-ons-page>
</template>

<script>
import BackButton from '../components/back-button'

export default {
  name: 'analytics',
  components: {
    BackButton
  },
  data () {
    return {
      pageTitle: 'Analytics Page'
    }
  },
  methods: {

  }
}
</script>


<style scoped>

</style>
