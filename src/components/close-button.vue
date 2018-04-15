<template>
  <v-ons-button @click="onClick" class="close-button">
      <v-ons-icon icon="fa-times" size="25px"></v-ons-icon>
  </v-ons-button>
</template>

<script>
  export default {
    methods: {
      onClick () {
        this.$emit('onClick')
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/import-all';

.close-button {
  position: absolute;
  top: space(3);
  right: space(3);
  color: $primary;
}

</style>
