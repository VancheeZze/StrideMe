import Vue from 'vue'
import Vuex from 'vuex'

import splitter from './splitter'
import pageStack from './page-stack'
import currentTrade from './current-trade'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    splitter,
    pageStack,
    currentTrade
  }
})
