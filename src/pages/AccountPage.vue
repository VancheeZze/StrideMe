<template>
  <v-ons-page>
    
    <menu-toggle></menu-toggle>
    <h3>{{ pageTitle }}</h3>

  </v-ons-page>
</template>

<script>
import MenuToggle from '../components/menu-toggle'

export default {
  name: 'analytics',
  components: {
    MenuToggle
  },
  data () {
    return {
      pageTitle: 'Account Page'
    }
  },
  methods: {

  }
}
</script>


<style scoped>

</style>
