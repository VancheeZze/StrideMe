import AnalyticsPage from '../pages/AnalyticsPage'
import HomePage from '../pages/HomePage'
import StockDetailPage from '../pages/StockDetailPage'

const pages = {
  AnalyticsPage,
  HomePage,
  StockDetailPage
}

const noPage = (title) => {
  console.warn(`No page { ${title} } found. Did you register page in page-stack state?`)
}

export default {
  state: {
    pages,
    stack: []
  },
  mutations: {
    'page-push' (state, page) {
      if (pages[page]) {
        state.stack.push(pages[page])
      } else {
        noPage(page)
      }
    },
    'page-pop' (state) {
      state.stack.pop()
    },
    replace (state, page) {
      if (pages[page]) {
        state.stack.pop()
        state.stack.push(pages[page])
      } else {
        noPage(page)
      }
    }
  },
  getters: {
    // this.$store.getters.getPage('StockDetailPage')
    getPage: (state) => (page) => {
      if (pages[page]) {
        return pages[page]
      } else {
        noPage(page)
      }
    }
  }
}
