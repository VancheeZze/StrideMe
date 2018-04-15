<template>
  <v-ons-button @click="$store.commit('splitter/toggle')" class="menuIcon">
      <v-ons-icon icon="fa-bars" size="25px"></v-ons-icon>
  </v-ons-button>
</template>

<style lang="scss" scoped>
@import '../assets/styles/import-all';

.menuIcon {
  position: absolute;
  top: space(2);
  left: space(2);
  color: $primary;
}

</style>
