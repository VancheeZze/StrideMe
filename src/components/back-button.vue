<template>
  <v-ons-button @click="$store.commit('page-pop')" class="back-button">
      <v-ons-icon icon="fa-chevron-left"></v-ons-icon>
      Back
  </v-ons-button>
</template>

<style lang="scss" scoped>
@import '../assets/styles/import-all';

.back-button {
  color: $primary;
  position: absolute;
  top: 10px;
  left: 10px;
}

</style>
