export default {
  state: {
    ticket: ''
  },
  mutations: {
    'set-current-trade' (state, trade) {
      state.ticket = trade
    },
    'clear-current-trade' (state) {
      state.ticket = ''
      console.log(state.ticket)
    }
  }
}
