import AnalyticsPage from '../pages/AnalyticsPage'
import HomePage from '../pages/HomePage'
import StockDetailPage from '../pages/StockDetailPage'
import AccountPage from '../pages/AccountPage'

const pages = {
  AnalyticsPage,
  HomePage,
  StockDetailPage,
  AccountPage
}

const menuPages = [
  {
    title: 'Home',
    page: 'HomePage',
    index: 0
  }, {
    title: 'Analytics',
    page: 'AnalyticsPage',
    index: 1
  }, {
    title: 'Account',
    page: 'AccountPage',
    index: 2
  }
]

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
      console.log(state.stack.length)
      if (state.stack.length > 1) {
        state.stack.pop()
      }
    },
    'page-replace' (state, page) {
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
    },
    getMenuPages: (state) => {
      return menuPages
    }
  }
}
